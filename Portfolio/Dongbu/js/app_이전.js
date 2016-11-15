toggleGrid('.container', 'grid');

(function(global, $, SM){
	'use strict';

	/**
	 * ----------------------------------------------------------
	 * ScrollMagic
	 * ---------------------------------------------------------- */
	// ScrollMagic은 그냥 함수에 불과 네임스페이스 객체
	// console.log(SM); 

	// Controller 객체 설정(초기화)
	var ctrl = new SM.Controller(); 
	// console.log(ctrl)

	// Scene 객체 설정
	var carousel_scene = new SM.Scene({
		'triggerElement': '.bg', // '씬(Scene)을 설정할 컨테이너 요소 선택자'
		'triggerHook': 0,  // 0.5가 기본값이고 중간이다.
		'duration': 300,
		// 'reverse': false
	});
	// console.log(carousel_scene);
	carousel_scene
		.setClassToggle('.bg', 'fade-in')
		.addIndicators({
			'name': 'bg',
			'indent': 10,
			'colorStart': '#FF00FF',
			'colorEnd': '#7F007F',
			'colorTrigger': '#00FF00'
		}) // 디버깅
		.addTo(ctrl); // .addTo(컨트롤러);

	var product_wrap_scene = new SM.Scene({
		'triggerElement': '.product-wrap', // '씬(Scene)을 설정할 컨테이너 요소 선택자'
		'triggerHook': 0,  // 0.5가 기본값이고 중간이다.
		'offset': -350,
		// 'reverse': false,
	});
	// console.log(carousel_scene);
	product_wrap_scene
		.setClassToggle('.product-wrap', 'fade-in')
		.addIndicators({
			'name': 'product-wrap',
			'colorStart': '#00FFFF'
		}) // 디버깅
		.addTo(ctrl); // .addTo(컨트롤러);

})(this, this.jQuery, this.ScrollMagic);