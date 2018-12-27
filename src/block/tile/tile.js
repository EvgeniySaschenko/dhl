(function(){
	var mySwiper = new Swiper ('.tile_clients', {
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
			990: {
				slidesPerView: 2,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},
			},
			1190: {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},
			}
		},
	})
})();