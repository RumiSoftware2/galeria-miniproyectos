# 01 — Auditoría y Arquitectura del Portafolio React

> **Documento 1 de 3.** Referencia técnica principal. Se complementa con `02-plan-de-refactorizacion.md` (ruta de ejecución) y `03-skill-integracion-de-proyectos.md` (Skill operativa para agregar proyectos).

---

## 0. ⚠️ PROTOCOLO OBLIGATORIO: REVISAR EL CÓDIGO ANTES DE ACTUAR

Este documento fue redactado **sin acceso al código fuente** del portafolio. Por lo tanto:

1. **Todo lo descrito aquí como estado actual es una hipótesis hasta que el agente la verifique** contra el repositorio real.
2. **Ninguna acción del plan puede ejecutarse sin que el agente de programación haya inspeccionado antes el código.** La revisión no es opcional ni se puede omitir por "confianza" en este documento.
3. Si el código real contradice este documento, **prevalece el código**. El agente debe actualizar este archivo y registrar la discrepancia en la sección 14.
4. Está prohibido inventar nombres de archivos, componentes, rutas, tecnologías, enlaces, imágenes o datos de proyectos.

### 0.1 Leyenda de marcas

| Marca | Significado |
|---|---|
| **[EXISTENTE]** | Confirmado por el agente al leer el repositorio. Debe indicar ruta real. |
| **[VERIFICAR]** | Hipótesis no confirmada. El agente debe comprobarla antes de usarla. |
| **[PROPUESTO]** | Archivo, carpeta o estructura que no existe y se podría crear. |
| **[NO APLICA]** | Se verificó y no corresponde al proyecto real. |

### 0.2 Checklist de inspección previa (el agente lo completa antes de la Etapa 0 del plan)

Comandos de solo lectura permitidos (no alteran el proyecto):

```bash
git status && git log --oneline -n 15      # estado y último historial
cat package.json                           # dependencias y scripts
ls -la                                     # raíz del repositorio
find src -type f | sort                    # árbol de código (ajustar si no existe src/)
find public -type f | sort                 # recursos estáticos
wc -l $(find src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" -o -name "*.css") | sort -n | tail -20   # archivos más grandes
```

- [x] Leí `package.json` y registré tecnologías reales (sección 2).
- [x] Listé el árbol completo de `src/` y `public/` (sección 3).
- [x] Abrí el punto de entrada y el componente raíz.
- [x] Identifiqué la navegación: estado local de categoría y sidebar; no hay router.
- [x] Localicé los datos de proyectos y categorías en `src/data/projects.js`.
- [x] Identifiqué CSS plano con hojas globales y por componente.
- [x] Ejecuté build y lint; ver resultados en `docs/plan-refactorizacion/etapa-0.md`.
- [x] Revisé la captura de escritorio compartida el 2026-11-11. La comprobación móvil en navegador sigue pendiente porque se rechazó el permiso para la dirección local; se revisaron los breakpoints existentes por código.
- [x] Registré las discrepancias confirmadas en la sección 14.

> **Regla de oro:** sin checklist completo, el agente no modifica código, no instala dependencias y no crea archivos fuera de `docs/`.

---

## 1. Identificación del proyecto

| Campo | Valor |
|---|---|
| Nombre del proyecto | `proyectos-rumi` (`package.json`) |
| Propietario | Licenciado en Matemáticas (UPN), estudiante de Ingeniería de Sistemas (Areandina), formación SENA |
| Propósito | Portafolio profesional que presenta proyectos académicos, profesionales y personales |
| Repositorio / despliegue | `https://github.com/RumiSoftware2/galeria-miniproyectos.git` (remote `origin`); despliegue no identificado |
| Fecha de la auditoría | 2026-11-03 |
| Commit auditado | `c3e42852ba640a101d080832e3af1f1e024e1c05` |

---

## 2. Tecnologías detectadas

> Completar solo con lo que aparezca realmente en `package.json` y archivos de configuración. No agregar tecnologías por suposición.

