import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';

export const Hero = ({ categories, projectCounts, onCategoryChange }) => {
  const shouldReduceMotion = useReducedMotion();
  const motionDuration = shouldReduceMotion ? 0 : 0.55;

  return (
    <section id="inicio" className="hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDuration, ease: 'easeOut' }}
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

        <motion.div
          className="hero-aside"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: 'easeOut',
          }}
        >
          <figure className="hero-brand-visual">
            <img
              src="/logoproyectos.png"
              alt="Logo ilustrado de Proyectos Rumi con un perro y un ave junto al nombre de la marca."
              width="1400"
              height="1120"
              fetchPriority="high"
            />
          </figure>

          <section className="hero-overview" aria-labelledby="overview-title">
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
          </section>
        </motion.div>
      </div>

      <div className="hero-bottomline" aria-hidden="true">
        <span>Proyectos académicos y personales</span>
        <span>Diseño · Tecnología · Aprendizaje</span>
      </div>
    </section>
  );
};
