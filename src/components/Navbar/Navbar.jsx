import { useEffect } from 'react';
import './Navbar.css';

export const Navbar = ({
  categories,
  projectCounts,
  selectedCategory,
  onCategoryChange,
  isOpen,
  onToggleSidebar,
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onToggleSidebar(false);
        document.querySelector('.menu-toggle')?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onToggleSidebar]);

  const closeSidebar = () => {
    onToggleSidebar(false);
    if (window.matchMedia('(max-width: 900px)').matches) {
      document.querySelector('.menu-toggle')?.focus();
    }
  };

  const selectCategory = (categoryId) => {
    onCategoryChange(categoryId);
    closeSidebar();
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Cerrar menú de categorías' : 'Abrir menú de categorías'}
        aria-expanded={isOpen}
        aria-controls="category-navigation"
        onClick={() => onToggleSidebar(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <aside
        id="category-navigation"
        className={`sidebar-navbar${isOpen ? ' is-open' : ''}`}
      >
        <a
          className="brand"
          href="#inicio"
          onClick={() => {
            onCategoryChange('todos');
            closeSidebar();
          }}
        >
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-name">Rumi<span>.</span></span>
        </a>

        <p className="sidebar-intro">Portafolio de proyectos</p>

        <nav className="category-navigation" aria-label="Categorías de proyectos">
          <p className="nav-eyebrow">Explorar por área</p>
          <ul className="categories-list">
            <li>
              <button
                type="button"
                className={`category-btn${selectedCategory === 'todos' ? ' active' : ''}`}
                aria-pressed={selectedCategory === 'todos'}
                onClick={() => selectCategory('todos')}
              >
                <span className="category-indicator" aria-hidden="true">✳</span>
                <span className="category-label">Todos los proyectos</span>
                <span className="category-count">{Object.values(projectCounts).reduce((sum, count) => sum + count, 0)}</span>
              </button>
            </li>
            {categories.map((category, index) => (
              <li key={category.id}>
                <button
                  type="button"
                  className={`category-btn${selectedCategory === category.id ? ' active' : ''}`}
                  aria-pressed={selectedCategory === category.id}
                  onClick={() => selectCategory(category.id)}
                >
                  <span className="category-indicator" aria-hidden="true">0{index + 1}</span>
                  <span className="category-label">{category.shortName}</span>
                  <span className="category-count">{projectCounts[category.id] ?? 0}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-bottom">
          <span className="availability-dot" aria-hidden="true" />
          <p>Portafolio en crecimiento</p>
          <span className="sidebar-caption">Un espacio para proyectos de distintas áreas.</span>
        </div>
      </aside>

      {isOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          aria-label="Cerrar menú de categorías"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};
