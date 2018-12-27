(function(){
	let modal__close= function(el, cb= false){
		let callback= cb ? cb : function(){};
		let modal__close= document.querySelectorAll(el);
		for(let i= 0, l= modal__close.length; l > i; i++){
			modal__close[i].addEventListener('click', function(){
				document.querySelector('.modal.active').classList.remove('active');
				callback();
			});
		}
	}

	modal__close('.modal__close', function(){
		let video__iframe= document.querySelector('#video_services-inter .video__iframe');
		video__iframe.src= '';
	});
})();