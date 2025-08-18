// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Select all audience items
  const items = document.querySelectorAll('.audience-item');

  // Set up intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate'); // add animation class
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.2 });

  // Observe each audience item
  items.forEach(item => observer.observe(item));

  

});
