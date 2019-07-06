$(document).ready(function(){
	$(".navigation__burger").click(function(){
		$(".navigation__menu-items").toggleClass("navigation__menu-items--active");
		$(".navigation").toggleClass("navigation--size");
		$(".navigation__burger-item--middle").toggleClass("navigation__burger-item--middle-none");

	});

	/* Fixed header */
	$(window).on("scroll load", function(){
		let nav = $("#nav"),
		logo = $("#logo"),
		link = $(".navigation__menu-items__link"),
		scrollOffset = 0;
		let introH = $("#intro").innerHeight();

		scrollOffset = $(this).scrollTop();

		if(scrollOffset >= introH){
			nav.addClass("navigation--fixed");
			link.addClass("navigation__menu-items--color");
			logo.addClass("navigation__logo--fixed");
		}else{
			nav.removeClass("navigation--fixed");
			link.removeClass("navigation__menu-items--color");
			logo.removeClass("navigation__logo--fixed");
		}
	});

	/*Accordeon */
			$(".panel .panel__title").hide().prev().click(function(){
				$(".panel .panel__title").not(this).slideUp();
				$(this).next().not(":visible").slideDown();
			});

			$(".panel .panel__plus").click(function(){
				$(".panel__plus").toggleClass("panel__minus").next();
				$(".panel__plus").not(this).removeClass("panel__minus").next();
			});

	/* Smooth scroll */
		$("[data-scroll]").on("click", function(event){
			event.preventDefault();

			let $this = $(this),
			sectionId = $this.data("scroll"),
			sectionOffset = $(sectionId).offset().top;


			$("#menu-list a").removeClass("navigation__menu-items__link--active");
			$this.addClass("navigation__menu-items__link--active");

			$("html, body").animate({
				scrollTop: sectionOffset
			}, 500);
		});

		/*Slider*/
		$("[data-slider]").bxSlider({	
			slideWidth: 250
		});


		/*Blog Toggle*/

		$(".blog-more").click(function(){
			$(".blog__inner-more").fadeToggle("blog__inner-more--active");
			$(this).toggleClass("blog-more--active");
		});

		/*Portfolio*/
		$(function(){
			$('.portfolio__list a').click(function(){
				var get_id = this.id;
				var get_current = $('.portfolio__img .' + get_id);

				$(".portfolio__list a").toggleClass("link--active");
				$(".portfolio__list a").not($(this)).removeClass("link--active");

				$('.portfolio__img-item').not(get_current).fadeTo( 10 , 0.1, function() {
				});
				get_current.fadeTo( 10 , 1, function() {

				});
			});

			$('#showAll').click(function(){
				$('.portfolio__img-item').fadeTo( 10 , 1, function() {
				});
			});
		});

		/*Counter*/
		
		
		$(".count").each(function(){
			$(this).prop("Counter", 0). animate({
				Counter:$(this).text()
			},{
				duration: 4000,
				easing: "swing",
				step:function(now){
					$(this).text(Math.ceil(now));
				}
			});
		});

		/* Parallax*/

		$(window).scroll("load",function(){
			let st = $(this).scrollTop();
			if($(window).width()>768){
				$(".header").css({
					"background-position-y": "+" + st/3 + "px"
				});

				$(".capture__title").css({
					"transform" : "translate(0%, " + st / 0.6 +"%"
					
				});
				
				$(".capture__text").css({
					"transform" : "translate(0%, " + st / 1.5 +"%"
				});

				$(".capture__links").css({
					"transform" : "translate(0%, " + st / 8 +"%"
				});
			}	

		});

});