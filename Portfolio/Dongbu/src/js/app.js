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

	/**
	 * ----------------------------------------------------------
	 * 핀 컨트롤(제어)
	 * ---------------------------------------------------------- */
		var bg_pin = new SM.Scene({
			'triggerElement': '.bg',
			'triggerHook': 0,
			'duration': 300,
			'reverse': false
		});

		bg_pin
			.setPin('.bg',{'pushFollowers': false})
			// .addIndicators({
			// 	'name': 'bg pin',
			// 	'colorStart': '#fe4940',
			// 	'colorEnd': '#36a8fe'
			// }) // 디버깅
			.addTo(ctrl)
			.on('end', function(evt){
				this.removePin(true);
			})
			.on('progress', function(e){
				console.log()
			});

	/**
	 * ----------------------------------------------------------
	 * 패럴럭스 씬 컨트롤(제어) 반복 구문
	 * ---------------------------------------------------------- */


	// 배열은 length값을 가지고 있기때문에 반복 순환처리구문을 할 수 있다.
	// var scene_list = '.bg, .product-wrap, .banner-wrap, .main-link-wrap, .main-information-wrap, .footer'.split(', ');
	var scene_list = '.main-banner-view, .product-wrap, .banner-wrap, .main-link-wrap, .main-information-wrap'.split(', ');
	// console.log(scene_list);
	scene_list.forEach(function(trigger_el_selector, idx){ // forEach는 ES6이다.
		// console.log(trigger_el_selector);

		// Scene 객체 설정
		var scene = new SM.Scene({
			'triggerElement': trigger_el_selector, // '씬(Scene)을 설정할 컨테이너 요소 선택자'
			'triggerHook': 0,  // 0.5가 기본값이고 중간이다.
			// 'duration': 300, // 씬이 끝나는 기간
			'offset': -600,
			'reverse': false,
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		// .addIndicators({
		// 	'name': trigger_el_selector
		// }) // 디버깅
		.addTo(ctrl); // .addTo(컨트롤러);
	});


})(this, this.jQuery, this.ScrollMagic);