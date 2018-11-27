$('.navigation a').click(function(){
	var element = $(this).attr('href');
	var dist = $(element).offset().top;

	$('html, body').animate({'scrollTop': dist}, 800)
	return false;
});

$(window).scroll(function(){
	
		var sticky = $('.header__inner'),
		scroll = $(window).scrollTop();
		if (scroll >= 250) sticky.addClass('header__inner--fixed');
		else sticky.removeClass('header__inner--fixed');
});