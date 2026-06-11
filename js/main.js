const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');
const yearSpan = document.getElementById('year');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const date = formData.get('date')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !phone || !date || !message) {
      formMessage.textContent = 'Please complete all fields before sending your request.';
      return;
    }

    formMessage.textContent = 'Thank you! Your request has been received. Our care team will contact you soon.';
    form.reset();
  });
}
