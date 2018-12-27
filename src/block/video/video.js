(function(){
	let video__close= function(el){
		let video__close= document.querySelectorAll(el);
		for(let i= 0, l= video__close.length; l > i; i++){
			video__close[i].addEventListener('click', function(){
				document.querySelector('.video').classList.remove('active');
			});
		}
	}
	video__close('.video__close');
})();