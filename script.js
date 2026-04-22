// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Dark mode toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('dark-toggle').textContent = isDark ? '☀️' : '🌙';
});

// Project modals
const projects = {
    project1: '<h3>Responsive Portfolio</h3><p>Built with HTML, CSS, JS. Features animations, dark mode, and responsive design. Hosted on GitHub Pages.</p>',
    project2: '<h3>Data Dashboard</h3><p>Interactive analytics tool using Excel data and charts for business insights.</p>'
};
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        document.getElementById('modal-body').innerHTML = projects[modalId];
        document.getElementById('modal').style.display = 'block';
    });
});
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});
document.querySelectorAll('h2, .project-card').forEach(el => observer.observe(el));

// Navbar links smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this.getAttribute('href').slice(1));
        document.getElementById('nav-menu').classList.remove('active');
    });
});
