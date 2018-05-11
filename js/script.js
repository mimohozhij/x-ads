$(document).ready(function () {
	$('.user-menu').live('click', function () {
		if ($('.user-menu').hasClass('user-menu_active')) {
			$('.user-menu').removeClass('user-menu_active');
		} else {
			$('.user-menu').addClass('user-menu_active');
		}
	});
	// $('.user-menu .overlay-close').live('click', function () {
	// 	$('.user-menu').removeClass('user-menu_active');
	// });
	$('.lang-switcher').live('click', function () {
	  if ($('.lang-switcher').hasClass('lang-switcher_active')) {
	    $('.lang-switcher').removeClass('lang-switcher_active');
	  } else {
	    $('.lang-switcher').addClass('lang-switcher_active');
	  }
	});
	// $('.lang-switcher .overlay-close').live('click', function () {
	//   $('.lang-switcher').removeClass('lang-switcher_active');
	// });
});