| Aspecto | Valor real | Evidencia (archivo) |
|---|---|---|
| Biblioteca UI | React 19.2.5 | `package.json` |
| Lenguaje | JavaScript (JSX); no se encontró TypeScript | extensiones bajo `src/` |
| Bundler / framework | Vite 8.0.10 con plugin React 6.0.1 | `package.json`, `vite.config.js` |
| Enrutamiento | No hay librería de rutas; navegación por estado local | dependencias, `src/App.jsx` |
| Estilos | CSS plano global y por componente | `src/styles/globals.css`, CSS de componentes |
| Animación | Framer Motion 12.38.0 | `package.json` |
| Iconos | No se encontró librería de iconos | `package.json` |
| Librería de componentes | No se encontró | `package.json` |
| Scripts disponibles | `dev`, `build`, `lint`, `preview` | `package.json` |
| Linter / formateador | ESLint 10.2.1; no se encontró formateador configurado | `package.json`, `eslint.config.js` |
| Pruebas existentes | No se encontraron scripts ni dependencias de pruebas | `package.json` |

---

## 3. Estructura de directorios actual

Árbol real al 2026-11-11, luego de preparar la galería:

```text
src/App.css
src/App.jsx
src/hooks/useProjectCovers.js
src/main.jsx
src/assets/hero.png
src/assets/react.svg
src/assets/vite.svg
src/components/Gallery/Gallery.css
src/components/Gallery/Gallery.jsx
src/components/Hero/Hero.css
src/components/Hero/Hero.jsx
src/components/Navbar/Navbar.css
src/components/Navbar/Navbar.jsx
src/components/ProjectCard/ProjectCard.css
src/components/ProjectCard/ProjectCard.jsx
src/components/ThumbnailManager/ThumbnailManager.css
src/components/ThumbnailManager/ThumbnailManager.jsx
src/data/categories.js
src/data/projectCovers.js
src/data/projects.js
src/data/validateProjects.js
src/styles/globals.css
public/favicon.svg
public/icons.svg
public/logoproyectos.png
public/projects/.gitkeep
```

| Ruta real | Responsabilidad actual | ¿Mezcla responsabilidades? | Líneas |
|---|---|---|---|
| `src/main.jsx` | Punto de entrada React | No | 8 |
| `src/App.jsx`, `src/App.css` | Composición, conteos, filtro activo, portadas locales, pie de página | No; datos y estilos separados | Actualizado E1–E6 |
| `src/data/categories.js` | Cuatro categorías del portafolio | No | Nuevo en E2 |
| `src/data/projects.js` | Registro de proyectos confirmados y esquema de ficha | No | Actualizado en E1 |
| `src/data/projectCovers.js` | Lectura, guardado y borrado de archivos Blob mediante IndexedDB | No | Módulo de miniaturas |
| `src/hooks/useProjectCovers.js` | Hidrata, presenta y limpia URLs locales para las portadas | No | Módulo de miniaturas |
| `src/data/validateProjects.js` | Validación de ids, campos, categorías y URLs | No | Nuevo en E2 |
| `src/components/Navbar/*` | Menú lateral, conteos, filtro y panel móvil | No | Actualizado E5–E6 |
| `src/components/Hero/*` | Presentación y accesos rápidos por categoría | No | Actualizado E4–E6 |
| `src/components/Gallery/*` | Listado filtrado, estado vacío y gestor de miniaturas | No | Actualizado E3–E5 |
| `src/components/ProjectCard/*` | Portada, descripción y enlaces opcionales | No | Actualizado E3–E4 |
| `src/components/ThumbnailManager/*` | Búsqueda de proyectos, carga y descarga de miniaturas, exportación de configuración | No | Módulo de miniaturas |
| `src/styles/globals.css` | Tokens, tipografía, foco visible y reset | No | Actualizado en E6 |
| `src/assets/hero.png` | Imagen anterior del hero; se conserva pero no se usa | No | N/A |
| `src/assets/react.svg`, `src/assets/vite.svg` | Recursos del template | No | N/A |
| `public/favicon.svg`, `public/icons.svg`, `public/logoproyectos.png` | Recursos públicos existentes; el logo aparece pequeño en el encabezado de áreas | No | N/A |
| `public/projects/.gitkeep` | Mantiene la carpeta vacía para portadas que entregue el usuario | No | N/A |

