# Estructura del Proyecto - Portafolio Interactivo

## 📁 Arquitectura de Carpetas

```
src/
├── assets/               # Imágenes y recursos estáticos
├── components/           # Componentes reutilizables
│   ├── Navbar/
│   │   ├── Navbar.jsx    # Menú de navegación con categorías
│   │   └── Navbar.css    # Estilos del navbar
│   ├── Hero/
│   │   ├── Hero.jsx      # Sección principal con imagen
│   │   └── Hero.css      # Estilos del hero
│   ├── ProjectCard/
│   │   ├── ProjectCard.jsx  # Tarjeta individual de proyecto
│   │   └── ProjectCard.css  # Estilos de tarjetas
│   └── Gallery/
│       ├── Gallery.jsx   # Contenedor de galería
│       └── Gallery.css   # Estilos de galería
├── data/
│   └── projects.js       # Datos de proyectos y categorías
├── pages/                # Páginas de la aplicación (para futuro)
├── styles/
│   └── globals.css       # Estilos globales y variables CSS
├── App.jsx              # Componente raíz principal
└── main.jsx             # Punto de entrada de React
```

## 🎨 Componentes Principales

### 1. **Navbar**
- Menú sticky con categorías de proyectos
- Animaciones suaves con Framer Motion
- Responsive con menú mobile
- Logo animado con gradiente

### 2. **Hero**
- Sección principal centrada
- Imagen con borde gradiente
- Indicador de scroll animado
- Efectos de hover en imagen

### 3. **ProjectCard**
- Tarjeta con overlay en hover
- Botones GitHub y Demo
- Estado del proyecto (Ready, En progreso, Planeando)
- Lista de features
- Badges de tecnologías
- Animaciones de entrada con stagger

### 4. **Gallery**
- Grid responsivo de tarjetas
- Filtrado por categoría
- Transiciones suaves al cambiar categoría
- Estado vacío cuando no hay proyectos

## 🎯 Características Principales

### Animaciones
- ✨ Entrada de componentes con Framer Motion
- 🎲 Stagger animations en tarjetas
- 🖱️ Hover effects en tarjetas y botones
- 🔄 Transiciones suaves entre categorías
- 📊 Scroll indicator animado

### Diseño
- 🌙 Modo oscuro por defecto
- 🎨 Gradientes modernos (Cyan + Indigo)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Variables CSS para fácil personalización
- 🎭 Glassmorphism en navbar

### Datos
- Proyectos estructurados con metadata
- Categorías dinámicas
- Features y tecnologías por proyecto
- Estados personalizables

## 🚀 Variables CSS Disponibles

```css
--bg-primary: #0a0e27       /* Fondo principal */
--bg-secondary: #151b2f     /* Fondo secundario */
--bg-tertiary: #1f2937      /* Fondo terciario */
--text-primary: #ffffff     /* Texto principal */
--text-secondary: #a0aec0   /* Texto secundario */
--accent: #00d4ff           /* Color acento principal (Cyan) */
--accent-secondary: #6366f1 /* Color acento secundario (Indigo) */
--border: #2d3748           /* Color de bordes */
--success: #10b981          /* Color de éxito */
--warning: #f59e0b          /* Color de advertencia */
```

## 📝 Estructura de Datos de Proyectos

Cada proyecto en `projects.js` tiene:

```javascript
{
  id: número,
  titulo: string,
  descripcion: string,
  tecnologias: array,
  imagen: string,
  link: string (GitHub),
  demo: string,
  status: 'ready' | 'progress' | 'planning',
  categoria: string,
  features: array
}
```

## 🔧 Cómo Agregar Nuevos Proyectos

1. Edita `src/data/projects.js`
2. Agrega un nuevo objeto al array `projects`
3. Asegúrate de usar las propiedades correctas
4. La categoría debe existir en el array `categories`

## 🛠️ Personalización

### Cambiar Colores
Modifica las variables CSS en `src/styles/globals.css`:

```css
:root {
  --accent: #tu-color-aqui;
  --accent-secondary: #otro-color;
  /* ... más variables */
}
```

### Agregar Nuevas Categorías
En `src/data/projects.js`:

```javascript
export const categories = ["Todos", "Tu-Categoria", ...];
```

### Modificar Animaciones
Edita los `variants` en cada componente usando la API de Framer Motion.

## 📦 Dependencias

- **react** (^19.2.5) - Framework principal
- **react-dom** (^19.2.5) - Renderizado
- **framer-motion** - Animaciones fluidas
- **vite** - Build tool y dev server

## 🚀 Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run lint     # Ejecutar ESLint
npm run preview  # Previsualizar build de producción
```

## 📱 Breakpoints Responsive

- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: hasta 480px

## ✨ Próximas Mejoras Sugeridas

- [ ] Agregar página de detalles de proyecto
- [ ] Implementar filtrado por tecnología
- [ ] Agregar búsqueda de proyectos
- [ ] Dark/Light mode toggle
- [ ] Lazy loading de imágenes
- [ ] Integración con GitHub API
- [ ] Blog de artículos
- [ ] Sección de testimonios

---

**Estructura creada por:** GitHub Copilot  
**Fecha:** 2024
