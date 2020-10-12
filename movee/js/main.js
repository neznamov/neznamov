
$(function(){
	$('.slick').slick({
		responsive:[
		{
			breakpoint: 920,
			settings:{
				dots: true

			}
		}
		],
		prevArrow: '<button type="button" class="slick-prev "><img src="img/arrow-left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next "><img src="img/arrow-right.svg"></button>'
	});

	$("#tabs").tabs({
		activate: function(){
			$('.slick').slick("refresh");
			$(".slick-dots button").empty();
		}
	});

	$(".header__burger").on("click", function(){
		$(".header__nav").toggleClass("header__nav--active");
		$(".header__burger").toggleClass("header__burger--active");
	})

	$(".comment__show").on("click",function(){
		$(".comment__item").addClass("comment__item--active");
		$(this).css("display", "none")
	})

	$(".cost__button").on("click", function(){
		$(".table").addClass("table--active");
		$(this).css("display", "none");
	})

});


