class quize {

	constructor() {

		this.quize = document.querySelector('.quize');
		this.line = document.querySelector('.quize__line');
		this.answers = document.querySelectorAll('.quize__answer');
		this.nav = document.querySelector('.quize__nav');

		this.navPrev = document.querySelector('.quize__nav-back');
		this.navNext = document.querySelector('.quize__nav-next');


		this.toogleAnswers(this.answers);
		this.toogleSlides(this.navPrev,this.navNext);
		this.changeNav(this.activeIndex);
		this.changeSteps(this.activeIndex);

		this.quize.addEventListener('submit', this.onSubmit);

	}

	get activeTab() {
		return document.querySelector('.quize__tab--active');
	}

	get activeIndex() {
		return document.querySelector('.quize__tab--active').getAttribute('data-tab');
	}	

	get totalSlides() {
		return document.querySelectorAll('.quize__tab').length;
	}	

	onSubmit(event) {
		event.preventDefault();
		document.querySelector('.quize').classList.add('quize--thank');
    // $.ajax({
    //     type: 'post',
    //     url: '../send.php',
    //     data: $('#contact_form').serialize(),
    //     success:function(d) {
    //         alert(d);
    //     }
    // });
}

toogleAnswers(answers) {
	for (let i = 0; i < answers.length; i++) {
		answers[i].addEventListener('click', function(){
			this.closest('.quize__answers').querySelector('.quize__answer--active').classList.remove('quize__answer--active');
			this.classList.add('quize__answer--active');
			// console.log($('.quize').serializeArray());
		});
	}
}


toogleSlides(prev,next) {

	prev.addEventListener('click', function(){
		if ( this.activeIndex != 1 ) {
			this.changeSlide('prev');
		} else {
			console.log('нельзя переключить на слайд номер 0');
		}

	}.bind(this));

	next.addEventListener('click', function(){
		if ( this.activeIndex != this.totalSlides ) {
			this.changeSlide('next');
		} else {
			console.log('нельзя переключить на слайд номер последний + 1');
		}

	}.bind(this));

}

changeSlide(direction) {
	let activeTab = this.activeTab 
	activeTab.classList.remove('quize__tab--op1');
	activeTab.classList.add('quize__tab--op0');

	let  xxx = function() {
		if ( direction == 'next' ) {
			this.showSlide(+this.activeIndex+1);
		} else if ( direction == 'prev' ){
			this.showSlide(+this.activeIndex-1);
		}
		activeTab.classList.remove('quize__tab--op0');
		activeTab.classList.remove('quize__tab--active');
		activeTab.removeEventListener('transitionend', xxx);
	}.bind(this);

	activeTab.addEventListener('transitionend', xxx);
}



showSlide(index) {
	this.changeLine(index);
	this.changeSteps(index);
	this.changeNav(index);
	document.querySelector('.quize__tab[data-tab="'+index+'"]').classList.add('quize__tab--active');
	document.querySelector('.quize__tab[data-tab="'+index+'"]').classList.add('quize__tab--op0');
	raf(function(){
		document.querySelector('.quize__tab[data-tab="'+index+'"]').classList.remove('quize__tab--op0');
		document.querySelector('.quize__tab[data-tab="'+index+'"]').classList.add('quize__tab--op1');
	});
}


changeLine(index) {
	let persent = Math.round (100 / this.totalSlides * ( index - 1 ) ) + '%';
	document.querySelector('.quize__line-fill').style.width = persent;
	document.querySelector('.quize__line-text').innerHTML = persent;
}


changeNav(index) {
	if ( index == this.totalSlides  ) {
		document.querySelector('.quize__nav').classList.add('quize__nav--last');
	} else {
		document.querySelector('.quize__nav').classList.remove('quize__nav--last');
	}

	if ( index == 1  ) { 
		document.querySelector('.quize__nav').classList.add('quize__nav--first');
	} else {
		document.querySelector('.quize__nav').classList.remove('quize__nav--first');
	} 
}


changeSteps(index) {
	document.querySelector('.quize__steps-current span').innerHTML = index;
	if ( index == this.totalSlides  ) {
		document.querySelector('.quize__steps-total').innerHTML = 'Последний шаг';
	} else {
		document.querySelector('.quize__steps-total').innerHTML = 'Осталось всего <span>' + ( this.totalSlides - index ) + '</span>';
	}
}


nextSlide(){
	alert('next slide');
}


prevSlide(){
	alert('prev slide');
}

}

document.addEventListener("DOMContentLoaded", function() {
	if ( document.querySelector('.quize') ){
		window.quize = new quize();
	}
});


function raf(fn) {
	window.requestAnimationFrame(function(){
		window.requestAnimationFrame(function(){
			fn();
		});
	});
}