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
  //обработка форм
  $(".form").each(function(){
    //addInvalid();
    $(this).validate({

      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 16
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name should have at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please specify your phone number",
          minlength: "Your phone number must be in the format of: +7 (999) 999-99-99,"
        },
      },
    })
  });
  $('.form').ready(function(){
      $("[name='phone']").mask('+7(000)000-00-00');
  });
 AOS.init(); 
})



  


