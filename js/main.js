(function ($) {
	'use strict'

	$('.review-text-2 button').on('click',function(){
		$(this).hide();
		$('.review-text-2 p span').fadeIn();
		$('.review-text-2 p i').fadeIn();
	});

	$('.review-text-2 p i').on('click',function(){
		$(this).fadeOut();
		$('.review-text-2 p span').fadeOut();
		$('.review-text-2 button').show(800);
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    autoplay:true,
	    autoplayTimeout:1800,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	})

	/*blog one*/
	$('.blog-info .blog-text-button button.blog-view-btn1 ').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-1').slideDown();
		$('.blog-info .blog-text p span i.fa-1').show();
		$('.blog-info .blog-text p span.span-2').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn2 ').show();
		$('.blog-info .blog-text p span.span-3').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn3 ').show();
	});
	$('.blog-info .blog-text p span i.fa-1').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-1').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn1 ').show();
	})
	/*blog 2*/
	$('.blog-info .blog-text-button button.blog-view-btn2 ').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-2').slideDown();
		$('.blog-info .blog-text p span i.fa-2').show();
		$('.blog-info .blog-text p span.span-1').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn1 ').show();
		$('.blog-info .blog-text p span.span-3').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn3 ').show();
	});
	$('.blog-info .blog-text p span i.fa-2').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-2').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn2 ').show();
	})
	/*blog 3*/
	$('.blog-info .blog-text-button button.blog-view-btn3 ').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-3').slideDown();
		$('.blog-info .blog-text p span i.fa-3').show();
		$('.blog-info .blog-text p span.span-2').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn2 ').show();
		$('.blog-info .blog-text p span.span-1').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn1 ').show();
	});
	$('.blog-info .blog-text p span i.fa-3').on('click',function(){
		$(this).hide();
		$('.blog-info .blog-text p span.span-3').slideUp();
		$('.blog-info .blog-text-button button.blog-view-btn3 ').show();
	})

}) (jQuery);