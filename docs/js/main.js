 $(document).ready(function(){
 	$('.hero__slider').owlCarousel({
 		// animateOut: 'animate__fadeOutDown',
 		// animateIn: 'animate__fadeInDown',
 		// animateOut: 'fadeOut',
 		smartSpeed:450,
 		items: 1,
 		nav: true,
 		dots: true,
 		navText: ["<img src=\"img/slider__arrow__left.svg\">","<img src=\"img/slider__arrow__right.svg\" >"],
 		loop: true,
 		
 	});

 	$('.news__slider').owlCarousel({
 		smartSpeed:450,
 		items: 3,
 		nav: true,
 		dots: true,
 		margin: 20,
 		center: true,
 		navText: ["<img src=\"img/news__slider__arrow__left.svg\">","<img src=\"img/news__slider__arrow__right.svg\" >"],
 		loop: true,
 		responsive: {
 			0: {
 				items: 1,
 			},
 			768: {
 				items: 2,
 			},
 			1000: {
 				items: 3,
 			}
 		}
 	});

 	$('[data-mask="phone"]').each(function(i, el){
 	       $(el).mask("+7 (999) 999-99-99");
 	});

 	//================Проверка чекбокса=======================
 	    $('form').each(function(i, el){
 	        var checkbox = $(el).find('input[type="checkbox"]');
 	        var button = $(el).find('button');
 	        if( $(checkbox).prop("checked") === true ) {
 	            $(button).prop('disabled', false);
 	        }else {
 	            $(button).prop('disabled', true);
 	        }
 	        $(checkbox).change(function(){
 	            if( $(this).prop("checked") === true ) {
 	                $(button).prop('disabled', false);
 	            }else {
 	                $(button).prop('disabled', true);
 	            }
 	        });
 	    });
 	    //================END Проверка чекбокса=======================



 	     function rgb2hsl(HTMLcolor) {
 	     	r = parseInt(HTMLcolor.substring(0,2),16) / 255;
 	     	g = parseInt(HTMLcolor.substring(2,4),16) / 255;
 	     	b = parseInt(HTMLcolor.substring(4,6),16) / 255;
 	     	var max = Math.max(r, g, b), min = Math.min(r, g, b);
 	     	var h, s, l = (max + min) / 2;
 	     	if (max == min) {
 	     		h = s = 0;
 	     	} else {
 	     		var d = max - min;
 	     		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
 	     		switch (max) {
 	     			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
 	     			case g: h = (b - r) / d + 2; break;
 	     			case b: h = (r - g) / d + 4; break;
 	     		}
 	     		h /= 6;
 	     	}
 	     	return [h, s, l]; // H - цветовой тон, S - насыщенность, L - светлота
 	     }

 	     function changeColor (HTMLcolor) {
 	     	e = rgb2hsl(HTMLcolor);
 	     	if ((e[0]<0.55 && e[2]>=0.5) || (e[0]>=0.55 && e[2]>=0.75)) {
 	     		fc = '#000000'; // черный
 	     	} else {
 	     		fc = '#FFFFFF'; // белый
 	     	}
 	     	// далее меняем цвет, где это необходимо
 	     }

 	    var color =  rgb2hsl('E21C2B');

 	    console.log(color);


 	    $(window).scroll(function() {
 	    	//==============Смена цвета гамбургера==============//
 	    	var scrollTop = $(window).scrollTop();

 	    	if($('.team').offset().top < scrollTop + 80) {
 	    		$('.hero__hamburgerblock').addClass('black');
 	    	}else {
 	    		$('.hero__hamburgerblock').removeClass('black');
 	    	}

 	    	if($('.formblock').offset().top < scrollTop + 80) {
 	    		$('.hero__hamburgerblock').removeClass('black');
 	    	}

 	    	// if($('.formblock__form').offset().top < scrollTop + 80) {
 	    	// 	$('.hero__hamburgerblock').addClass('black');
 	    	// }
 	    	//==============Смена цвета гамбургера==============//
 	    });

 	    $('.head__hamburger').click(function(){
 	    	$('.nav').toggleClass('active');
 	    	$('.hero__hamburgerblock').toggleClass('active');
 	    });

 });






