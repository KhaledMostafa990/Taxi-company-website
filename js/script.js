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

// function handleSuccess() {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   // the HTML of https://unsplash.com/
// }

// function handleError() {
//   console.log('An error occurred \uD83D\uDE1E');
// }

// const asyncRequestObject = new XMLHttpRequest();
// asyncRequestObject.open('GET', 'https://unsplash.com');
// asyncRequestObject.onload = handleSuccess;
// asyncRequestObject.onerror = handleError;
// asyncRequestObject.send();
