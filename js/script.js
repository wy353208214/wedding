$(document).ready(function(){


	/* ---- Countdown timer ---- */
	var startTime = '2017-1-23 12:00:00:000';
	var date = new Date(startTime); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
	var date = new Date(startTime.replace(/-/g, '/'));
	var timeleft = date.getTime() - new Date().getTime();


	$('#counter').countdown({
		timestamp : (new Date()).getTime() + timeleft
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);


	/* -- Using Modernizr to check if the "required" and "placeholder" attributes are supported -- */

	if (!Modernizr.input.placeholder) {
		$('.email').val('Input your e-mail address here...');
		$('.email').focus(function() {
			if($(this).val() == 'Input your e-mail address here...') {
				$(this).val('');
			}
		});
	}

	// for detecting if the browser is Safari
	var browser = navigator.userAgent.toLowerCase();

	if(!Modernizr.input.required || (browser.indexOf("safari") != -1 && browser.indexOf("chrome") == -1)) {
		$('form').submit(function() {
			$('.popup').remove();
			if(!$('.email').val() || $('.email').val() == 'Input your e-mail address here...') {
				$('form').append('<p class="popup">Please fill out this field.</p>');
				$('.email').focus();
				return false;
			}
		});
		$('.email').keydown(function() {
			$('.popup').remove();
		});
		$('.email').blur(function() {
			$('.popup').remove();
		});
	}


});
