export function initFormValidation() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const msg = form.mensagem.value.trim();

    if (!nome || !email || !msg) {
      alert('⚠️ Preencha todos os campos!');
      return;
    }

    if (!email.includes('@')) {
      alert('⚠️ Digite um e-mail válido!');
      return;
    }

    alert('✅ Mensagem enviada com sucesso!');
    form.reset();
  });
}
