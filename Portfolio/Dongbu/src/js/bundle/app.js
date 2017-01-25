(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
			'reverse': false
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		// .addIndicators({
		// 	'name': trigger_el_selector
		// }) // 디버깅
		.addTo(ctrl);
	});


})(this, this.jQuery, this.ScrollMagic);
},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidG9nZ2xlR3JpZCgnLmNvbnRhaW5lcicsICdncmlkJyk7XG5cbihmdW5jdGlvbihnbG9iYWwsICQsIFNNKXtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIFNjcm9sbE1hZ2ljXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0Ly8gU2Nyb2xsTWFnaWPsnYAg6re464OlIO2VqOyImOyXkCDrtojqs7wg64Sk7J6E7Iqk7Y6Y7J207IqkIOqwneyytFxuXHQvLyBjb25zb2xlLmxvZyhTTSk7IFxuXG5cdC8vIENvbnRyb2xsZXIg6rCd7LK0IOyEpOyglSjstIjquLDtmZQpXG5cdHZhciBjdHJsID0gbmV3IFNNLkNvbnRyb2xsZXIoKTsgXG5cdC8vIGNvbnNvbGUubG9nKGN0cmwpXG5cblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICog7ZWAIOy7qO2KuOuhpCjsoJzslrQpXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0XHR2YXIgYmdfcGluID0gbmV3IFNNLlNjZW5lKHtcblx0XHRcdCd0cmlnZ2VyRWxlbWVudCc6ICcuYmcnLFxuXHRcdFx0J3RyaWdnZXJIb29rJzogMCxcblx0XHRcdCdkdXJhdGlvbic6IDMwMCxcblx0XHRcdCdyZXZlcnNlJzogZmFsc2UgXG5cdFx0fSk7XG5cdFx0YmdfcGluXG5cdFx0XHQuc2V0UGluKCcuYmcnLHsncHVzaEZvbGxvd2Vycyc6IGZhbHNlfSlcblx0XHRcdC8vIC5hZGRJbmRpY2F0b3JzKHtcblx0XHRcdC8vIFx0J25hbWUnOiAnYmcgcGluJyxcblx0XHRcdC8vIFx0J2NvbG9yU3RhcnQnOiAnI2ZlNDk0MCcsXG5cdFx0XHQvLyBcdCdjb2xvckVuZCc6ICcjMzZhOGZlJ1xuXHRcdFx0Ly8gfSkgLy8g65SU67KE6rmFXG5cdFx0XHQuYWRkVG8oY3RybClcblx0XHRcdC5vbignZW5kJywgZnVuY3Rpb24oZXZ0KXtcblx0XHRcdFx0dGhpcy5yZW1vdmVQaW4odHJ1ZSk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygpXG5cdFx0XHR9KTtcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiDtjKjrn7Trn63siqQg7JSsIOy7qO2KuOuhpCjsoJzslrQpIOuwmOuztSDqtazrrLhcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIOuwsOyXtOydgCBsZW5ndGjqsJLsnYQg6rCA7KeA6rOgIOyeiOq4sOuVjOusuOyXkCDrsJjrs7Ug7Iic7ZmY7LKY66as6rWs66y47J2EIO2VoCDsiJgg7J6I64ukLlxuXHQvLyB2YXIgc2NlbmVfbGlzdCA9ICcuYmcsIC5wcm9kdWN0LXdyYXAsIC5iYW5uZXItd3JhcCwgLm1haW4tbGluay13cmFwLCAubWFpbi1pbmZvcm1hdGlvbi13cmFwLCAuZm9vdGVyJy5zcGxpdCgnLCAnKTtcblx0dmFyIHNjZW5lX2xpc3QgPSAnLm1haW4tYmFubmVyLXZpZXcsIC5wcm9kdWN0LXdyYXAsIC5iYW5uZXItd3JhcCwgLm1haW4tbGluay13cmFwLCAubWFpbi1pbmZvcm1hdGlvbi13cmFwJy5zcGxpdCgnLCAnKTtcblx0Ly8gY29uc29sZS5sb2coc2NlbmVfbGlzdCk7XG5cdHNjZW5lX2xpc3QuZm9yRWFjaChmdW5jdGlvbih0cmlnZ2VyX2VsX3NlbGVjdG9yLCBpZHgpeyAvLyBmb3JFYWNo64qUIEVTNuydtOuLpC5cblx0XHQvLyBjb25zb2xlLmxvZyh0cmlnZ2VyX2VsX3NlbGVjdG9yKTtcblxuXHRcdC8vIFNjZW5lIOqwneyytCDshKTsoJVcblx0XHR2YXIgc2NlbmUgPSBuZXcgU00uU2NlbmUoe1xuXHRcdFx0J3RyaWdnZXJFbGVtZW50JzogdHJpZ2dlcl9lbF9zZWxlY3RvciwgLy8gJ+yUrChTY2VuZSnsnYQg7ISk7KCV7ZWgIOy7qO2FjOydtOuEiCDsmpTshowg7ISg7YOd7J6QJ1xuXHRcdFx0J3RyaWdnZXJIb29rJzogMCwgIC8vIDAuNeqwgCDquLDrs7jqsJLsnbTqs6Ag7KSR6rCE7J2064ukLlxuXHRcdFx0Ly8gJ2R1cmF0aW9uJzogMzAwLCAvLyDslKzsnbQg64Gd64KY64qUIOq4sOqwhFxuXHRcdFx0J29mZnNldCc6IC02MDAsXG5cdFx0XHQncmV2ZXJzZSc6IGZhbHNlXG5cdFx0fSlcblx0XHQuc2V0Q2xhc3NUb2dnbGUodHJpZ2dlcl9lbF9zZWxlY3RvciwgJ2ZhZGUtaW4nKVxuXHRcdC8vIC5hZGRJbmRpY2F0b3JzKHtcblx0XHQvLyBcdCduYW1lJzogdHJpZ2dlcl9lbF9zZWxlY3RvclxuXHRcdC8vIH0pIC8vIOuUlOuyhOq5hVxuXHRcdC5hZGRUbyhjdHJsKTtcblx0fSk7XG5cblxufSkodGhpcywgdGhpcy5qUXVlcnksIHRoaXMuU2Nyb2xsTWFnaWMpOyJdfQ==