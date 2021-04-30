if ( document.querySelector('.diploms__slider') ) {
var mySwiper = new Swiper('.diploms__slider .swiper-container', {
    speed: 400,
    autoHeight: true,
     navigation: {
    nextEl: '.diploms__slider .diploms__slider-arrow--next',
    prevEl: '.diploms__slider .diploms__slider-arrow--prev',
  },
  breakpoints: {
  	320: {
	slidesPerView: 1,
	 spaceBetween: 10,
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