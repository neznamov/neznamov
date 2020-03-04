$(".header-burger").click(function(){
	$(".header-wrapper").toggleClass("header-wrapper--closed");
	$(".navigation-contact").toggleClass("navigation-contact--closed");
	$(".navigation__list").toggleClass("navigation__list--closed");
	$(".header-burger").toggleClass("header-burger--closed");
	$(".header-burger__item").toggleClass("header-burger__item--active");
})

$(".catalog-capture__filter").click(function(){
	$(".aside").toggleClass("aside--active");
	// $(".body").toggleClass("body-blur");
	$(".overlay").toggleClass("overlay--active");
})

$(".form-close").click(function(e){
	e.preventDefault();
	$(".aside").removeClass("aside--active");
	$(".overlay").removeClass("overlay--active")
});

$(".catalog-number__item-order, .item-info__order, .adw-order, .cat-title__order").click(function(e){
	e.preventDefault();
	$(".reservation").addClass("reservation--active");
})

$(".reservatin__order-close").click(function(){
	$(".reservation").removeClass("reservation--active");
}) 

$(document).ready(function(){
      $('.slider').bxSlider({
      	controls: false,
      	auto: true,
      	infiniteLoop: true,
      	minSlides: 2,
    	maxSlides: 2,
      });
    });