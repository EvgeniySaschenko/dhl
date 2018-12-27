(function(){
	let accordion__item= document.getElementsByClassName('accordion__item');
	for(let i= 0, l= accordion__item.length; l > i; i++){
		accordion__item[i].addEventListener('click', ()=>{
			accordion__item[i].classList.toggle('active');
		});
	}
})();