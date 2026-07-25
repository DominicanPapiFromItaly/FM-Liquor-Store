// NAV SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // MOBILE MENU
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  }

  // MENU TABS
function switchTab(cat, event) {
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.menu-cat').forEach(c => {
    c.classList.remove('active');
    c.style.display = 'none'; // nascondo tutte
  });
  event.target.classList.add('active');
  const el = document.getElementById('cat-' + cat);
  if (el) { el.classList.add('active'); el.style.display = 'grid'; }
}

  // FORM SUBMIT
  function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Reservation Confirmed!';
    btn.style.background = '#2d5a27';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Confirm Reservation ↗';
      btn.style.background = '';
      btn.style.color = '';
    }, 4000);
  }

  // SCROLL REVEAL
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

