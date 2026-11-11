# Preparación de la galería — etapas 1 a 6

Fecha de implementación: 2026-11-11  
Rama: `refactor/etapa-1`  
Commit base: `c3e42852ba640a101d080832e3af1f1e024e1c05`

## Decisión de contenido

El usuario confirmó que los seis proyectos iniciales eran datos de relleno y se retiraron. La galería contiene ahora 20 proyectos confirmados entre el documento Word y los repositorios públicos de GitHub: 16 UPN, 1 SENA, 1 personal y 2 Areandina. Los proyectos sin demo publicada quedaron fuera por indicación del usuario. Las portadas siguen pendientes; hasta recibirlas se muestra el marcador visual.

## Etapas preparadas

| Etapa | Resultado |
|---|---|
| E1 · Datos | `src/data/projects.js` es la lista única de fichas; esquema mínimo con id, título, categoría, descripción y enlace. Repositorio y portada opcionales. |
| E2 · Categorías | `src/data/categories.js` registra UPN/docencia, emprendimientos SENA, proyectos personales y Areandina/Ingeniería. Los ids son `upn`, `sena`, `personales`, `areandina`. |
| E3 · Portadas | Convención `/projects/<id>.<ext>` en `public/projects/`; fallback visual si falta o falla una imagen, `alt` derivado/configurable y carga diferida. El módulo nuevo permite seleccionar una miniatura por proyecto, previsualizarla y guardarla localmente en IndexedDB. |
| E4 · Componentes | Tarjeta reutilizable con portada, categoría, descripción y enlaces; `ThumbnailManager` centraliza las cargas y permite exportar las imágenes y la configuración para publicarlas después. |
| E5 · Navegación | Menú con cuatro filtros, opción Todos, conteos, accesos desde el hero, estado vacío y panel móvil. |
| E6 · Diseño | Se conservó la identidad lila/índigo; se compactó el menú, se ajustaron jerarquías y estilos responsivos, foco visible y lenguaje del documento. El logo `public/logoproyectos.png` se presenta pequeño en el encabezado del panel de áreas para conservar la marca sin ocupar el espacio principal del hero ni estorbar los controles. |

## Cómo agregar cada proyecto

1. En la galería, abre **Gestionar miniaturas** y busca el proyecto.
2. Sube una imagen JPG, PNG o WebP de hasta 8 MB. La tarjeta la muestra de inmediato y queda guardada en el navegador actual.
3. Descarga desde el gestor cada miniatura y el archivo **Descargar configuración con portadas**.
4. Copia las imágenes a `public/projects/`, usa la configuración generada para actualizar `src/data/projects.js`, y luego haz commit y despliega.

Las cargas locales no se sincronizan con Vercel ni con otros visitantes. La configuración exportada asigna a cada imagen una ruta `/projects/<id>.<ext>`.

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
