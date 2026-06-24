// ---------- AOS (Animate On Scroll) INIT ----------
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
});

// ---------- PARTICLES (Hero Background) ----------
document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = Math.random() * 0.4 + 0.1;
            particlesContainer.appendChild(particle);
        }
    }
});

// Add particle keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .particle {
        position: absolute;
        background: rgba(46, 204, 113, 0.6);
        border-radius: 50%;
        pointer-events: none;
        animation: floatParticle linear infinite;
    }
    @keyframes floatParticle {
        0% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(40px, -60px) scale(1.2); }
        50% { transform: translate(-20px, -120px) scale(0.8); }
        75% { transform: translate(30px, -180px) scale(1.1); }
        100% { transform: translate(-10px, -240px) scale(1); }
    }
`;
document.head.appendChild(styleSheet);

// ---------- EVENT TABS INTERACTION ----------
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.event-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log('Tab clicked:', this.dataset.tab);
        });
    });
});

console.log('Adhishrihaan Foundation – World-class website loaded!');