document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('mouseenter', () => {
        event.querySelector('.timeline-content').style.transform = 'scale(1.1)';
    });

    event.addEventListener('mouseleave', () => {
        event.querySelector('.timeline-content').style.transform = 'scale(1)';
    });
});
