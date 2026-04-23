// FreshNest landing page interactions
// - mobile menu toggle
// - email capture success state
// - order form confirmation state
// - FAQ accordion behavior

(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const emailForm = document.getElementById('email-form');
  const emailSuccess = document.getElementById('email-success');

  if (emailForm && emailSuccess) {
    emailForm.addEventListener('submit', function (event) {
      event.preventDefault();
      emailSuccess.hidden = false;
      emailForm.reset();
      emailSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  const orderForm = document.getElementById('order-form');
  const orderConfirmation = document.getElementById('order-confirmation');

  if (orderForm && orderConfirmation) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      orderConfirmation.hidden = false;
      orderForm.reset();
      orderConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach(function (faqItem) {
        faqItem.classList.remove('is-open');
        const faqButton = faqItem.querySelector('.faq-question');
        if (faqButton) {
          faqButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
