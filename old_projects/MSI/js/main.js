$(".burger").click(function(){
	$(".nav__wrapper").toggleClass("nav__wrapper--active");
	$(".nav").toggleClass("nav--active");
	$(".nav_menu").toggleClass("nav_menu--active");
	$(".nav > a ").toggleClass("nav--active > a");
	$(".button__cabinet").toggleClass("button__cabinet--active");
	$(".burger").toggleClass("burger--active");
});

// countdown start
function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2022, 12, 12);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
  	var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}
updater(document.getElementById("days"),
  document.getElementById("hours"), document.getElementById("minutes"),
  document.getElementById("seconds"));
 //End

//Paralax Start
$(window).scroll("load", function() {
  let st = $(this).scrollTop();
  let parallax = $(".stat").offset().top;
  if ($(window).width() >= 1200) {
    $(".header").css({
      "background-position-y": "+" + st / 5 + "px"
    });
    // $(".header__timer").css({
    //   "transform": "translate(0%, " + st / 4.5 + "%"
    // });

    // $(".header__title h3").css({
    //   "transform": "translate(0%, " + st / 6 + "%"
    // })
  }if($(window).scrollTop()>= parallax){
    $(".header").css({
      "background-position-y": "+" + st / 0 + "px"
    });
    // $(".header__timer").css({
    //   "transform": "translate(0%, " + st / 0 + "%"
    // });

    // $(".header__title h3").css({
    //   "transform": "translate(0%, " + st / 0 + "%"
    // });
  }
});
// END

//Плавный якорь Start
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

//End