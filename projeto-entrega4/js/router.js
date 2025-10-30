const routes = {
  '/': 'home',
  '/projetos': 'projetos',
  '/contato': 'contato'
};

export function navigate(path) {
  const sectionId = routes[path] || 'home';
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}
