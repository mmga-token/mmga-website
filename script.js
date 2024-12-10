// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('main section');
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Fade in hero text
window.addEventListener('load', () => {
  document.querySelector('.hero-content').style.opacity = "1";
});
