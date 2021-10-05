const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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