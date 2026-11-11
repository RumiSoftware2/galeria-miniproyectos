# Portafolio Rumi Software

Galería frontend de proyectos organizada en cuatro áreas: UPN y docencia, emprendimientos SENA, proyectos personales y Areandina / Ingeniería de Sistemas.

## Agregar una tarjeta

Para cada proyecto nuevo, copia la imagen a `public/projects/` y agrega **un solo objeto** al arreglo `projects` de `src/data/projects.js`. No es necesario cambiar componentes ni estilos: el grid acomoda las tarjetas automáticamente en escritorio, tablet y móvil.

```js
{
  "id": "mi-proyecto",
  "title": "Nombre del proyecto",
  "category": "upn",
  "description": "Descripción breve confirmada del proyecto.",
  "url": "https://sitio-del-proyecto.example",
  "cover": "/projects/mi-proyecto.webp",
  "coverAlt": "Vista de la página del proyecto",
  "repoUrl": "https://github.com/usuario/repositorio"
}
```

La miniatura debe llamarse igual que el `id`, por ejemplo `public/projects/mi-proyecto.webp`. Se aceptan WebP, JPG y PNG. `repoUrl` es opcional; los demás campos del ejemplo completan la tarjeta. Usa exactamente una categoría registrada: `upn`, `sena`, `personales` o `areandina`.

Si aún no se ha copiado la imagen, puedes dejar `cover` fuera temporalmente: la tarjeta muestra un marcador y el gestor permite previsualizar una miniatura en tu navegador. Para publicar esa imagen a todos, el archivo debe quedar en `public/projects/` y su `cover` en `projects.js`.

El id de la categoría debe existir en `src/data/categories.js`. Al iniciar la aplicación, los datos se validan y los errores indican qué objeto corregir. No agregues descripciones, tecnologías, fechas, imágenes ni enlaces que el usuario no haya proporcionado.

## Subir miniaturas

En la galería, abre **Gestionar miniaturas**, busca el proyecto y selecciona una imagen JPG, PNG o WebP de hasta 8 MB. La tarjeta se actualiza inmediatamente y la miniatura queda guardada en IndexedDB de ese navegador.

Esa carga local no se publica automáticamente ni la verán otros visitantes. Para publicar las portadas, descarga cada imagen desde el gestor y también **Descargar configuración con portadas**. Copia las imágenes a `public/projects/` y usa el archivo generado para actualizar `src/data/projects.js`; después haz commit y despliega en Vercel.

Cuando un proyecto ya tenga `cover` registrada en `src/data/projects.js`, su miniatura queda marcada como publicada y el gestor oculta los controles para cambiarla o quitarla. Para modificar una portada pública se debe actualizar el archivo en el código y volver a desplegar.

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npm run build
```
