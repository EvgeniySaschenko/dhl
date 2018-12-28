(function(){
	let logo_header= document.getElementById('logo_header');
	logo_header.classList.add('animated');
	setTimeout(()=>{
		logo_header.classList.add('bounceInLeft');
	}, 1050);
})();