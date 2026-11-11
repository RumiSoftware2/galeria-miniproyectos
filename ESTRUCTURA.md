# Estructura del portafolio

```text
src/
├── App.jsx                         # Estado de navegación y composición de la página
├── App.css                         # Layout principal y pie de página
├── components/
│   ├── Navbar/                      # Menú de categorías, incluidos móvil y escritorio
│   ├── Hero/                        # Presentación, logo de marca y accesos por categoría
│   ├── Gallery/                     # Filtrado y estado vacío de la galería
│   └── ProjectCard/                 # Tarjeta de proyecto con portada y enlaces
├── data/
│   ├── categories.js                # Registro único de categorías
│   ├── projects.js                  # Proyectos confirmados por el usuario
│   └── validateProjects.js         # Validación de id, categoría y enlaces
└── styles/globals.css              # Variables, tipografía, foco y estilos globales

public/
└── projects/                        # Portadas <id>.webp, .jpg o .png
```

## Categorías registradas

| Id | Categoría |
|---|---|
| `upn` | Universidad Pedagógica Nacional · Docencia |
| `sena` | Emprendimientos SENA |
| `personales` | Proyectos personales |
| `areandina` | Areandina · Ingeniería de Sistemas |

El menú lateral y la galería usan estos mismos datos. Cada categoría muestra su contador y filtra los proyectos sin cambiar de ruta. En móvil, el menú se abre como panel lateral.

Para agregar un proyecto, sigue los campos y convenciones descritos en `README.md` y `src/data/projects.js`. No hacen falta cambios en los componentes para una ficha estándar.
