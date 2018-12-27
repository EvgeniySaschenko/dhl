(function(){
	let toggleBtn= (idBtn, cb= false)=>{
		/*
			idBtn - id кнопки при нажатии на которую происходит прерключение
			data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
		*/
		// Клик
		let btn= document.getElementById(idBtn);
		let callback= cb ? cb : function(){};
		if(btn){
			btn.addEventListener('click', function(){
				this.classList.toggle('active');
				let idControl= this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
				callback();
			});
		}
	}
	// video
	toggleBtn('btn_services-inter', function(){
		let video__iframe= document.querySelector('#video_services-inter .video__iframe');
		video__iframe.src= 'https://www.youtube.com/embed/VMKTEyLQYh8?autoplay=1';
	});
})();