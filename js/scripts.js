document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique para os links de navegação
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.secao').offsetHeight,
                behavior: 'smooth'
            });
            
        });
    });
    
    // Adiciona animação de fade-in ao rolar a página
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.content, .stack, .agencia, .projetos, .contato').forEach(section => {
            const position = section.getBoundingClientRect().top;

            if (position < window.innerHeight * 0.75) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });
    const footer = document.querySelector('.contato');
    const footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition < window.innerHeight * 0.75) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
    document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('header');
        const main = document.querySelector('main');

        function adjustMainMargin() {
            const headerHeight = header.offsetHeight;
            main.style.marginTop = headerHeight + 'px';
        }

        // Chamamos a função quando a página é carregada e sempre que a janela é redimensionada
        window.addEventListener('load', adjustMainMargin);
        window.addEventListener('resize', adjustMainMargin);
    });
})