
// 함수를 작성하는 이유
// 재사용할 것 같은 코드들....
// 매번 짜는 것은 비 효율적이다 보니
// 능률적으로 코드를 처리하기 위해 코드 묶음을
// 재사용/확장할 수 있도록 처리.
// 유사 배열을 배열화
function makeArray(data) {
  // 전달된 객체는 배열 또는 유사 배열인가?
  var check_data = isType(data), result_arr = [], len = data.length;
  // 실제 배열
  if (check_data === 'array') {
    return data;
  }
  // 유사 배열
  if ( len && check_data !== 'string' ) {
    while( len-- ) {
      result_arr.push( data[len] );
    }
  }
  return result_arr.reverse();
}


// function convertArray( data ){
//     if ( Array.from ) {
//         return Array.from( data );
//     } else {
//         return Array.prototype.slice.call(data);
//     }
// }

// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결 방법
// 클로저는 내부에서 한번만 실행해서(조건을 확인해서) 함수 하나만 반환한다. 
// if문의 반복되는 조건을 막으려고.그래서 if문을 쓸 필요가 없다.
// 함수는 정의하고 호출하는 과정이 필요하다. 
// convertArray_wrapper()는 조건확인에 따라서 실행만되는 함수
// 클로저를 사용할 경우 변수는 두개 필요하다. 

function convertArray_wrapper() {
  // 내부에서 클로저 함수를 반환
  var closureFn;
  if ( Array.from ) {
    // Array.from이 지원되는가?
    closureFn = function(data) { // data는 매개변수 
      return Array.from(data); // 클로저 함수 
    };
  } else {
    // 지원되지 않는가?
    closureFn = function(data) {
      return Array.prototype.slice.call(data);
    }
  }
  return closureFn;
}

var convertArray = convertArray_wrapper();
//컨번트 어레이레퍼는 컨번트어레이를 반환하는 값을 받겠다. 
//이 컨번트 어레이레퍼는 코드가  한번 실행된다. 실행되는 시점에서 에레이 프롬이 지원되는가? 아니면 지원되지 않는가? )

// convertArray= function(data) {
//  return Array.from(data);
//}; //최종적으로 담긴 값.. convertArray_wrapper()는  최신부라우저인지 아닌지 감시해서 할당하는 것이고 사라저서 이 함수는 사라진다. 


// 2. 약식(IIFE 패턴)을 사용하여 클로저 처리하는 문제 해결 방법
// 컨버트어레이를 조건 자체를 확인하고 바로 실행해버린다.
// 변수는 하나만 필요하다.
var convertArray = (function(){
	  // 신버전
  if (Array.from) { // Array.from 자바스크립트 메서드(배열화)
    return function(data) {
      return Array.from(data);
    }
    // 구형버전
  } else {
    return function(data) {
      return Array.prototype.slice.call(data);
    }
  }


})();