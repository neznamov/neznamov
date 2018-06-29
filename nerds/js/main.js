	var link = document.querySelector(".link-button");
	var popup = document.querySelector(".feedback-wrapper");
	var close = document.querySelector(".modal-close");
	var login = popup.querySelector("[name=name]");
	var form = popup.querySelector("form");
	var email = popup.querySelector("[name=email]");
	var textarea = popup.querySelector("[name=text]");

	form.addEventListener("submit", function(evt){
		evt.preventDefault();
		if(!login.value || !email.value || !textarea.value){
			evt.preventDefault();
			console.log("Нужно ввести данные");
			login.classList.add("login-field-error");
			email.classList.add("login-email-error");
			textarea.classList.add("login-textarea-field-error");
			popup.classList.add("shake");
		}
	});

	link.addEventListener("click", function(evt){
		evt.preventDefault();
		popup.classList.add("feedback-wrapper-show");
		login.focus();
	});

	close.addEventListener("click", function(){	
		popup.classList.remove("feedback-wrapper-show");
		popup.classList.remove("shake");
	});

	window.addEventListener("keydown", function(evt){
		if(evt.keyCode === 27){
			evt.preventDefault();
			if(popup.classList.contains("feedback-wrapper-show")){
				popup.classList.remove("feedback-wrapper-show");
				popup.classList.remove("shake");
			}
		}
	});