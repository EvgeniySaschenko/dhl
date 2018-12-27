(function(){
	var mySwiper = new Swiper ('.advantages_services-inter', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			770: {
				slidesPerView: 1,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},
			},
			1190: {
				slidesPerView: 2,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},
			}
		},
	})
})();