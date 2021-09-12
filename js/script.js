'use strict';

/**
 * General variables
**/

const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.main-nav');
const menu = document.querySelectorAll('.main-menu li a');



/**
 * 
 * Helper functions
 * 
**/
 const addClass = (elm, className) => {
  elm.classList.add(className);
  // elm.classList.add("menu__link");
};
const removeClass = (elm, className) => {
  elm.classList.remove(className);
  // elm.classList.add("menu__link");
};



/**
 * 
 *  Main functions 
 * 
**/
// Add active state to cards
cards.forEach((card, indx, arr) => {
  const cardPrice = card.children[3];
  const cardBtn = card.children[4];
  const starIcon = card.children[5];


  card.onmouseover = (e) => {
    addClass(card, 'card-active')
    
    addClass(cardPrice,'card-price-active')
    addClass(cardBtn,'card-btn-active')

    addClass(starIcon,'fas')
    addClass(starIcon,'fa-star')
  };

  card.onmouseleave = (e) => {
    removeClass(card,'card-active');

    removeClass(cardPrice,'card-price-active');
    removeClass(cardBtn,'card-btn-active');

    removeClass(starIcon,'fas');
    removeClass(starIcon,'fa-star');
  };
});

/** Define the viewport for every section **/
document.addEventListener('DOMContentLoaded', ()=> {

  // intersectionobserver method options
  let options = {
    root:null,
    rootMargin: '-200px 0px',
    threshold: 0.10,
  }

  // Using intersectionobserver method to specify the sections 
  let interSection = new IntersectionObserver(getSectionInView, options)
  document.querySelectorAll('section').forEach(section => {
  interSection.observe(section);
  // console.log('watching');
  });

});

// Callback function while we defined the sections in viewport 
const getSectionInView = (sections)=> {

  sections.forEach(section => {

      if (section.isIntersecting) {
        // console.log(`#${elm.target.id}`)
        menu.forEach(link=>{
          // console.log(linkHref)
          let linkHref = link.getAttribute('href');
          let sectionId = `#${section.target.id}`;

          // add active state while the link href value = section target id
          if (sectionId !== "#header") {
            addClass(nav, 'main-nav-active');
          }else {
            removeClass(nav, 'main-nav-active');
          }

          if (linkHref === sectionId) {
            addClass(link, "active-menu");
            
          }else if (linkHref !== sectionId) {
            removeClass(link, "active-menu");
          }
        });
      }
  });
}

// Hide nav on scrolling
const hideNav = ()=>{
  if(!nav.classList.contains('hidden')){
    setTimeout(() => {   
      addClass(nav, 'hidden');
    }, 100);
  }else {
    setTimeout(() => {
      removeClass(nav, 'hidden');
    }, 900);
  }
}
document.addEventListener('scroll', hideNav);