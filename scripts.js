function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.style.opacity = 0;
            setTimeout(() => {
                section.style.transition = 'opacity 0.5s ease-in-out';
                section.style.opacity = 1;
            }, 50);
        } else {
            section.style.transition = 'opacity 0.5s ease-in-out';
            section.style.opacity = 0;
            setTimeout(() => {
                section.classList.add('hidden');
            }, 500);
        }
    });

    // Actualizar el botón activo
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(sectionId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}