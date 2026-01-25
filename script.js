// Simple scroll animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.8s ease';
});
