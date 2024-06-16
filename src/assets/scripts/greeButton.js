document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón por su id
    const greetButton = document.getElementById('greetButton');

    // Añade un evento 'click' al botón
    greetButton.addEventListener('click', () => {
        // Muestra un mensaje de saludo
        alert('¡Hola! Gracias por visitar mi sitio web.');
    });
});