import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';

export const Hero = ({ categories, projectCounts, onCategoryChange }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="hero">
    <div className="hero-orb hero-orb-one" aria-hidden="true" />
    <div className="hero-orb hero-orb-two" aria-hidden="true" />

    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
      >
        <p className="eyebrow"><span /> Portafolio profesional</p>
        <h1 className="hero-title">
          Ideas que se convierten en <span>proyectos.</span>
        </h1>
        <p className="hero-description">
          Una colección en crecimiento de proyectos de docencia, emprendimiento,
          ingeniería e iniciativas personales.
        </p>
        <a className="hero-cta" href="#proyectos">
          Explorar proyectos <span aria-hidden="true">↓</span>
        </a>
      </motion.div>

      <motion.section
        className="hero-overview"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.12, ease: 'easeOut' }}
        aria-labelledby="overview-title"
      >
        <div className="overview-heading">
          <span className="overview-kicker">01 — 04</span>
          <h2 id="overview-title" className="overview-title">Áreas del portafolio</h2>
        </div>
        <ul className="overview-list">
          {categories.map((category, index) => (
            <li key={category.id}>
              <button
                className="overview-item"
                type="button"
                onClick={() => {
                  onCategoryChange(category.id);
                  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'auto' });
                }}
              >
                <span className="overview-number">0{index + 1}</span>
                <span className="overview-name">{category.name}</span>
                <span className="overview-count">{projectCounts[category.id] ?? 0}</span>
                <span className="overview-arrow" aria-hidden="true">↗</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="overview-note">Selecciona un área para ver sus proyectos.</p>
      </motion.section>
    </div>
    <div className="hero-bottomline" aria-hidden="true">
      <span>Proyectos académicos y personales</span>
      <span>Diseño · Tecnología · Aprendizaje</span>
    </div>
  </section>
  );
};
