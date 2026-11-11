/**
 * Para agregar una tarjeta, añade un objeto con este formato al arreglo.
 * Guarda antes la miniatura en public/projects/<id>.<ext> y usa esa ruta en cover.
 * El diseño, la tarjeta y su acomodo responsive se generan automáticamente.
 *
 * {
 *   "id": "mi-proyecto",
 *   "title": "Nombre del proyecto",
 *   "category": "upn",
 *   "description": "Descripción breve del proyecto.",
 *   "url": "https://sitio-del-proyecto.example",
 *   "cover": "/projects/mi-proyecto.webp",
 *   "coverAlt": "Vista de la página del proyecto",
 *   "repoUrl": "https://github.com/usuario/repositorio"
 * }
 *
 * Categorías permitidas: upn, sena, personales y areandina. repoUrl es opcional.
 */
export const projects = [
  {
    "id": "laboratorio-ecuaciones-diferenciales",
    "title": "Laboratorio de ecuaciones diferenciales",
    "category": "upn",
    "description": "Aplicativo web en JavaScript nativo para simular el flujo de agua en un tanque con un flujo de entrada y dos orificios de salida.",
    "url": "https://tanqueagua-dx.netlify.app/",
    "cover": "/projects/laboratorio-ecuaciones-diferenciales.png",
    "coverAlt": "Miniatura de Laboratorio de ecuaciones diferenciales"
  },
  {
    "id": "criptografia-division-polinomios",
    "title": "Criptografía y división de polinomios",
    "category": "upn",
    "description": "Aplicativo web en JavaScript nativo para cifrar y descifrar frases mediante división de polinomios y comprobación del resultado.",
    "url": "https://practicasipn.netlify.app/"
  },
  {
    "id": "salto-lab",
    "title": "Salto Lab",
    "category": "upn",
    "description": "Aplicativo web para grabar o cargar un video y medir y explicar un salto vertical.",
    "url": "https://deportesaltos.netlify.app/"
  },
  {
    "id": "portafolio-profesional",
    "title": "Portafolio profesional",
    "category": "upn",
    "description": "Aplicativo web desarrollado con React y Tailwind CSS para presentar habilidades en un portafolio interactivo de diseño moderno.",
    "url": "https://portafoliosmendo.netlify.app/"
  },
  {
    "id": "hoja-de-vida-digital",
    "title": "Repositorio hoja de vida",
    "category": "upn",
    "description": "Aplicativo web desarrollado con React y CSS que permite acceder rápidamente a una hoja de vida digital mediante un código QR en formato físico, junto con el portafolio y material digital.",
    "url": "https://sebascv.netlify.app/"
  },
  {
    "id": "clase-funcion-lineal",
    "title": "Clase: función lineal",
    "category": "upn",
    "description": "Recurso web en JavaScript nativo, con formato de juego por diapositivas, para responder preguntas y construir paso a paso el concepto de función lineal.",
    "url": "https://funcionlineal12.netlify.app/"
  },
  {
    "id": "clase-concepto-funcion",
    "title": "Clase: concepto de función",
    "category": "upn",
    "description": "Recurso web en JavaScript nativo, con formato de juego por diapositivas, para responder preguntas y construir paso a paso el concepto de función.",
    "url": "https://conceptofuncion.netlify.app/"
  },
  {
    "id": "clase-ecuaciones-algebraicas",
    "title": "Clase: ecuaciones algebraicas",
    "category": "upn",
    "description": "Recurso web en JavaScript nativo, con formato de juego por diapositivas, para responder preguntas y construir paso a paso el concepto de ecuaciones de primer grado.",
    "url": "https://ecuacionesdeprimergrado1.netlify.app/"
  },
  {
    "id": "gaceta-numerica",
    "title": "Gaceta Numérica",
    "category": "upn",
    "description": "Aplicativo web en JavaScript nativo para compartir semanalmente un código en la monitoría de sistemas numéricos. Los estudiantes de la Licenciatura en Matemáticas podían ingresarlo para descubrir una noticia o un evento importante para las matemáticas.",
    "url": "https://gacetanumerica.netlify.app/"
  },
  {
    "id": "refuerzo-potenciacion",
    "title": "Refuerzo de potenciación",
    "category": "upn",
    "description": "Aplicativo web en JavaScript nativo con un taller que culmina al encontrar un código secreto de cuatro o cinco números. Al ingresarlo, se despliega una figura geométrica con una reseña histórica.",
    "url": "https://refuerzopotenciacion.netlify.app/"
  },
  {
    "id": "clase-notacion-cientifica",
    "title": "Clase: notación científica",
    "category": "upn",
    "description": "Recurso web en JavaScript nativo, con formato de juego por diapositivas, para responder preguntas y construir paso a paso el concepto de notación científica.",
    "url": "https://notacioncientifica.netlify.app/"
  },
  {
    "id": "rumi-plataforma-educativa",
    "title": "RUMI · Plataforma educativa",
    "category": "sena",
    "description": "Plataforma educativa para crear cursos estructurados con videos de YouTube, evaluaciones interactivas y juegos educativos, y para que los estudiantes sigan su progreso de aprendizaje.",
    "url": "https://rumieducation.vercel.app//",
    "repoUrl": "https://github.com/RumiSoftware2/RUMI-educational-platform"
  },
  {
    "id": "miniaventuras-pom-eje3",
    "title": "Miniaventuras · POM Eje 3",
    "category": "areandina",
    "description": "Aplicación infantil para moverse, descubrir y aprender en familia, desarrollada en el marco de la Fundación Universitaria del Área Andina y la Cátedra Pablo Oliveros Marmolejo.",
    "url": "https://pom-eje3.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/pomEje3"
  },
  {
    "id": "math-tutor-nmal-fraccion",
    "title": "Math Tutor · Conversor N-mal y fracciones",
    "category": "upn",
    "description": "Aplicación web para convertir números n-mal entre bases numéricas, expresar números periódicos como fracciones y realizar operaciones aritméticas con fracciones en distintas bases, mostrando los pasos del proceso.",
    "url": "https://nmal-fraccion.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/nmal_fraccion"
  },
  {
    "id": "consulta-votos-horarios",
    "title": "Consulta de votos de horarios",
    "category": "upn",
    "description": "Aplicación web que consulta una base de datos MongoDB y muestra los dos horarios más votados por los estudiantes.",
    "url": "https://resultados-horario.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/resultados-horario"
  },
  {
    "id": "registro-horario-monitoria",
    "title": "Registro de horario de monitoría",
    "category": "upn",
    "description": "Aplicación web para recopilar la información de los participantes y sus horarios de monitoría mediante un formulario guiado.",
    "url": "https://horario-monitoria.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/horario-monitoria"
  },
  {
    "id": "liga-del-algebra",
    "title": "Liga del Álgebra",
    "category": "upn",
    "description": "Bingo educativo para practicar factorización de polinomios en grado octavo. Proyecta polinomios sin repetir, permite marcarlos en cartones impresos e identifica a los ganadores.",
    "url": "https://bingo-algebraico.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/bingoAlgebraico"
  },
  {
    "id": "qr-inversores",
    "title": "QR Inversores",
    "category": "upn",
    "description": "Experiencia educativa con dinero ficticio para explorar y construir las reglas del interés simple y compuesto.",
    "url": "https://math-realistic.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/mathRealistic"
  },
  {
    "id": "pay-services-aiven-eje3",
    "title": "Pay Services · Eje 3",
    "category": "areandina",
    "description": "Aplicación académica para registrar pagos simulados de servicios. Incluye una interfaz web y una API con Express, y almacena los registros en MySQL alojado en Aiven.",
    "url": "https://aiveneje3.onrender.com/",
    "repoUrl": "https://github.com/RumiSoftware2/AivenEje3"
  },
  {
    "id": "karra-ecommerce",
    "title": "KARRA · Ecommerce de productos digitales",
    "category": "personales",
    "description": "Frontend para una tienda de muestras vocales, presets y otros productos digitales, con catálogo, búsqueda y filtros, carrito de compras y flujo de pago.",
    "url": "https://wizard-frontend-ten.vercel.app/",
    "repoUrl": "https://github.com/RumiSoftware2/wizard-frontend"
  }
];
