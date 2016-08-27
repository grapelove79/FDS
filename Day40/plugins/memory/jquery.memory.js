/*! jquery.memory.js © yamoo9.net, 2016 */

// 팩토리 함수 $(...) 를 안쓰려고 메모리js를 만든 것이다.
(function(globla, $){
  'use strict';

  // $.fn['method'] // 인스턴스 메소드
  // $['method']    // 스태틱 메소드 (유틸리티 메소드)

  if (!$.memory) {
    $.memory = function(dom_el) {
      if ( dom_el.nodeType !== 1 ) {
        throw new Error('DOM 객체를 전달해야 합니다.');
      }
      // 전달 받은 dom_el는 $this라고 하는 데이터가 메모리 되어 있는가?
      // dom_el에 어떤 데이터를 저장하는 것이고, 그리고 그 데이터에 $this는 키 값으로 를 저장한 것, data는 저장하는 주머니 같은 것
      if ( !$.data(dom_el, '$this') ) {  
        $.data(dom_el, '$this', $(dom_el));  //$(dom_el)는 제이쿼리화된 객체를 $this에 저장하고, 그것을 반환한다.
      }
      return $.data(dom_el, '$this');
    };
    // 별칭
    $.$ = $.memory;  // 스태틱(정적) 메소드
  }

})(this, this.jQuery);