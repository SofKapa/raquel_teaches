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


  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 1,        // Show one slide only
    centeredSlides: false,   // No centering effects needed
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: { navigation: false },
      769: { navigation: true }
    }
  });




  // PACKAGE CARDS
  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
  });


  // WHO IS THIS FOR | AUDIENCE
  document.querySelectorAll('.audience-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.parentElement;
      item.classList.toggle('active');
    });
  });



});
