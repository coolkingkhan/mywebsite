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
		$this.find('.img-box__hover').removeClass("fadeOutLeftBig").addClass("fadeInLeft");
		$this.find('.img-box__content').addClass('img-box__scaleIt');
	}, function() {
		var $this = $(this);
		$this.find('.img-box__hover').removeClass("fadeInLeft").addClass("fadeOutLeftBig");
		$this.find('.img-box__content').removeClass('img-box__scaleIt');
	});	
};