---

## 4. Análisis de componentes

El agente evaluará cada componente con estos criterios y registrará solo hallazgos comprobados:

| Criterio | Pregunta de verificación |
|---|---|
| Tamaño | ¿Hay componentes con muchas líneas o con varias secciones de UI en un solo archivo? |
| Responsabilidad única | ¿Un componente mezcla datos, lógica y presentación? |
| Datos incrustados | ¿Los proyectos están escritos directamente en JSX o en estado local de un componente? |
| Duplicación | ¿Hay tarjetas/secciones casi idénticas copiadas por categoría? |
| Props y composición | ¿Los componentes reciben datos por props o los leen de forma fija? |
| Estado | ¿Cómo se maneja (useState, context, otro) y es proporcionado al problema? |
| Rendimiento | ¿Hay problemas **demostrables** (re-renders, imágenes pesadas)? No especular. |

**Tabla de hallazgos (completar):**

| ID | Archivo real | Hallazgo comprobado | Evidencia (líneas/fragmento) | Prioridad |
|---|---|---|---|---|
| H-001 | `src/data/categories.js` | En la línea base las categorías vivían junto a los proyectos; se centralizaron en E2. | `categories` ahora es su propio registro y alimenta menú, hero y conteos. | P2 · resuelto |
| H-002 | `src/data/projects.js` | Los seis objetos iniciales eran relleno según el usuario. Se retiraron y se agregaron los proyectos confirmados con el esquema separado. | La lista activa contiene 20 proyectos y `validateProjects()` verifica sus datos. | P2 · resuelto |
| H-003 | `public/projects/` | Los seis objetos iniciales apuntaban a imágenes que no existían. Los objetos de relleno se retiraron y se creó la carpeta para portadas futuras. | `public/projects/.gitkeep`; aún no hay portadas reales recibidas. | P1 · resuelto para datos activos |
| H-004 | `index.html` | El idioma del documento estaba en inglés. | Ahora se declara `lang="es"`. | P2 · resuelto |
| H-005 | `src/App.jsx` | El footer tenía enlaces placeholder `href="#"`. | Se retiraron los destinos no confirmados; se conserva el GitHub público del portafolio. | P2 · resuelto |

---

## 5. Análisis de páginas, layouts y rutas

- Vista única montada por `src/main.jsx`, que renderiza `App`; no se encontraron páginas ni enrutador.
- La navegación cambia la categoría mediante estado de `src/App.jsx`; no cambia la URL.
- Tabla de rutas reales:

| Ruta | Componente | Observaciones |
|---|---|---|
| `/` | `App` → `Hero`, `Gallery`, `Navbar` | Única ruta servida por Vite; sin router explícito. |

- Layout con Navbar y footer en `src/App.jsx`.
- No hay rutas de detalle de proyecto o categoría.

---

## 6. Análisis de estilos y diseño visual

Revisé la captura de escritorio compartida el 2026-11-11. El permiso para abrir la vista local en navegador fue denegado; la vista móvil queda sin revisión visual y sus breakpoints se revisaron por código:

- Paleta: variables CSS en `src/styles/globals.css`; fondo blanco/lavanda e índigo/violeta como acento.
- Tipografía: sistema, con escala adaptable mediante `clamp()`.
- Navegación lateral compacta en escritorio; en móvil abre como panel lateral con overlay.
- Tarjetas con relación 16:9, fallback visual, descripción y enlaces condicionales.
- Breakpoints en las hojas de Hero, Gallery y Navbar; no se pudo confirmar móvil visualmente.
- Accesibilidad: `lang="es"`, skip link, foco visible, controles del menú etiquetados y `alt` configurable o derivado.
- Framer Motion se limita a entradas y elevación suave; el menú lateral usa CSS.

> **Principio:** conservar la identidad visual actual. Solo se mejora lo que esté inconsistente o roto.

---

## 7. Análisis de datos

