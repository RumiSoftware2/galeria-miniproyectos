import { motion } from 'framer-motion';
import './ProjectCard.css';

export const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const statusStyles = {
    ready: 'status-ready',
    progress: 'status-progress',
    planning: 'status-planning',
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="card-inner" variants={hoverVariants}>
        {/* Image Section */}
        <div className="card-image">
          <img src={project.imagen} alt={project.titulo} />
          <div className="image-overlay">
            <div className="overlay-content">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.link, '_blank')}
              >
                GitHub
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.demo, '_blank')}
              >
                Demo
              </motion.button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="card-content">
          {/* Header with Status */}
          <div className="card-header">
            <h3 className="card-title">{project.titulo}</h3>
            <span className={`status-badge ${statusStyles[project.status]}`}>
              {project.status === 'ready' ? '✓ Ready' : project.status === 'progress' ? '⟳ En progreso' : '○ Planeando'}
            </span>
          </div>

          {/* Description */}
          <p className="card-description">{project.descripcion}</p>

          {/* Features */}
          <div className="card-features">
            {project.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="feature-item">
                <span className="feature-dot">•</span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
            {project.features.length > 2 && (
              <div className="feature-item">
                <span className="feature-dot">+</span>
                <span className="feature-text">{project.features.length - 2} más</span>
              </div>
            )}
          </div>

          {/* Technologies */}
          <div className="card-technologies">
            {project.tecnologias.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="card-buttons">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              → GitHub
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              → Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
