const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.style.height = '60px';
    } else {
        navbar.style.height = '70px';
    }
});

function goTo() {
    window.location.href = `./${arguments[0]}.html`;
}