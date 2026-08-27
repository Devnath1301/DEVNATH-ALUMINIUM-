document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thank you! Your message has been noted. We will contact you shortly.';
  form.reset();
});