- Los datos viven en `src/data/projects.js`; actualmente el arreglo está vacío porque el usuario confirmó que las seis fichas previas eran relleno.
- Esquema listo para nuevas fichas: `id`, `title`, `category`, `description`, `url`; opciones `cover`, `coverAlt`, `repoUrl`.
- Las categorías se centralizan en `src/data/categories.js`: `upn`, `sena`, `personales` y `areandina`.
- Las portadas se guardan en `public/projects/` y usan `/projects/<id>.<ext>`; imagen ausente o rota muestra un placeholder.

---

## 8. Diagnóstico técnico

> Se completa **después** de la inspección. Cada fila debe citar archivo real. No incluir hallazgos no comprobados.

### 8.1 Resumen

| Aspecto | Resultado |
|---|---|
| Estado actual | Portafolio React/Vite de una vista, con cuatro categorías y galería lista para agregar fichas reales; no hay fichas publicadas todavía. |
| Fortalezas | Registro central de categorías, filtro compartido, estado vacío, tarjetas reutilizables y validación de datos. |
| Debilidades | Falta inspección visual móvil; aún no se recibieron enlaces, descripciones ni portadas reales. |
| Deuda técnica | Completar metadatos de proyectos a medida que el usuario los proporcione; comparar visual móvil en E7. |
| Riesgos | Datos incompletos fallan la validación; la revisión visual final debe cubrir móvil cuando se autorice acceso a la vista local o se comparta captura. |

### 8.2 Priorización de hallazgos

| Prioridad | Definición |
|---|---|
| **P0** | Problemas críticos (build roto, errores en producción, enlaces o rutas rotas) |
| **P1** | Mejoras importantes (datos incrustados, duplicación fuerte, accesibilidad básica) |
| **P2** | Mejoras necesarias para escalabilidad (capa de datos, categorías centralizadas, portadas) |
| **P3** | Mejoras opcionales (animaciones, búsqueda avanzada, pulido visual) |

| ID | Prioridad | Hallazgo | Archivo(s) real(es) | Etapa del plan que lo resuelve |
|---|---|---|---|---|
| H-003 | P1 | Las portadas de los proyectos de relleno no existían; sus fichas se retiraron y se preparó `public/projects/` | `src/data/projects.js`, `public/projects/` | E1, E3 · resuelto para los datos activos |
| H-001, H-002 | P2 | Categorías separadas y esquema simplificado para fichas reales | `src/data/categories.js`, `src/data/projects.js` | E1–E2 · resuelto |
| H-004, H-005 | P2 | Idioma corregido y enlaces placeholder retirados | `index.html`, `src/App.jsx` | E6 · resuelto |
| Visual | P2 | Escritorio revisado por captura; falta revisar móvil visualmente | Interfaz | E6–E7 |

---

## 9. Arquitectura implementada

### 9.1 Principios

1. Los proyectos se guardan separados de la presentación.
2. Las categorías se definen en un único registro.
3. Un único componente `ProjectCard` presenta todos los proyectos.
4. La navegación filtra en la misma página y no añade rutas innecesarias.
5. Se conserva React, Vite, CSS plano y Framer Motion; no se añadieron dependencias.

### 9.2 Flujo de datos

```mermaid
flowchart LR
    C[src/data/categories.js] --> N[Navbar]
    C --> H[Hero]
    P[src/data/projects.js] --> V[validateProjects]
    C --> V
    P --> A[App: conteo y filtro]
    A --> G[Gallery]
    G --> PC[ProjectCard]
    I[public/projects/{id}.{ext}] --> PC
```

### 9.3 Responsabilidades por módulo

| Módulo | Responsabilidad |
|---|---|
| `src/data/categories.js` | Definir cuatro categorías y sus nombres/descripciones |
| `src/data/projects.js` | Mantener la lista única de fichas confirmadas |
| `src/data/validateProjects.js` | Validar id, campos obligatorios, categoría y URLs HTTPS |
| `src/components/Navbar/` | Navegar por categorías, mostrar conteos y abrir el panel móvil |
| `src/components/Hero/` | Presentar el portafolio y ofrecer accesos a categorías |
| `src/components/Gallery/` | Mostrar proyectos filtrados o el estado vacío |
| `src/components/ProjectCard/` | Mostrar portada o fallback, descripción y enlaces opcionales |

