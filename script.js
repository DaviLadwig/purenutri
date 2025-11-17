// MENU RESPONSIVO

function toggleMenu() {
document.getElementById('bubbleMenu').classList.toggle('active');
}

// HERO

document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-left, .animate-right");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

// CORREÇÃO PARA DEPOPIMENTOS

document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-left, .animate-right, .animate-up");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
