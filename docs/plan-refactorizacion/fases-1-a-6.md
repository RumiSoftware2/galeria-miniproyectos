# Preparación de la galería — etapas 1 a 6

Fecha de implementación: 2026-11-11  
Rama: `refactor/etapa-1`  
Commit base: `c3e42852ba640a101d080832e3af1f1e024e1c05`

## Decisión de contenido

El usuario confirmó que los seis proyectos iniciales eran datos de relleno. Se retiraron de la lista activa; no se inventaron proyectos ni portadas. La galería queda vacía hasta que el usuario entregue los datos reales.

## Etapas preparadas

| Etapa | Resultado |
|---|---|
| E1 · Datos | `src/data/projects.js` es la lista única de fichas; esquema mínimo con id, título, categoría, descripción y enlace. Repositorio y portada opcionales. |
| E2 · Categorías | `src/data/categories.js` registra UPN/docencia, emprendimientos SENA, proyectos personales y Areandina/Ingeniería. Los ids son `upn`, `sena`, `personales`, `areandina`. |
| E3 · Portadas | Convención `/projects/<id>.<ext>` en `public/projects/`; fallback visual si falta o falla una imagen, `alt` derivado/configurable y carga diferida. |
| E4 · Componentes | Una tarjeta reutilizable con portada, categoría, descripción, enlace de proyecto y enlace opcional al repositorio. |
| E5 · Navegación | Menú con cuatro filtros, opción Todos, conteos, accesos desde el hero, estado vacío y panel móvil. |
| E6 · Diseño | Se conservó la identidad lila/índigo; se compactó el menú, se ajustaron jerarquías y estilos responsivos, foco visible y lenguaje del documento. Por solicitud del usuario, `public/logoproyectos.png` se integró como imagen de marca en el hero, sobre el resumen de categorías. |

## Cómo agregar cada proyecto

1. Guarda la imagen que entregue el usuario en `public/projects/` como `<id>.webp`, `.jpg` o `.png`.
2. Agrega un objeto en el arreglo de `src/data/projects.js` con los datos confirmados.
3. Usa `category` con uno de los cuatro ids registrados.
4. Incluye la descripción y la URL HTTPS del sitio. Agrega `repoUrl` solo si el usuario envía el repositorio.

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
