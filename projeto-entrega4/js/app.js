import { navigate } from './router.js';
// se tiver formValidation, mantém a importação abaixo
// import { initFormValidation } from './formValidation.js';

window.navigate = navigate; // deixa a função disponível no HTML

document.addEventListener('DOMContentLoaded', () => {
  navigate('/'); // mostra a página inicial ao carregar
  // initFormValidation(); // se existir
});
