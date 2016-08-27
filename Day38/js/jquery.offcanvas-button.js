(function(global, $){
	'use strict';

	function init() {  // head에서 불러왔기 때문에 init()함수를 씀. body에서 불러올때 필요없음.
	 	// 오픈캔버스 메뉴 이벤트 핸들링

	 	// 오픈캔버스 메뉴 래퍼 선택(참조)
		var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
		// 오픈캔버스 토글 메뉴 버튼 선택(참조)
		var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button'); // var $toggle_btn = $('.toggle-menu-button', $offcanvas_wrapper); 와 찾는 방법은 같다. 
		// 오픈캔버스 메뉴 래퍼에서 탐색한 버튼에 클릭 이벤트 핸들링.
		$toggle_btn.on('click', toggleOffCanvasMenu);
		// console.log($toggle_btn);
	}

	// 이벤트 핸들러(함수)
	function toggleOffCanvasMenu() {
		// console.log('this', nodeType);  
		// this가 참조하는 <button> 객체를 jQuery 객체화 시키는 방법은
		// jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
		// 생성된 jQuery 객체는 jQuery.프로토타입 객체가 가진 능력을 맘껏 사용 가능하다.
		var $this = $(this);  // 이와 같은 행위는 성능을 저하시킨다. (아이언맨)
		// console.log($this.jquery); // jQuery 버전 출력 

		var $wrapper = $this.parent();  //parent()를 사용해서 부모한테 접근 가능하다.
		// console.log($wrapper[0]); // 제이쿼리를 벗겼을 경우
		// console.log($wrapper, $wrapper[0]); // 제이쿼리를 벗겨내지 않았을 경우 
		// 부모요소 $wrapper의 left 속성을 이동
		$wrapper.animate({
			'left':0
		});
	}

	$(init); //(document).ready(init);

})(this, this.jQuery);