# Preparación de la galería — etapas 1 a 6

Fecha de implementación: 2026-11-11  
Rama: `refactor/etapa-1`  
Commit base: `c3e42852ba640a101d080832e3af1f1e024e1c05`

## Decisión de contenido

El usuario confirmó que los seis proyectos iniciales eran datos de relleno y se retiraron. La galería contiene ahora 20 proyectos confirmados entre el documento Word y los repositorios públicos de GitHub: 16 UPN, 1 SENA, 1 personal y 2 Areandina. Los proyectos sin demo publicada quedaron fuera por indicación del usuario. La miniatura de Laboratorio de ecuaciones diferenciales ya está en `public/projects/`; los otros proyectos conservan el marcador hasta recibir sus imágenes.

## Etapas preparadas

| Etapa | Resultado |
|---|---|
| E1 · Datos | `src/data/projects.js` es la lista única de fichas. Para cada tarjeta nueva se agrega un objeto con id, título, categoría, descripción, enlace y ruta de miniatura; el repositorio es opcional. |
| E2 · Categorías | `src/data/categories.js` registra UPN/docencia, emprendimientos SENA, proyectos personales y Areandina/Ingeniería. Los ids son `upn`, `sena`, `personales`, `areandina`. |
| E3 · Portadas | Convención `/projects/<id>.<ext>` en `public/projects/`; fallback visual si falta o falla una imagen, `alt` derivado/configurable y carga diferida. El módulo permite previsualizar portadas locales en IndexedDB y bloquea los controles cuando `cover` ya está publicada desde el código. |
| E4 · Componentes | Tarjeta reutilizable con portada, categoría, descripción y enlaces; `ThumbnailManager` centraliza las cargas y permite exportar las imágenes y la configuración para publicarlas después. |
| E5 · Navegación | Menú con cuatro filtros, opción Todos, conteos, accesos desde el hero, estado vacío y panel móvil. |
| E6 · Diseño | Se conservó la identidad lila/índigo; se compactó el menú, se ajustaron jerarquías y estilos responsivos, foco visible y lenguaje del documento. El logo `public/logoproyectos.png` se presenta pequeño en el encabezado del panel de áreas para conservar la marca sin ocupar el espacio principal del hero ni estorbar los controles. |

## Cómo agregar cada proyecto

1. Crea un `id` único en kebab-case.
2. Copia la miniatura final a `public/projects/<id>.<ext>`.
3. Añade un objeto a `src/data/projects.js` con los campos del ejemplo del README e incluye `cover: '/projects/<id>.<ext>'`.
4. La tarjeta se crea y se acomoda automáticamente en el grid responsivo; no se modifican componentes ni estilos.

Las cargas locales no se sincronizan con Vercel ni con otros visitantes. La configuración exportada asigna a cada imagen una ruta `/projects/<id>.<ext>`.

El gestor local sigue disponible para previsualizar imágenes. Cuando un proyecto ya tiene una portada configurada en el código, se marca como **publicada** y no ofrece cambiarla ni quitarla. Solo un cambio en el código seguido de un nuevo despliegue puede actualizar esa portada pública.

La aplicación valida en ejecución el formato del id, los campos requeridos, la categoría y las URLs. Para el detalle operativo, ver `README.md` y `GuiaProyecto/03-skill-integracion-de-proyectos.md`.

## Verificación disponible

- Build: correcto; 427 módulos transformados.
- ESLint: correcto, sin hallazgos.
- No se añadieron pruebas automatizadas.
- La captura de escritorio proporcionada por el usuario sirvió para evaluar la versión anterior. La nueva vista no se pudo revisar en navegador porque el permiso de origen local fue denegado; por esa misma razón no se obtuvo captura móvil. Los breakpoints se inspeccionaron en CSS. E7 debe registrar esta limitación hasta contar con una captura móvil de la nueva versión.

## Pendiente de E7

- Revisión visual de la nueva versión en escritorio y móvil.
- Navegación manual por las cuatro categorías y verificación de enlaces e imágenes cuando el usuario entregue proyectos reales.
- Comparación de responsive y accesibilidad con capturas.
