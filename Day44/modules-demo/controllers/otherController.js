(function(global, angular, jq){
  'use strict';

    ///////////////
    // as syntax //
    ///////////////
    // 2시 수업

    /**
     * ----------------------------------------------------------
     * 인라인 함수를 쓰는 방식과 함수를 밖으로 분리하는 방식이 있다.
     * ----------------------------------------------------------
     * 1. 인라인 함수를 쓰는 방식
     * ---------------------------------------------------------- */
     
  // angular.module('ngApp').controller('otherCtrl', function() { // 수십개로 쪼개진 파일에서는 유용하다.
  //   // 컨트롤러 참조 변수(this는 window를 가르키기 때문에 not initialization이 나온다. 그래서 컨트롤러 참조 변수를 만든다.)
  //   // this를 that에 참조한다.
  //   var that = this;
  //   that.init_value = null;
  //   that.trigger    = trigger;
  //   function trigger() {
  //     // console.log(that);
  //     // that에 참조된 컨트롤러 객체를 사용하기 때문에
  //     // 함수를 누가 호출하든 this가 가진 문제점을 해결할 수 있다.
  //     console.log(that);
  //     if ( jq.type(that.init_value) === 'null' ) {
  //       that.init_value = 'otherController';
  //     } else {
  //       that.init_value = 'not initialization.';
  //     }
  //   }
  //   global.setTimeout(trigger, 3000);
  // });



   /**
     * ----------------------------------------------------------
     * 인라인 함수를 쓰는 방식과 함수를 밖으로 분리하는 방식이 있다.
     * ----------------------------------------------------------
     * 2. 함수를 밖으로 분리하는 방식
     * ---------------------------------------------------------- */

    // 모듈 패턴 내의 지역 함수
    // 앵귤러의 컨트롤러 설정.
    // 함수를 밖으로 분리. 위함수를 아래 함수로 분리한다.
  angular.module('ngApp').controller('otherCtrl', function() { // 수십개로 쪼개진 파일에서는 유용하다.
    // 컨트롤러 참조 변수(this는 window를 가르키기 때문에 not initialization이 나온다. 그래서 컨트롤러 참조 변수를 만든다.)
    // this를 that에 참조한다.
    var that = this;
    that.init_value = null;
    that.trigger    = trigger;
    function trigger() {
      // console.log(that);
      // that에 참조된 컨트롤러 객체를 사용하기 때문에
      // 함수를 누가 호출하든 this가 가진 문제점을 해결할 수 있다.
      console.log(that);
      if ( jq.type(that.init_value) === 'null' ) {
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    }
    global.setTimeout(trigger, 3000);
  });


})(this, this.angular, this.jQuery);

