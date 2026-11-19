// Mobile navigation only. Site content and pages work without JavaScript.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mobile-nav');
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !nav.hidden) { setOpen(false); toggle.focus(); } });
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
}
