(function(){
	let reset= (form) =>{
		let field= form.querySelectorAll('[name]');
		for( let i= 0, l= field.length; l > i; i++ ){
			field[i].value= '';
		}
	}
})();
// Стилизвция select

(function(){
	$('.form__select').styler({
		selectSmartPositioning: false
	});
})();
