

$(".menu-btn").on("click", function(e){
  e.preventDefault;
  $(this).toggleClass("menu-btn_active");
  $(".navigation-list__menu").toggleClass("menu-nav__active");
});

$(document).ready(function(){
    $(".tab__item").not(":first").hide();
    $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active result__paggination--active").eq($(this).index()).addClass("active result__paggination--active");
    $(".tab__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});

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
