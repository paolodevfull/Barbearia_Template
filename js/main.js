document.documentElement.classList.add('js');

const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
  toggle?.querySelector('.sr-only')?.replaceChildren('Abrir menu');
}

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('is-open', !open);
  toggle.querySelector('.sr-only').textContent = open ? 'Abrir menu' : 'Fechar menu';
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
