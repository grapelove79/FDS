	// [미션]
	// 가공된 형태의 사용자 정의 객체
	// 여러분이 정의할 사용자 정의 객체는 로컬스토리지에 제어에 유용한 메소드를 포함.
	// 데이터 가져오기/ 저장하기/ 지우기/ 모두지우기
	// 싱글톤 객체: 하나의 인스턴스만을 생성하고, 사용할 수 있다. <->(객체가 여러개일경우 생성자롤 만들어야 한다.)
	// 상태변수 만들기..

// 자바스크립트 모듈 패턴
(function(global, $){
  'use strict';
  // jQuery 네임스페이스 객체(함수)
  // 함수 객체의 속성으로 dataManger 객체를 설정
  // jQuery 유틸리티 메소드라 명한다.
  var dataManager = {
    // 'support': function([feature]) { 로컬스토리지 또는 JSON 지원하는지 유무를 객체로 반환 }
    'support': (function(){  // support는 ture또는 flase 반환한다.
      var json = !!global.JSON, localstorage = !!global.localStorage;
      return function(feature) {   //feature는 기능이다. 
        if ( !feature ) {
          return {
            'json': json,
            'localstorage': localstorage
          };
        }
        feature = feature.toLowerCase();
        if ( feature === 'json' ) { return json; }
        if ( feature === 'localstorage' ) { return localstorage; }
      }
    })(),
    // 'get': function(key) { return 로컬스토리지로부터데이터를 반환(문자->객체) },
    'get': function(key) {
      if (!key || $.type(key) !== 'string' || !this.support().json || this.support('localstorage')) {}
      	// 제이손에 절달 되지 않는 다면,()빈괄호는 전달인자가 없는 것
      return global.JSON.parse( global.localStorage.getItem(key) );
    },
    // 'set': function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장 },
    'set': function(key, value) {
      if ( !key || !value || $.type(key) !== 'string' || !this.support().json || this.support('localstorage') ) {}
        global.localStorage.setItem(  key, global.JSON.stringify(value));
    },
    // 'del': function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
    'del': function(key) { global.localStorage.removeItem(key); },
    // 'clear': function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
    'clear': function() { global.localStorage.clear(); }
  };

  $.dataManager = dataManager;

})(this, this.jQuery ); // 초기 네임스페이스를 만든다.

//-----------------------------------------------------------------------

// (function(global, $) {
// 	'use strict';

// })(this, (this.yamoo9, this.yamoo9 || {}) );// 초기 네임스페이스를 만든다.

//-----------------------------------------------------------------------

//(function(global, $) {
//	'use strict';
//	global.yamoo9 = $;
// })(this, this.jQuery, this.noConflict(true) );// 제이쿼리 티를 내고 싶지 않을때 
