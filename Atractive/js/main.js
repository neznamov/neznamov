$(document).ready(function(){
	$(".services-image__pagination-item--right").click(function(){
		var currentImage = $(".services__img--curent");
		var currentImageIndex = $(".services__img--curent").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $ (".services__img").eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass(".services__img--curent");

		if(nextImageIndex == ($(".services__img:last").index()+1)){
			$(".services__img").eq(0).fadeIn(1000);
			$(".services__img").eq(0).addClass("services__img--curent");
		}else{
			nextImage.fadeIn(1000);
			nextImage.addClass("services__img--curent");
		}
	});
	$(".services-image__pagination-item--left").click(function(){
		var currentImage = $(".services__img--curent");
		var currentImageIndex = $(".services__img--curent").index();
		var prevImageIndex = currentImageIndex -1;
		var prevImage = $ (".services__img").eq(prevImageIndex);

		currentImage.fadeOut(1000);
		currentImage.removeClass("services__img--curent");
		prevImage.fadeIn(1000);
		prevImage.addClass("services__img--curent");
	});
});