import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import './styles/globals.css';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-layout">
      <Navbar 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
        isOpen={isSidebarOpen}
        onToggleSidebar={setIsSidebarOpen}
      />
      
      <main className={`app-main ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <Hero selectedCategory={selectedCategory} />
        <div className="section-margin">
          <Gallery selectedCategory={selectedCategory} />
        </div>
        
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Rumi Software. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="https://github.com/RumiSoftware2" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


export default App;