---

## 10. Modelo de datos de proyectos

### 10.1 Campos

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `id` | string (slug único, kebab-case) | ✅ | Identificador y base del nombre de la portada |
| `title` | string | ✅ | Nombre visible |
| `category` | string (id de `categories.js`) | ✅ | Debe existir en el registro |
| `url` | string (URL) | ✅ | Enlace al proyecto |
| `description` | string | ✅ | **No inventar.** Se publica cuando el usuario la proporciona |
| `cover` | string | ⛔ opcional | Ruta `/projects/<id>.<ext>`; si falta, se muestra un placeholder |
| `coverAlt` | string | ⛔ opcional | Texto alternativo; por defecto se deriva del título |
| `repoUrl` | string | ⛔ opcional | Repositorio |

> Si el proyecto actual ya usa otros nombres de campos, **conservar los existentes** y mapear; no renombrar sin justificación (**[VERIFICAR]**).

### 10.2 Ejemplo ilustrativo (estructura, **no datos reales**)

```js
// Ejemplo de FORMA. No agregar al repositorio; los datos reales los aporta el usuario.
{
  id: "nombre-del-proyecto",
  title: "Nombre del proyecto",
  category: "sena",
  url: "https://ejemplo.com",
}
```

---

## 11. Registro de categorías

Registro centralizado en `data/categories.js`. Las cuatro categorías del contexto del proyecto:

| `id` | Nombre | Contenido |
|---|---|---|
| `upn` | Universidad Pedagógica Nacional · Docencia | Docencia y formación |
| `sena` | Emprendimientos SENA | Emprendimientos y proyectos formativos |
| `personales` | Proyectos personales | Proyectos e iniciativas personales |
| `areandina` | Areandina · Ingeniería de Sistemas | Ingeniería de Sistemas |

Reglas:

- Agregar una categoría = agregar **un objeto** en `categories.js`, sin tocar componentes.
- Cada proyecto pertenece a una categoría registrada.
- `validateProjects()` comprueba que `project.category` exista en el registro.

---

## 12. Estrategia de portadas implementada

| Aspecto | Propuesta |
|---|---|
| Ubicación publicada | `public/projects/` |
| Nombre de archivo | `<id>.<ext>` (kebab-case, minúsculas, sin tildes ni espacios) |
| Formato | WebP preferido; JPG/PNG aceptables |
| Proporción | 16:9 (ej. 1280×720) o la ya usada por las tarjetas actuales |
| Peso objetivo | Idealmente < 200 KB por imagen |
| Imagen faltante | El componente de tarjeta muestra un *placeholder* neutro; nunca se genera una imagen |
| Resolución | URL pública `/projects/<id>.<ext>` en Vite |
| Accesibilidad | `alt` derivado del título; permite `coverAlt` |
| Carga | `loading="lazy"` y dimensiones explícitas para evitar saltos de diseño |

El componente `ThumbnailManager` también permite cargar una miniatura desde la interfaz y guardarla en IndexedDB del navegador actual. La vista previa se aplica enseguida a la tarjeta. Incluye descarga individual de cada archivo y exportación de `projects.js` con las rutas preparadas para el despliegue.

Las miniaturas de IndexedDB son locales a ese navegador y **no** se publican automáticamente ni se comparten con otros visitantes. Para hacerlas públicas hay que descargar las imágenes, copiarlas a `public/projects/`, integrar la configuración exportada y desplegar de nuevo. El agente no genera ni modifica las imágenes cargadas.

---

## 13. Navegación implementada

| Elemento | Decisión inicial | Condición |
|---|---|---|
| Página principal con galería por categoría | Implementada | Hero y galería en la ruta `/` |
| Filtros por categoría | Implementados | Menú lateral, accesos del hero y conteos |
| Búsqueda | No implementada | El volumen aún no la justifica |
| Página individual por proyecto | **No** por defecto | Los proyectos enlazan a una URL externa; evitar páginas innecesarias |
| Modal de detalles | Opcional (P3) | Solo si hay información adicional que mostrar |
| Rutas | Mantener `/` | No se introdujo router |

---

