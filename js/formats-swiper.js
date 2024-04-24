const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: { // після 768px
      slidesPerView: 2,
    },
  
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {  //кнопки переходу на наступ картки
    el: '.pagination',
    bulletClass: 'pagination__button', //який клас буде застосовув до кнопки
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {   // стрілочки
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});