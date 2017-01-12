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
			'duration': 300
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
	var scene_list = '.main-banner-view, .product-wrap, .banner-wrap, .main-link-wrap, .main-information-wrap, .footer'.split(', ');
	// console.log(scene_list);
	scene_list.forEach(function(trigger_el_selector, idx){ // forEach는 ES6이다.
		// console.log(trigger_el_selector);

		// Scene 객체 설정
		var scene = new SM.Scene({
			'triggerElement': trigger_el_selector, // '씬(Scene)을 설정할 컨테이너 요소 선택자'
			'triggerHook': 0,  // 0.5가 기본값이고 중간이다.
			// 'duration': 300, // 씬이 끝나는 기간
			'offset': -600,
			// 'reverse': false,
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		// .addIndicators({
		// 	'name': trigger_el_selector
		// }) // 디버깅
		.addTo(ctrl);
	});


})(this, this.jQuery, this.ScrollMagic);
},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInRvZ2dsZUdyaWQoJy5jb250YWluZXInLCAnZ3JpZCcpO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCAkLCBTTSl7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBTY3JvbGxNYWdpY1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdC8vIFNjcm9sbE1hZ2lj7J2AIOq3uOuDpSDtlajsiJjsl5Ag67aI6rO8IOuEpOyehOyKpO2OmOydtOyKpCDqsJ3ssrRcblx0Ly8gY29uc29sZS5sb2coU00pOyBcblxuXHQvLyBDb250cm9sbGVyIOqwneyytCDshKTsoJUo7LSI6riw7ZmUKVxuXHR2YXIgY3RybCA9IG5ldyBTTS5Db250cm9sbGVyKCk7IFxuXHQvLyBjb25zb2xlLmxvZyhjdHJsKVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIO2VgCDsu6jtirjroaQo7KCc7Ja0KVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdFx0dmFyIGJnX3BpbiA9IG5ldyBTTS5TY2VuZSh7XG5cdFx0XHQndHJpZ2dlckVsZW1lbnQnOiAnLmJnJyxcblx0XHRcdCd0cmlnZ2VySG9vayc6IDAsXG5cdFx0XHQnZHVyYXRpb24nOiAzMDBcblx0XHR9KTtcblx0XHRiZ19waW5cblx0XHRcdC5zZXRQaW4oJy5iZycseydwdXNoRm9sbG93ZXJzJzogZmFsc2V9KVxuXHRcdFx0Ly8gLmFkZEluZGljYXRvcnMoe1xuXHRcdFx0Ly8gXHQnbmFtZSc6ICdiZyBwaW4nLFxuXHRcdFx0Ly8gXHQnY29sb3JTdGFydCc6ICcjZmU0OTQwJyxcblx0XHRcdC8vIFx0J2NvbG9yRW5kJzogJyMzNmE4ZmUnXG5cdFx0XHQvLyB9KSAvLyDrlJTrsoTquYVcblx0XHRcdC5hZGRUbyhjdHJsKVxuXHRcdFx0Lm9uKCdlbmQnLCBmdW5jdGlvbihldnQpe1xuXHRcdFx0XHR0aGlzLnJlbW92ZVBpbih0cnVlKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKClcblx0XHRcdH0pO1xuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIO2MqOuftOufreyKpCDslKwg7Luo7Yq466GkKOygnOyWtCkg67CY67O1IOq1rOusuFxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8g67Cw7Je07J2AIGxlbmd0aOqwkuydhCDqsIDsp4Dqs6Ag7J6I6riw65WM66y47JeQIOuwmOuztSDsiJztmZjsspjrpqzqtazrrLjsnYQg7ZWgIOyImCDsnojri6QuXG5cdC8vIHZhciBzY2VuZV9saXN0ID0gJy5iZywgLnByb2R1Y3Qtd3JhcCwgLmJhbm5lci13cmFwLCAubWFpbi1saW5rLXdyYXAsIC5tYWluLWluZm9ybWF0aW9uLXdyYXAsIC5mb290ZXInLnNwbGl0KCcsICcpO1xuXHR2YXIgc2NlbmVfbGlzdCA9ICcubWFpbi1iYW5uZXItdmlldywgLnByb2R1Y3Qtd3JhcCwgLmJhbm5lci13cmFwLCAubWFpbi1saW5rLXdyYXAsIC5tYWluLWluZm9ybWF0aW9uLXdyYXAsIC5mb290ZXInLnNwbGl0KCcsICcpO1xuXHQvLyBjb25zb2xlLmxvZyhzY2VuZV9saXN0KTtcblx0c2NlbmVfbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHRyaWdnZXJfZWxfc2VsZWN0b3IsIGlkeCl7IC8vIGZvckVhY2jripQgRVM27J2064ukLlxuXHRcdC8vIGNvbnNvbGUubG9nKHRyaWdnZXJfZWxfc2VsZWN0b3IpO1xuXG5cdFx0Ly8gU2NlbmUg6rCd7LK0IOyEpOyglVxuXHRcdHZhciBzY2VuZSA9IG5ldyBTTS5TY2VuZSh7XG5cdFx0XHQndHJpZ2dlckVsZW1lbnQnOiB0cmlnZ2VyX2VsX3NlbGVjdG9yLCAvLyAn7JSsKFNjZW5lKeydhCDshKTsoJXtlaAg7Luo7YWM7J2064SIIOyalOyGjCDshKDtg53snpAnXG5cdFx0XHQndHJpZ2dlckhvb2snOiAwLCAgLy8gMC416rCAIOq4sOuzuOqwkuydtOqzoCDspJHqsITsnbTri6QuXG5cdFx0XHQvLyAnZHVyYXRpb24nOiAzMDAsIC8vIOyUrOydtCDrgZ3rgpjripQg6riw6rCEXG5cdFx0XHQnb2Zmc2V0JzogLTYwMCxcblx0XHRcdC8vICdyZXZlcnNlJzogZmFsc2UsXG5cdFx0fSlcblx0XHQuc2V0Q2xhc3NUb2dnbGUodHJpZ2dlcl9lbF9zZWxlY3RvciwgJ2ZhZGUtaW4nKVxuXHRcdC8vIC5hZGRJbmRpY2F0b3JzKHtcblx0XHQvLyBcdCduYW1lJzogdHJpZ2dlcl9lbF9zZWxlY3RvclxuXHRcdC8vIH0pIC8vIOuUlOuyhOq5hVxuXHRcdC5hZGRUbyhjdHJsKTtcblx0fSk7XG5cblxufSkodGhpcywgdGhpcy5qUXVlcnksIHRoaXMuU2Nyb2xsTWFnaWMpOyJdfQ==