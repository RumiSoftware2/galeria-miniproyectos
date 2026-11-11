import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { useProjectCovers } from './hooks/useProjectCovers';
import { categories } from './data/categories';
import { projects } from './data/projects';
import { validateProjects } from './data/validateProjects';
import './styles/globals.css';
import './App.css';

validateProjects(projects, categories);

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    covers,
    isLoading: isLoadingCovers,
    storageError: coverStorageError,
    saveCover,
    removeCover,
  } = useProjectCovers();

  const categoryNames = new Map(categories.map((category) => [category.id, category.shortName]));
  const projectCounts = Object.fromEntries(categories.map(({ id }) => [
    id,
    projects.filter((project) => project.category === id).length,
  ]));

  const filteredProjects = selectedCategory === 'todos'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);
  const visibleProjects = filteredProjects.map((project) => ({
    ...project,
    cover: project.cover ?? covers[project.id]?.url,
    categoryName: categoryNames.get(project.category) ?? 'Proyecto',
  }));

  return (
    <div className="app-layout">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar
        categories={categories}
        projectCounts={projectCounts}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        isOpen={isSidebarOpen}
        onToggleSidebar={setIsSidebarOpen}
      />

      <main id="contenido" className="app-main">
        <Hero
          categories={categories}
          projectCounts={projectCounts}
          onCategoryChange={setSelectedCategory}
        />
        <Gallery
          categories={categories}
          projects={visibleProjects}
          allProjects={projects}
          covers={covers}
          isLoadingCovers={isLoadingCovers}
          coverStorageError={coverStorageError}
          onSaveCover={saveCover}
          onRemoveCover={removeCover}
          selectedCategory={selectedCategory}
        />
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Rumi Software</p>
          <a href="https://github.com/RumiSoftware2" target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </main>
    </div>
  );
}

export default App;
