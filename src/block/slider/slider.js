(function(){
	var mySwiper = new Swiper ('.slider_header', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		preloadImages: true,
		lazy: {
			loadPrevNext: true,
		}
	})
})();