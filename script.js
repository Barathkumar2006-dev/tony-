const swiper = new Swiper('.silder-wrapper', {
  // Optional parameters
  

  loop: true,

  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});