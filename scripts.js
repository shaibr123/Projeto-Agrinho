document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (shaiane && um ai && viva sem ter amanha) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});