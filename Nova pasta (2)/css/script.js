// Inicializa o EmailJS com o seu User ID
(function () {
    emailjs.init("BHxrbPqMqDB6VhyXY"); // Substitua pelo seu User ID do EmailJS
})();

// Adiciona um listener para o evento de submit do formulário
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário

    // Envia o formulário usando o EmailJS
    emailjs.sendForm('service_mjj544c', 'template_1niy25p', this)
        .then(function () {
            alert('Email enviado com sucesso!'); // Exibe uma mensagem de sucesso
        }, function (error) {
            alert('Erro ao enviar o email: ' + JSON.stringify(error)); // Exibe uma mensagem de erro
        });
});