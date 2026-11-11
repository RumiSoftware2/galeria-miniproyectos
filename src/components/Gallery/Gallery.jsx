import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ThumbnailManager } from '../ThumbnailManager/ThumbnailManager';
import './Gallery.css';

export const Gallery = ({
  categories,
  projects,
  allProjects,
  covers,
  isLoadingCovers,
  coverStorageError,
  onSaveCover,
  onRemoveCover,
  selectedCategory,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const activeCategory = categories.find(({ id }) => id === selectedCategory);
  const heading = activeCategory?.name ?? 'Todos los proyectos';

  return (
    <section id="proyectos" className="gallery" aria-labelledby="gallery-title">
      <div className="gallery-container">
        <header className="gallery-header">
          <div>
            <p className="eyebrow gallery-eyebrow"><span /> Galería</p>
            <h2 id="gallery-title">{heading}</h2>
            <p className="gallery-description">
              {activeCategory?.description ?? 'Explora los proyectos organizados por área.'}
            </p>
          </div>
          <p className="project-count" aria-live="polite">
            <span>{projects.length.toString().padStart(2, '0')}</span>
            {projects.length === 1 ? ' proyecto' : ' proyectos'}
          </p>
        </header>

        <ThumbnailManager
          projects={allProjects}
          categories={categories}
          covers={covers}
          isLoading={isLoadingCovers}
          storageError={coverStorageError}
          onSaveCover={onSaveCover}
          onRemoveCover={onRemoveCover}
        />

        <AnimatePresence mode="wait">
          {projects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              className="gallery-grid"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`empty-${selectedCategory}`}
              className="empty-state"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            >
              <div className="empty-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="empty-kicker">En preparación</p>
              <h3>Aún no hay proyectos publicados</h3>
              <p className="empty-copy">
                Esta categoría aparecerá aquí cuando sus proyectos estén listos para compartir.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
