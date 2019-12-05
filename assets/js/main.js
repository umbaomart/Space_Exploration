// // scroll effect on anchor tag to id
// function scroll() {
// 	$('a[href^="#"]').click(function(){
// 		var href= $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$('html, body').stop().animate({ scrollTop: position }, 500, 'swing');
// 		return false;
// 	});
// }

// $(function(){
// 	scroll();
// });


// $(window).on('load resize', function(){
// }); // resize


document.addEventListener('DOMContentLoaded', eventListener);

// FUNCTIONS
function eventListener() {
	
	// VARIABLES
	var tl = new TimelineLite();

	Splitting();
	
	tl.staggerFromTo('.header__container .text', .5,{x: '-100px', opacity: 0},{ opacity: 1, x: 0}, .08).
		fromTo('header nav', .5, {x: '100px', opacity: 0}, {x: 0, opacity: 1}).
			staggerFromTo('ul .link', .3, {y: '-20px', opacity: 0},{y: 0, opacity: 1}, .05).
				staggerFromTo('h1 .char', .6, {y: '20px', opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut}, .05).
				// staggerFromTo('h1 .char', .6, {y: '20px', opacity: 0}, {y: 0, opacity: 1, ease: Elastic.easeOut}, .05).
					fromTo('.subtitle p', .5, {scale: .5, opacity: 0}, {scale: 1, opacity: 1}).
						fromTo('.hero__btn', 1, {y: '30px', opacity: 0}, {y: 0, opacity: 1, ease: SlowMo.easeOut});

}