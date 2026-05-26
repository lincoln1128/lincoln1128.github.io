const navLinks = Array.from(document.querySelectorAll('.nav nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => io.observe(section));

const revealIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealIo.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section').forEach((el) => {
  el.classList.add('reveal');
  revealIo.observe(el);
});