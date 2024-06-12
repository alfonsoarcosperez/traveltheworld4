function toggleMenu() {
    console.log("Función toggleMenu() se ha activado");
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.onclick = function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    };
}

document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("like-btn");
        });
    });
});