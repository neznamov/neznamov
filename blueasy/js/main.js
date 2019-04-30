$('.navigation a').click(function(){
	var element = $(this).attr('href');
	var dist = $(element).offset().top;

	$('html, body').animate({'scrollTop': dist}, 500)
	return false;
});

$('.header__link-item').click(function(){
	var element = $(this).attr('href');
	var dist = $(element).offset().top;

	$('html, body').animate({'scrollTop': dist}, 500)
	return false;
});

$(window).scroll(function(){
	
		var sticky = $('.header__inner'),
		scroll = $(window).scrollTop();
		if (scroll >= 250) sticky.addClass('header__inner--fixed', 1000, 'easeOutBounce');
		else sticky.removeClass('header__inner--fixed');
});

$(function(){
	$('.portfolio__toggles a').click(function(){
		var get_id = this.id;
		var get_current = $('.picture__column .' + get_id);

		$('.picture__column-item').not(get_current).fadeTo( 10 , 0.1, function() {
  		});
		get_current.fadeTo( 10 , 1, function() {

  		});
	});

	$('#showall').click(function(){
		$('.picture__column-item').fadeTo( 10 , 1, function() {
  		});
	});
});

var lastId,
    topMenu = $(".navigation__menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("navigation__list-item--mod")
         .end().filter("[href='#"+id+"']").parent().addClass("navigation__list-item--mod");
   }                   
});