let enter = document.querySelector(".navigation__sign-enter");
let popup = document.querySelector(".popup");
let close = document.querySelector(".popup-form__close");
let burger = document.querySelector(".navigation-burger");


$(burger).click(function(){
	$(".navigation-list").toggleClass("navigation-list--active");
	$(".navigation").toggleClass("navigation--active");
	$(".navigation-logo__title").toggleClass("navigation-logo__title--active");
	$(".navigation-logo").toggleClass("navigation-logo--active");
	$(".navigation__sign").toggleClass("navigation__sign--active");
})

$(".navigation-burger").click(function(){
	$(".navigation-burger__item").toggleClass("navigation-burger__item--active");
})

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("popup-show");
})

enter.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("popup-show");
})				


window.addEventListener("keydown", function(evt){
		if(evt.keyCode === 27){
			evt.preventDefault();
			if(popup.classList.contains("popup-show")){
				popup.classList.remove("popup-show");
			}	
		}	
	});


$(document).ready(function(){
	$(".services-item .services-item__main").hide().prev().click(function(){
		$(".services-item .services-item__main").not(this).slideUp();
		$(this).next().not(":visible").slideDown();
	})
})


let windwosize = $(window).width();


if(windwosize > 920){

$('.slider').bxSlider({
    mode: 'vertical',
    minSlides: 2,
    slideMargin: 0,
    auto:true,
    moveSlides:1,
    controls: false,
    pager:false
  });
}else{

	$('.slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    slideMargin: 0,
    auto:true,
    moveSlides:1,
    controls: false,
    pager:false
  });

}