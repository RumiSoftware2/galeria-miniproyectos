import { motion } from 'framer-motion';
import { categories } from '../../data/projects';
import './Navbar.css';

export const Navbar = ({ selectedCategory, onCategoryChange, isOpen, onToggleSidebar }) => {
  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <>
      <motion.button
        className="sidebar-toggle"
        onClick={() => onToggleSidebar(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>

      <motion.nav
        className={`sidebar-navbar ${isOpen ? 'open' : 'closed'}`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      >
        <motion.div className="sidebar-header" variants={itemVariants}>
          <div className="logo">
            <span className="logo-text">Rumi</span>
            <span className="logo-accent">.</span>
          </div>
          <button className="close-btn" onClick={() => onToggleSidebar(false)}>
            ✕
          </button>
        </motion.div>

        <motion.div className="sidebar-divider" variants={itemVariants} />

        <motion.div className="categories-section" variants={sidebarVariants}>
          <h3 className="section-title">Categorías</h3>
          <ul className="categories-list">
            {categories.map((category, index) => (
              <motion.li key={index} variants={itemVariants}>
                <button
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="btn-dot"></span>
                  {category}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="sidebar-footer" variants={itemVariants}>
          <p>&copy; Rumi Software 2024</p>
        </motion.div>
      </motion.nav>

      {isOpen && <div className="sidebar-overlay" onClick={() => onToggleSidebar(false)} />}
    </>
  );
};
