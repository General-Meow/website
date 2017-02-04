jQuery(document).ready(function(){
			
	//header click events
	$("nav .home").click(function(){
		$.scrollTo($('h2.home'), 800);
	});
	
	$("nav .cv").click(function(){
		$.scrollTo($('h2.cv'), 800);
	});
	
	$("nav .gallery").click(function(){
		$.scrollTo($('h2.gallery'), 800);
	});
	
	$("nav .aboutme").click(function(){
		$.scrollTo($('h2.aboutme'), 800);
	});
	
	$("nav .projects").click(function(){
		$.scrollTo($('h2.projects'), 800);
	});
	
	$("nav .contact").click(function(){
		$.scrollTo($('h2.contact'), 800);
	});
	
	$('floatingTop a').click(function(){
		$.scrollTo($('header h1'), 800);
	});
	
//	$('div.qrcode').hide();
	$('div.qrcode.facebook').removeClass("ophidden").addClass("opshow");

	// toggle the social media qr codes
//	$('span.logo').bind('hover', function() {
//		$('div.qrcode').hide();
//		var img = $(this).attr('title');
//		console.log("img: " + img);
//		if(img != ''){
//			$('div.qrcode.'+img).first().fadeIn();
//		}
//	});

	$('span.logo').hover( 
		function() {
			
			var img = $(this).attr('title');
			if(img != ''){
				$('div.qrcode.'+img).first().removeClass("ophidden").addClass("opshow");
			}
			if(img != 'facebook')
			{
				$('div.qrcode.facebook').removeClass("opshow").addClass("ophidden");
			}
		},
		function() {
			
			var img = $(this).attr('title');
			if(img != ''){
				$('div.qrcode.'+img).first().removeClass("opshow").addClass("ophidden");
			}
			$('div.qrcode.facebook').removeClass("ophidden").addClass("opshow");
	});

	
	//move floating top to window 
	$(window).resize(function(){
		var topPlacement = $(window).height() / 2;
		$('div.floatingTop').css('top', topPlacement);
	});


	//google analytics
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36352148-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

});
