// ============================================
// Footer year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Scroll-spy: highlight active nav link
// ============================================
const sections = document.querySelectorAll('main section[id], header#top');
const navItems = document.querySelectorAll('[data-nav]');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

document.querySelectorAll('main section[id]').forEach(sec => spyObserver.observe(sec));

// ============================================
// Scroll reveal
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// Subtle ambient tilt on the laptop mockup (mouse-follow), respects reduced motion
// ============================================
(function laptopTilt() {
  const laptop = document.querySelector('.laptop');
  if (!laptop) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return;

  const heroVisual = document.querySelector('.hero-visual');
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    laptop.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    laptop.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
})();
