var popup = document.querySelector(".popup");
var link = document.querySelector(".link-btn");
var close = document.querySelector(".close-popup");
var map = document.querySelector(".wrapper-map");
var linkMap = document.querySelector(".map-img");
var closeMap = document.querySelector(".map-popup-button");

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("popup-active");
});

linkMap.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.add("wrapper-map-active");
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("popup-active");
});

closeMap.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.remove("wrapper-map-active");
});