import { updateSlides } from './js/updateSlides.js';

updateSlides();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    closeButton: false,
  });

  $('.mobile__menu-close').on('click', function () {
    $.fancybox.close();
  });
});