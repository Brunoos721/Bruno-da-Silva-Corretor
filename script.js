// ==========================
// ANIMAÇÃO HERO FADE + SLIDE
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(40px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1.2s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 400);

});


// ==========================
// REVEAL SUAVE AO SCROLL
// ==========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".credibilidade-box, .imovel-card, .sobre-content, .cta-final")
.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});


// ==========================
// EFEITO PARALLAX SUAVE HERO
// ==========================

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
});


// ==========================
// NAVBAR TRANSPARÊNCIA DINÂMICA
// ==========================

window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "rgba(14,14,17,0.85)";
    } else {
        header.style.background = "rgba(14,14,17,0.6)";
    }
});
