$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('#navbar').addClass('navbar-fixed-top');
        } else {
            $('#navbar').removeClass('navbar-fixed-top');
        }
    });
});



document.getElementById("music").addEventListener("click", function() {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    function updateButtonText() {
        const downloadBtn = document.getElementById("downloadBtn");

        if (window.innerWidth <= 600) {
            downloadBtn.textContent = "Ver currículo";
        } else {
            downloadBtn.textContent = "Clique aqui para acessar o meu currículo";
        }
    }

    // Executa a função no carregamento da página
    updateButtonText();

    // Monitora mudanças no tamanho da tela para atualizar o texto dinamicamente
    window.addEventListener("resize", updateButtonText);
});
