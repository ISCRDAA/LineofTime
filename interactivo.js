// Función para desplegar detalles al hacer clic
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});
