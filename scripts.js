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

  // Get exact width of one card including any margin
  function getCardWidth(card) {
    const style = window.getComputedStyle(card);
    const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
    return card.offsetWidth + margin;
  }

  const cardWidth = getCardWidth(cards[0]);
  let index = 0;

  function showCard(i) {
    if (i < 0) i = 0;
    if (i >= cards.length) i = cards.length -1;
    index = i;
    wrapper.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  }

  nextBtn.addEventListener('click', () => showCard(index + 1));
  prevBtn.addEventListener('click', () => showCard(index - 1));

  // Initialize first card
  showCard(0);


  // PACKAGE CARDS
  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
  });


});
