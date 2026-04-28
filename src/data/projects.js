export const projects = [
  {
    id: 1,
    titulo: "Cálculo de N-males",
    descripcion: "Aplicación web de cálculo de números n-males desarrollada en Python para la monitoria de Sistemas Numéricos Universidad Pedagógica Nacional.",
    tecnologias: ["Python", "FastAPI", "React", "NumPy"],
    imagen: "/projects/nmal2.png",
    link: "https://github.com/RumiSoftware2/nmal_fraccion",
    demo: "https://nmal-fraccion.vercel.app/",
    status: "ready",
    categoria: "Matemáticas",
    features: [
      "Simulación paso a paso con KaTeX",
      "Frontend interactivo con React",
      "Backend con FastAPI",
      "Microservicio en Python"
    ]
  },
  {
    id: 2,
    titulo: "Chatbot IA Conversacional",
    descripcion: "Chatbot inteligente con procesamiento de lenguaje natural utilizando modelos de IA avanzados.",
    tecnologias: ["Node.js", "TensorFlow", "React", "Express"],
    imagen: "/projects/chatbot.png",
    link: "https://github.com/RumiSoftware2/chatbot-ia",
    demo: "https://chatbot-ia-demo.vercel.app/",
    status: "ready",
    categoria: "IA",
    features: [
      "Procesamiento NLP en tiempo real",
      "Interfaz conversacional intuitiva",
      "Historial de conversaciones",
      "Respuestas contextuales"
    ]
  },
  {
    id: 3,
    titulo: "Dashboard Analytics",
    descripcion: "Panel de control analítico para visualización de datos en tiempo real con múltiples gráficos interactivos.",
    tecnologias: ["React", "D3.js", "Node.js", "MongoDB"],
    imagen: "/projects/dashboard.png",
    link: "https://github.com/RumiSoftware2/analytics-dashboard",
    demo: "https://analytics-dashboard.vercel.app/",
    status: "ready",
    categoria: "Web",
    features: [
      "Gráficos interactivos en tiempo real",
      "Filtrado avanzado de datos",
      "Exportación de reportes",
      "Responsive design"
    ]
  },
  {
    id: 4,
    titulo: "API REST de Autenticación",
    descripcion: "Microservicio seguro de autenticación y autorización con JWT y OAuth2.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "JWT"],
    imagen: "/projects/api-auth.png",
    link: "https://github.com/RumiSoftware2/auth-api",
    demo: "https://auth-api-docs.vercel.app/",
    status: "ready",
    categoria: "Web",
    features: [
      "Autenticación JWT segura",
      "OAuth2 integration",
      "Rate limiting",
      "Documentación Swagger"
    ]
  },
  {
    id: 5,
    titulo: "Sistema de Recomendación ML",
    descripcion: "Motor de recomendación basado en aprendizaje automático para plataforma de contenidos.",
    tecnologias: ["Python", "Scikit-learn", "FastAPI", "TensorFlow"],
    imagen: "/projects/ml-recommendation.png",
    link: "https://github.com/RumiSoftware2/ml-recommendation",
    demo: "https://ml-recommendation.vercel.app/",
    status: "progress",
    categoria: "IA",
    features: [
      "Algoritmos colaborativos",
      "Personalización de contenido",
      "Análisis de patrones",
      "Optimización continua"
    ]
  },
  {
    id: 6,
    titulo: "Editor de Ecuaciones Matemáticas",
    descripcion: "Herramienta web para edición y renderizado de ecuaciones matemáticas complejas.",
    tecnologias: ["React", "KaTeX", "MathJax", "Webpack"],
    imagen: "/projects/math-editor.png",
    link: "https://github.com/RumiSoftware2/math-editor",
    demo: "https://math-editor.vercel.app/",
    status: "ready",
    categoria: "Matemáticas",
    features: [
      "Editor visual de ecuaciones",
      "Exportación a LaTeX",
      "Librería de símbolos matemáticos",
      "Historial de ediciones"
    ]
  }
];

export const categories = ["Todos", "Web", "IA", "Matemáticas"];
