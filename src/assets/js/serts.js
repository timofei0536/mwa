if ( document.querySelector('.serts__slider') ) {
var mySwiper = new Swiper('.serts__slider .swiper-container', {
  speed: 400,
  autoHeight: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.serts__slider .serts__slider-arrow--next',
    prevEl: '.serts__slider .serts__slider-arrow--prev',
  },
  breakpoints: {
  	320: {
     slidesPerView: 1,
     spaceBetween: 20,
   },

   768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  }
}
});
}