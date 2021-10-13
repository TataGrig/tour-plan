const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: 'coverflow',
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});


// const swiper = new Swiper('.review__swiper-container', { 
//   // Optional parameters
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.slider-button--next',
//     prevEl: '.slider-button--prev',
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },

// });