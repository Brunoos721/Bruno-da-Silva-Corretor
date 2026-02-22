// ===============================
// LOADER INICIAL
// ===============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if(loader){
        loader.classList.add("loader-hide");
    }
});

// ===============================
// HEADER DINÂMICO
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 80){
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// ===============================
// SCROLL REVEAL SUAVE
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// ===============================
// MENU ATIVO AUTOMÁTICO
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if(link.getAttribute("href").includes(current)){
            link.classList.add("active-link");
        }
    });
});

// ===============================
// BOTÃO WHATSAPP INTELIGENTE
// ===============================

const whatsappBtn = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {
    if(window.scrollY > 400){
        whatsappBtn.classList.add("show");
    } else {
        whatsappBtn.classList.remove("show");
    }
});
