if ( document.querySelector('.payment__methods') ) {
	let methods = document.querySelectorAll('.payment__methods-item');
	for (var i = 0; i < methods.length; i++) {
		methods[i].addEventListener('click', function(){
			document.querySelector('.payment__methods-item--active').classList.remove('payment__methods-item--active');
			this.classList.add('payment__methods-item--active');
		});
	}
}