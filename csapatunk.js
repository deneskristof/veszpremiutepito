document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.stab-card');

  cards.forEach(card => {
      card.addEventListener('click', function() {
          card.classList.toggle('is-flipped');
      });
  });
});


