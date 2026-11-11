# Portafolio Rumi Software

Galería frontend de proyectos organizada en cuatro áreas: UPN y docencia, emprendimientos SENA, proyectos personales y Areandina / Ingeniería de Sistemas.

## Agregar un proyecto

1. Guarda la imagen de portada en `public/projects/` con el mismo nombre del `id`, por ejemplo `nombre-del-proyecto.webp`. Se aceptan WebP, JPG y PNG.
2. Agrega un objeto a `src/data/projects.js` con los datos confirmados del proyecto.
3. Usa exactamente uno de estos ids de categoría: `upn`, `sena`, `personales` o `areandina`.
4. La portada y el enlace al repositorio son opcionales. Sin portada se muestra una portada neutral; sin repositorio solo se muestra el enlace al proyecto.

Campos requeridos: `id` (slug único en kebab-case), `title`, `category`, `description` y `url` (URL HTTPS del sitio). Campos opcionales: `cover`, `coverAlt` y `repoUrl`.

El id de la categoría debe existir en `src/data/categories.js`. Al iniciar la aplicación, los datos se validan y los errores indican qué objeto corregir. No agregues descripciones, tecnologías, fechas, imágenes ni enlaces que el usuario no haya proporcionado.

## Subir miniaturas

En la galería, abre **Gestionar miniaturas**, busca el proyecto y selecciona una imagen JPG, PNG o WebP de hasta 8 MB. La tarjeta se actualiza inmediatamente y la miniatura queda guardada en IndexedDB de ese navegador.

Esa carga local no se publica automáticamente ni la verán otros visitantes. Para publicar las portadas, descarga cada imagen desde el gestor y también **Descargar configuración con portadas**. Copia las imágenes a `public/projects/` y usa el archivo generado para actualizar `src/data/projects.js`; después haz commit y despliega en Vercel.

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npm run build
```
