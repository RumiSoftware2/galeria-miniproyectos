import { useMemo, useState } from 'react';
import './ThumbnailManager.css';

const ACCEPTED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_FILE_SIZE = 8 * 1024 * 1024;

const extensionForType = (type) => ({
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}[type]);

export const ThumbnailManager = ({
  projects,
  categories,
  covers,
  isLoading,
  storageError,
  onSaveCover,
  onRemoveCover,
}) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState({});
  const categoryNames = useMemo(
    () => new Map(categories.map(({ id, shortName }) => [id, shortName])),
    [categories],
  );
  const filteredProjects = projects.filter((project) => (
    project.title.toLocaleLowerCase('es').includes(query.trim().toLocaleLowerCase('es'))
  ));
  const savedCount = projects.filter((project) => covers[project.id] && !project.cover).length;

  const showMessage = (projectId, message, isError = false) => {
    setMessages((current) => ({
      ...current,
      [projectId]: { text: message, isError },
    }));
  };

  const handleFileChange = async (projectId, event) => {
    const [file] = event.target.files ?? [];
    event.target.value = '';
    if (!file) return;

    if (!ACCEPTED_TYPES.has(file.type)) {
      showMessage(projectId, 'Usa una imagen JPG, PNG o WebP.', true);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      showMessage(projectId, 'La imagen debe pesar máximo 8 MB.', true);
      return;
    }

    showMessage(projectId, 'Guardando miniatura…');
    const saved = await onSaveCover(projectId, file);
    showMessage(
      projectId,
      saved ? 'Miniatura guardada en este navegador.' : 'No se pudo guardar. Revisa el almacenamiento del navegador.',
      !saved,
    );
  };

  const handleRemove = async (projectId) => {
    const removed = await onRemoveCover(projectId);
    showMessage(
      projectId,
      removed ? 'Miniatura quitada; se muestra el marcador.' : 'No se pudo quitar la miniatura.',
      !removed,
    );
  };

  const exportProjectConfig = () => {
    const exportProjects = projects.map((project) => {
      const cover = covers[project.id];
      const extension = cover && extensionForType(cover.type);
      return !project.cover && cover && extension
        ? {
          ...project,
          cover: `/projects/${project.id}.${extension}`,
          coverAlt: `Miniatura de ${project.title}`,
        }
        : project;
    });
    const source = `export const projects = ${JSON.stringify(exportProjects, null, 2)};\n`;
    const fileUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'projects-con-portadas.js';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
  };

  return (
    <details className="thumbnail-manager">
      <summary className="thumbnail-manager-summary">
        <span className="thumbnail-manager-icon" aria-hidden="true">＋</span>
        <span className="thumbnail-manager-title">Gestionar miniaturas</span>
        <span className="thumbnail-manager-count">
          {isLoading ? 'Cargando…' : `${savedCount} guardadas`}
        </span>
      </summary>

      <div className="thumbnail-manager-content">
        <p className="thumbnail-manager-note">
          Elige una imagen para cada proyecto. Se guarda en este navegador y se muestra enseguida
          en su tarjeta. Para que todos la vean en la web publicada, la imagen debe agregarse al
          proyecto y desplegarse en Vercel. Al terminar puedes descargar las imágenes y la
          configuración lista para integrarla al proyecto.
        </p>

        <button
          className="thumbnail-export-button"
          type="button"
          disabled={savedCount === 0}
          onClick={exportProjectConfig}
        >
          Descargar configuración con portadas
        </button>

        {storageError && <p className="thumbnail-manager-error" role="alert">{storageError}</p>}

        <label className="thumbnail-search-label" htmlFor="thumbnail-project-search">
          Buscar proyecto
        </label>
        <input
          id="thumbnail-project-search"
          className="thumbnail-search"
          type="search"
          placeholder="Escribe el nombre del proyecto"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="thumbnail-manager-list">
          {filteredProjects.map((project) => {
            const cover = covers[project.id];
            const isPublished = Boolean(project.cover);
            const coverUrl = project.cover ?? cover?.url;
            const message = messages[project.id];
            const inputId = `thumbnail-upload-${project.id}`;
            const extension = cover && extensionForType(cover.type);

            return (
              <article className="thumbnail-project-row" key={project.id}>
                <div className="thumbnail-preview">
                  {coverUrl ? (
                    <img src={coverUrl} alt={`Miniatura actual de ${project.title}`} />
                  ) : (
                    <span aria-hidden="true">{project.title.slice(0, 1)}</span>
                  )}
                </div>

                <div className="thumbnail-project-info">
                  <h3>{project.title}</h3>
                  <p>{categoryNames.get(project.category) ?? 'Proyecto'}</p>
                  {message && (
                    <p className={message.isError ? 'thumbnail-row-message is-error' : 'thumbnail-row-message'} aria-live="polite">
                      {message.text}
                    </p>
                  )}
                </div>

                <div className="thumbnail-project-actions">
                  {isPublished ? (
                    <span className="thumbnail-published-lock">
                      Portada publicada · cambio desde código
                    </span>
                  ) : (
                    <>
                      <input
                        id={inputId}
                        className="thumbnail-file-input"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        aria-label={`Subir miniatura para ${project.title}`}
                        disabled={isLoading}
                        onChange={(event) => handleFileChange(project.id, event)}
                      />
                      <label className="thumbnail-action-button" htmlFor={inputId}>
                        {cover ? 'Cambiar' : 'Subir imagen'}
                      </label>
                      {cover?.url && (
                        <>
                          <a
                            className="thumbnail-action-link"
                            href={cover.url}
                            download={`${project.id}.${extension}`}
                          >
                            Descargar
                          </a>
                          <button
                            className="thumbnail-action-link thumbnail-remove-button"
                            type="button"
                            onClick={() => handleRemove(project.id)}
                          >
                            Quitar
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
          {filteredProjects.length === 0 && (
            <p className="thumbnail-manager-empty">No encontramos proyectos con ese nombre.</p>
          )}
        </div>
      </div>
    </details>
  );
};
