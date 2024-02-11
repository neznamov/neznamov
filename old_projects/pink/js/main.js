var navMain = document.querySelector(".page-nav");
			var navToggle = document.querySelector(".page-nav__toggle");
			var pageHeaderWrapper = document.querySelector(".header-page__wrapper");
			var pageHeader = document.querySelector(".header-page");

			navMain.classList.remove('main-nav--nojs');

			navToggle.addEventListener('click', function() {
		if (navMain.classList.contains('page-nav--closed')) {
			navMain.classList.remove('page-nav--closed');
			navMain.classList.add('page-nav--opened');
		} else {
			navMain.classList.add('page-nav--closed');
			navMain.classList.remove('page-nav--opened');
		}
		});

		navToggle.addEventListener('click', function() {
		if (pageHeaderWrapper.classList.contains('header-page__wrapper--opened')) {
			pageHeaderWrapper.classList.remove('header-page__wrapper--opened');
			pageHeaderWrapper.classList.add('header-page__wrapper--closed');
		} else {
			pageHeaderWrapper.classList.add('header-page__wrapper--opened');
			pageHeaderWrapper.classList.remove('header-page__wrapper--closed');
		}
		});

		navToggle.addEventListener('click', function() {
		if (pageHeader.classList.contains('header-page--opened')) {
			pageHeader.classList.remove('header-page--opened');
			pageHeader.classList.add('header-page--closed');
		} else {
			pageHeader.classList.add('header-page--opened');
			pageHeader.classList.remove('header-page--closed');
		}
		});	
