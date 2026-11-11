const isHttpsUrl = (value) => {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};

export function validateProjects(projects, categories) {
  const categoryIds = new Set(categories.map(({ id }) => id));
  const projectIds = new Set();

  for (const project of projects) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id)) {
      throw new Error(`El id "${project.id}" debe usar kebab-case.`);
    }

    if (projectIds.has(project.id)) {
      throw new Error(`El id "${project.id}" está repetido en projects.js.`);
    }
    projectIds.add(project.id);

    if (typeof project.title !== 'string' || !project.title.trim()
      || typeof project.description !== 'string' || !project.description.trim()) {
      throw new Error(`El proyecto "${project.id}" requiere título y descripción.`);
    }

    if (!categoryIds.has(project.category)) {
      throw new Error(`La categoría "${project.category}" del proyecto "${project.id}" no existe.`);
    }

    if (!isHttpsUrl(project.url)) {
      throw new Error(`El proyecto "${project.id}" requiere una URL https válida.`);
    }

    if (project.repoUrl && !isHttpsUrl(project.repoUrl)) {
      throw new Error(`El repositorio de "${project.id}" debe ser una URL https válida.`);
    }
  }
}
