$(document).ready(function(){
	$('.slider').slick({
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/svg/arrow.svg'>",
     	nextArrow:"<img class='a-right control-c next slick-next' src='img/svg/arrow.svg'>",
     	dots: true,
     	arrows: true,
     	responsive:[
     	{
     		breakpoint: 1024,
     		settings:{
     			arrows: false
     		}
     	}
     	]
    
  });

$("li button").empty();

	new WOW().init();

     $(".hamburger").on("click", function(){
          $(this).toggleClass("is-active");
          $(".navigation").toggleClass("navigation--acitve")
     })
})