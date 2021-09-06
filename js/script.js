'use strict';

/** General variables **/

const cards = document.querySelectorAll('.card');
// create star

/** Main function **/

cards.forEach((card, indx, arr) => {
  const cardPrice = card.children[3];
  const cardBtn = card.children[4];

  const starIcon = card.children[5];

  card.onmouseover = (e) => {
    card.classList.add('card-active');

    cardPrice.classList.add('card-price-active');
    cardBtn.classList.add('card-btn-active');
    // Star on hover
    starIcon.classList.add('fas');
    starIcon.classList.add('fa-star');
  };
  card.onmouseleave = (e) => {
    card.classList.remove('card-active');
    cardPrice.classList.remove('card-price-active');
    cardBtn.classList.remove('card-btn-active');
    // Star on hover
    starIcon.classList.remove('fas');
    starIcon.classList.remove('fa-star');
  };
});