## 14. Registro de discrepancias (se completa durante la ejecución)

| Fecha | Lo que decía este documento | Lo que se encontró en el código | Decisión |
|---|---|---|---|
| 2026-11-03 | Categorías centralizadas y cuatro categorías sugeridas; el esquema usa `name`, `category`, `url` | El código actual exporta `categories` de `src/data/projects.js` con `Todos`, `Web`, `IA`, `Matemáticas`; seis proyectos usan `id` numérico y campos en español, `link` y `demo`. | Prevalece el código. En etapas posteriores conservar campos y datos existentes; definir migración solo tras documentar mapeo y alcance. |
| 2026-11-03 | Portadas se ubican en `src/assets/covers/` o `public/covers/` según verificación; ejemplos propuestos | Las referencias actuales apuntan a `/projects/*.png`, pero `public/projects/` no existe en el árbol revisado. | No mover ni generar imágenes. Confirmar los recursos requeridos con el usuario antes de resolver las portadas. |
| 2026-11-03 | Se propone navegar por categorías; rutas deben verificarse | No hay router; estado local filtra categorías y no altera la URL. | Conservar la navegación existente; no introducir rutas sin necesidad. |
| 2026-11-03 | La guía exige revisión visual de escritorio y móvil | El acceso de control a Chrome fue rechazado por la revisión automática. | Pendiente; no marcar E0 completa hasta obtener inspección visual. |
| 2026-11-11 | La guía sugería proyectos con el esquema hipotético y categorías ejemplo | El usuario confirmó que los seis proyectos existentes eran datos de relleno y definió UPN/docencia, SENA/emprendimientos, personales y Areandina/ingeniería. | Se retiraron los objetos de relleno, se registraron las cuatro categorías y se incorporaron 20 proyectos confirmados desde el Word y los repositorios públicos indicados. |
| 2026-11-11 | E3 describía únicamente portadas estáticas dentro de `public/projects/` | El usuario pidió cargar miniaturas mediante un módulo de la interfaz. No hay backend ni servicio de archivos. | Se creó `ThumbnailManager` con almacenamiento local en IndexedDB, vista previa en tarjetas y exportación de archivos/configuración. Para publicar las portadas hay que agregarlas al repositorio y desplegar. |
| 2026-11-11 | E0 requería capturas de escritorio y móvil | El usuario compartió captura de escritorio. El permiso a `http://127.0.0.1:5173/` fue denegado en el gate de origen, y no se obtuvo captura móvil. | Se usó la captura entregada y revisión estática de breakpoints. La comparación visual móvil queda pendiente para E7; no se vuelve a solicitar el mismo acceso vía navegador. |

---

## 15. Elementos existentes que deben conservarse

Evaluado tras la inspección de código; falta la comparación visual:

- [x] Identidad visual (CSS global y estilos de tarjetas existentes)
- [x] Navegación actual por categoría y sidebar
- [x] Contenido de 20 proyectos y sus enlaces
- [x] Tecnologías y estructura actual
- [ ] Inspección visual escritorio/móvil y preferencias adicionales del usuario

## 16. Decisiones arquitectónicas

| # | Decisión | Justificación | Estado |
|---|---|---|---|
| D1 | Capa de datos separada (`src/data/`) | Evita datos en JSX y permite agregar proyectos sin tocar UI | Implementado |
| D2 | Categorías centralizadas | Agregar categorías sin editar componentes | Implementado en `src/data/categories.js` |
| D3 | Una única `ProjectCard` | Elimina duplicación entre categorías | Implementado |
| D4 | Sin página por proyecto | Los proyectos son enlaces externos | Implementado |
| D5 | Sin nuevas dependencias salvo justificación | Mantener el proyecto simple | Implementado |
| D6 | Gestor local de miniaturas con IndexedDB y exportación para despliegue estático | Permite previsualizar y conservar cargas sin backend; requiere copiar/exportar archivos al repo para hacerlas públicas | Implementado en `ThumbnailManager` y `useProjectCovers` |
| D6 | Confirmar cada decisión contra el código real | El documento se escribió sin acceso al repositorio | **Obligatorio** |
