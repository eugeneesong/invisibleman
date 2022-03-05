$(document).ready(function() {
	
	$(".mouse_hover_area").mousemove(function(event) {
		var top =$(window).scrollTop() - $(this).offset().top + event.clientY
		var left =$(window).scrollLeft() - $(this).offset().left + event.clientX
		$('.mouse').css({"left":left - 150,"top":top - 150});
		
	});
	
});

// transition to eyes
// setTimeout(transition, 1000);
// $('.js-trigger-transition').on('click', function(e) {
//   e.preventDefault();
//   transition();
// });
// function transition() {
//   var tl = new TimelineMax();
//   tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
//   .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
//   .to($('.loader'), 0.2, {opacity: 1})
//   .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
//   .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
//   .to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
// }