if ( document.querySelector('.partners__slider') ) {
var mySwiper = new Swiper('.partners__slider .swiper-container', {
  speed: 400,
  spaceBetween: 30,
  autoHeight: true,
  slidesPerView: 4,
  loop: true,
  watchSlidesVisibility: true,
  breakpoints: {
  	320: {
     slidesPerView: 2,
     spaceBetween: 20,
   },

    768: {
     slidesPerView: 3,
    spaceBetween: 30,
   },

   1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  }
}
});
}