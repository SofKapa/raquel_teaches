// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {


  // AUDIENCE LIST

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

  

  // TESTIMONIALS

  const prevBtn = document.querySelector(".scroll-btn.prev");
  const nextBtn = document.querySelector(".scroll-btn.next");
  const wrapper = document.querySelector(".testimonial-wrapper");
  const cards = wrapper.querySelectorAll(".testimonial-card");

  let index = 0;

  function showCard(i) {
    index = i;
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length -1;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => showCard(index + 1));
  prevBtn.addEventListener('click', () => showCard(index - 1));

  // optional: initialize first card
  showCard(0);


});
