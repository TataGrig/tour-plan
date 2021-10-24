const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },

  effect: 'coverflow',
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  });

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', 
function () {
  console.log('Клик по кнопке меню');
  const navbarBottom = document.querySelector(".navbar-bottom");
  navbarBottom.classList.toggle("navbar-bottom_visible");
  const body = document.querySelector("body");
  body.classList.toggle("body_stop_scrolling");

})