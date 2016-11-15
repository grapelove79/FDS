(function(global, angular, jq){
  'use strict';


  /**
     * ----------------------------------------------------------
     * 인라인 함수를 쓰는 방식과 함수를 밖으로 분리하는 방식이 있다.
     * ----------------------------------------------------------
     * 1. 인라인 함수를 쓰는 방식
     * ---------------------------------------------------------- */

  // angular 모듈 객체의 controller() 메소드를 사용하여 컨트롤러 정의
  angular.module('ngApp').controller('ngController', function($scope){
    /////////////
    // Angular //
    /////////////
    // 지역 변수 설정
    var content_text = 'AngularJS Application is Awesome!!';
    // $scope 객체의 속성/메소드 정의
    $scope.content = '';
    $scope.setContent = function() {
      // console.log(this === $scope);
      this.content = content_text;
    };
    ////////////
    // jQuery //
    ////////////
    var ngTHeadline = jq('.ng-template-headline');
    ////////
    // JS //
    ////////
    content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
    ngTHeadline.text( content_text );
  });

  /**
     * ----------------------------------------------------------
     * 인라인 함수를 쓰는 방식과 함수를 밖으로 분리하는 방식이 있다.
     * ----------------------------------------------------------
     * 2. 함수를 밖으로 분리하는 방식
     * ---------------------------------------------------------- */


})(this, this.angular, this.jQuery);