document.addEventListener("DOMContentLoaded", function() {
    const estadoInput = document.querySelector('#estado-input');
    const estadoMensaje = document.querySelector('#estado-mensaje');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Función para cambiar el mensaje y color del estado según el número ingresado
    estadoInput.addEventListener("input", function() {
        const valor = parseInt(estadoInput.value);
        estadoMensaje.classList.remove("sin-revisar", "en-proceso", "terminado");

        if (valor === 1) {
            estadoMensaje.textContent = "Sin revisar";
            estadoMensaje.classList.add("sin-revisar");
        } else if (valor === 2) {
            estadoMensaje.textContent = "En proceso";
            estadoMensaje.classList.add("en-proceso");
        } else if (valor === 3) {
            estadoMensaje.textContent = "¡Terminado, vení a buscarlo!";
            estadoMensaje.classList.add("terminado");
        } else {
            estadoMensaje.textContent = "Revise el número, no se encontró su pedido";
            estadoMensaje.classList.add("sin-revisar");
        }
    });

    // Función para cambiar las imágenes del carousel automáticamente
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5500); // Cambia de imagen cada 5 segundos
});
