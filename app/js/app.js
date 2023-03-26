// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	$('.top_slider').slick({
		
		infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
		dots: true,//включить точки
		arrows:false,//выключить кнопки	
		autoplay:true,//авто переключатель
		
	});
})
