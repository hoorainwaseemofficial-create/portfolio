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
// Render Projects + Resume from projects-data.js
// (single source of truth — see that file to add a project)
// ============================================
(function renderProjectsAndResume() {
  if (typeof PROJECTS === 'undefined') return;

  const grid = document.getElementById('projectGrid');
  const resumeList = document.getElementById('resumeProjectList');
  const thumbColors = ['ph-1', 'ph-2', 'ph-3', 'ph-4', 'ph-5'];

  const cardsHtml = PROJECTS.map((p, i) => {
    const thumb = p.image
      ? `<div class="project-thumb"><img src="${p.image}" alt="${p.title} preview"></div>`
      : `<div class="project-thumb ${thumbColors[i % thumbColors.length]}" aria-hidden="true"></div>`;

    const liveLink = p.live
      ? `<a href="${p.live}" target="_blank" rel="noopener" class="link-arrow">Live demo →</a>`
      : '';
    const sourceLink = p.source
      ? `<a href="${p.source}" target="_blank" rel="noopener" class="link-arrow">Source →</a>`
      : '';

    const tags = p.tech.map(t => `<li>${t}</li>`).join('');

    return `
      <article class="project-card reveal">
        ${thumb}
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <ul class="tag-list">${tags}</ul>
          <div class="project-links">${liveLink}${sourceLink}</div>
        </div>
      </article>`;
  }).join('');

  if (grid) grid.innerHTML = cardsHtml;

  if (resumeList) {
    resumeList.innerHTML = PROJECTS.map(p =>
      `<li>${p.title} — ${p.tech.join(', ')}</li>`
    ).join('');
  }

  // newly injected .reveal cards need to be observed for the scroll animation
  document.querySelectorAll('#projectGrid .reveal').forEach(el => revealObserver.observe(el));
})();

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
