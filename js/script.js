script js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Validação básica
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Todos os campos são obrigatórios.';
        formMessage.className = 'error';
        formMessage.classList.remove('hidden');
    } else if (!validateEmail(email)) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.className = 'error';
        formMessage.classList.remove('hidden');
    } else {
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        formMessage.className = 'success';
        formMessage.classList.remove('hidden');
        // Aqui você pode adicionar código para enviar os dados para um servidor, se necessário
        document.getElementById('contactForm').reset(); // Limpa o formulário
    }
});

// Função de validação de e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}