//Link ativo menu 
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });

    // Manter o link ativo ao recarregar a página
    const currentFileName = location.pathname.split('/').pop(); // Obter apenas o nome do arquivo atual
    console.log("Current file name:", currentFileName); // Mensagem de console para verificar o nome do arquivo atual
    navLinks.forEach(link => {
        const linkFileName = link.getAttribute('href').split('/').pop(); // Obter apenas o nome do arquivo do link
        console.log("Link file name:", linkFileName); // Mensagem de console para verificar o nome do arquivo do link
        if (linkFileName === currentFileName) {
            link.classList.add('active');
        }
    });
}); 