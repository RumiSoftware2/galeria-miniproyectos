import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  const [failedCover, setFailedCover] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const hasCover = Boolean(project.cover) && failedCover !== project.cover;

  return (
    <motion.article
      className="project-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div className={`card-cover${hasCover ? ' has-cover' : ''}`}>
        {hasCover ? (
          <img
            src={project.cover}
            alt={project.coverAlt || `Portada de ${project.title}`}
            loading="lazy"
            width="960"
            height="540"
            onError={() => setFailedCover(project.cover)}
          />
        ) : (
          <div className="card-cover-placeholder" aria-hidden="true">
            <span className="placeholder-symbol">R</span>
            <span className="placeholder-line" />
            <span className="placeholder-caption">Portafolio Rumi</span>
          </div>
        )}
        <span className="card-category">{project.categoryName}</span>
      </div>

      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <div className="card-actions">
          {project.url && (
            <a
              className="project-link project-link-primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title}`}
            >
              Ver proyecto <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              className="project-link project-link-secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${project.title}`}
            >
              Código <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
