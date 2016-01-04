'use strict';

// imageboxes on homepage
function imgBox (){
	var $imgBox = $('.img-box');
	var $imgHover = $('.img-box__hover');
	var $imgContent = $('.img-box__content');

	$imgBox.click(function(e){
		e.preventDefult();
	});

	$imgBox.stop().hover(function() {
		var $this = $(this);
		$this.find($imgHover).removeClass('fadeOutLeftBig').addClass('fadeInLeft');
		$this.find($imgContent).addClass('img-box__scaleIt');
	}, function() {
		var $this = $(this);
		$this.find($imgHover).removeClass('fadeInLeft').addClass('fadeOutLeftBig');
		$this.find($imgContent).removeClass('img-box__scaleIt');
	});	
};

// tab and accordion functionality
function tabAccordion (){
	var $tab = $('.tabAccordion');
	var	$openTab = $('.tabAccordion__item .is-open');

	$('.tabAccordion__content').css({'display' : 'none'});
	$('.tabAccordion__item-link').first()
	.addClass('active')
	.next()
	.addClass('is-open')
	.show();
	        
	$tab.on('click', '.tabAccordion__item-link', function(e) {

		e.preventDefault();

	  if (!$(this).hasClass('active')) {
	    $('.tabAccordion__item .is-open').removeClass('is-open').hide();
	    $(this).next().toggleClass('is-open').toggle();
	      
	    $tab.find('.active').removeClass('active');
	    $(this).addClass('active');
	  } else {
	    $('.tabAccordion__item .is-open').removeClass('is-open').hide();
	    $(this).removeClass('active');
	  }
	});
};

// progress bar
function progress (){
	$('progress').each(function() {
	    var max = $(this).val();
	    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'linear'});
	});
};

// works portfolio
function portfolio (){
	$('.portfolio-list__item-link').click(function(e){
		e.preventDefault();
		var portfolioLink = $(this).attr('href');
		$('#portfolioContent').hide().load(portfolioLink).fadeIn('slow', function (){
			$('html, body').animate({scrollTop: $('#portfolioContent').offset().top}, 1000);
		});
		return false;	
	});
};