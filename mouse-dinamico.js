
const cursorLight = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
    // Mover el halo principal
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;

    //Creamos las particulas
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    
    // Movimiento aleatorio de la partícula
    const dx = (Math.random() - 0.5) * 50 + 'px';
    const dy = (Math.random() - 0.5) * 50 + 'px';
    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);

    document.body.appendChild(particle);

    // Eliminar la partícula después de animación
    setTimeout(() => particle.remove(), 800);
});
