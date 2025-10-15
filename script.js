const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

function enableDarkMode() {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
}

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent. Thank you.');
    contactForm.reset();
});