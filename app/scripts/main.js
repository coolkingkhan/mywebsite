'use strict';

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

