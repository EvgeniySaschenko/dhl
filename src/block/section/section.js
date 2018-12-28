(function(){
	let section__title_services= document.getElementById('section__title_services')
	section__title_services.classList.add('animated');
	let waypoint = new Waypoint({
		element: section__title_services,
		handler: ()=> {
			section__title_services.classList.add('bounceInLeft');
		},
		offset: '75%'
	});
})();

(function(){
	let section_clients= document.getElementById('section_clients')
	section_clients.classList.add('animated');
	let waypoint = new Waypoint({
		element: section_clients,
		handler: ()=> {
			section_clients.classList.add('bounceInLeft');
		},
		offset: '75%'
	});
})();