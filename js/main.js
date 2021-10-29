$(document).ready(function () {
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
});

const modalButton = $('[data-toggle=modal]');
const closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function closeModal(event) {
  event.preventDefault();
  const modalOverlay = $(".modal__overlay");
  const modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay_visible");
  modalDialog.removeClass("modal__dialog_visible");
}

function openModal() {
  const modalOverlay = $(".modal__overlay");
  const modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay_visible");
  modalDialog.addClass("modal__dialog_visible");
}

$(document).on('keydown', function(e){
   if(e.keyCode === 27){
     closeModal(e);
   }
});

$('.modal__form').validate({
  messages: {
    name: "please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
})

});
