import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = ({ selectedCategory }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageContainerVariants = {
    initial: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    animated: {
      scale: 0.25,
      x: 'calc(100vw - 120px)',
      y: '-20px',
      opacity: 0.8,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const isGalleryActive = selectedCategory !== 'Todos';

  return (
    <motion.section
      className="hero"
      layout
    >
      <motion.div
        className="hero-image-container"
        variants={imageContainerVariants}
        initial="initial"
        animate={isGalleryActive ? 'animated' : 'initial'}
      >
        <motion.div className="hero-image" variants={imageVariants} initial="hidden" animate="visible">
          <div className="image-wrapper">
            <div className="gradient-border"></div>
            <img src="/logoproyectos.png" alt="Logo Proyectos" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-container"
        animate={{ 
          y: isGalleryActive ? -300 : 0,
          opacity: isGalleryActive ? 0 : 1,
          pointerEvents: isGalleryActive ? 'none' : 'auto'
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.div className="hero-content" variants={contentVariants}>
          <h1 className="hero-title">
            <span className="text-accent">Portafolio</span> Interactivo
          </h1>
          <p className="hero-subtitle">
            Explora proyectos de desarrollo web, inteligencia artificial y matemáticas aplicada
          </p>
          <p className="hero-description">
            Soluciones innovadoras construidas con tecnología moderna
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          opacity: isGalleryActive ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <span>Explora abajo</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};
