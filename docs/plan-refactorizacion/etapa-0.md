# Etapa 0 — Inspección y línea base

Fecha: 2026-11-03  
Rama: `refactor/etapa-0`  
Commit auditado: `c3e42852ba640a101d080832e3af1f1e024e1c05`

## Alcance y estado

La revisión del repositorio se realizó antes de cualquier cambio de código. Se actualizaron los datos comprobados y las discrepancias en `GuiaProyecto/01-auditoria-y-arquitectura.md`. No se modificó código de la aplicación ni se instalaron dependencias.

La captura de escritorio fue compartida por el usuario el 2026-11-11. La inspección visual móvil quedó pendiente porque el permiso del navegador para `http://127.0.0.1:5173/` fue denegado. El usuario después solicitó preparar la galería; la adaptación móvil se realizó con base en los breakpoints y estilos del código y queda pendiente una comprobación visual en E7.

## Línea base

| Elemento | Resultado |
|---|---|
| Proyecto | `proyectos-rumi` |
| Tecnologías | React 19.2.5, Vite 8.0.10, JavaScript/JSX, CSS plano, Framer Motion 12.38.0 |
| Datos | Seis proyectos y cuatro categorías (`Todos`, `Web`, `IA`, `Matemáticas`) en `src/data/projects.js` |
| Navegación | Vista única; filtro por categoría en estado local, sin router |
| Build | `node node_modules/vite/bin/vite.js build` — correcto; 425 módulos transformados. Vite reportó una advertencia de tiempos del plugin `rolldown:vite-resolve`. |
| Lint | `node node_modules/eslint/bin/eslint.js .` — correcto, sin hallazgos |
| Tests | No hay script ni dependencias de test configurados |
| Node | `v24.22.1` |
| Imágenes de proyectos | Las rutas `/projects/*.png` están referenciadas en los datos, pero `public/projects/` no existe en el árbol inspeccionado |
| Capturas visuales | Pendientes por rechazo del control de Chrome |

## Hallazgos principales

1. Los proyectos ya están separados de los componentes, pero las categorías viven en el mismo módulo. El esquema actual (`titulo`, `categoria`, `imagen`, `link`, `demo`, entre otros) difiere del esquema sugerido en la guía. Debe conservarse y mapearse cuidadosamente si la siguiente fase lo requiere.
2. No se encuentran en `public/` los archivos que corresponden a las seis portadas declaradas en los datos.
3. `index.html` declara `lang="en"` y la interfaz está en español.
4. Los enlaces de LinkedIn y Twitter en el footer usan `href="#"`; no se deben sustituir por destinos inventados.
5. La rama de fase se creó según la guía. El repositorio ya tenía `GuiaProyecto/` sin seguimiento antes de la auditoría; esos archivos se conservaron.

## Diferencia interna de la guía

El checklist de `GuiaProyecto/01-auditoria-y-arquitectura.md` indica que los resultados del build y lint se registren en la sección 12, pero la sección 12 corresponde a la estrategia de portadas. Los resultados quedan consignados aquí para mantener la evidencia sin reinterpretar el contenido de esa sección.

## Pendiente de QA visual

- Revisar la nueva versión en un viewport móvil mediante una captura aportada por el usuario.
- Completar la observación visual y, si aplica, los hallazgos de accesibilidad/responsividad.
- El usuario autorizó preparar la galería el 2026-11-11; E1–E6 se documentan en `fases-1-a-6.md`.
