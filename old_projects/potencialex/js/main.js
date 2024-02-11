$(document).ready(function(){
	$(".slick").slick({
		dots: true,
		arrows: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/arrow.svg'>",
     	nextArrow:"<img class='a-right control-c next slick-next' src='img/arrow.svg'>",
     	responsive:[
     	{
     		breakpoint: 1024,
     		settings:{
     			arrows: false
     		}
     	}
     	]

	})
})

$('#example').countdown({
date: '8/30/2020 23:59:59'
}, function () {
  alert('End :(');
});