import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Gallery.css';

export const Gallery = ({ selectedCategory }) => {
  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.categoria === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="gallery section-padding"
      layout
    >
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          key={selectedCategory}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>
            Proyectos: <span className="text-accent">{selectedCategory}</span>
          </h2>
          <p>
            {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} encontrados
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))
            ) : (
              <motion.div className="empty-state" variants={itemVariants}>
                <div className="empty-icon">○</div>
                <h3>No hay proyectos en esta categoría</h3>
                <p>Selecciona otra categoría para explorar</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
