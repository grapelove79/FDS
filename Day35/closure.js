// .demo-navigation선택합니다.
// 내부에서 a요소를 모두 수집합니다.
// 수집된 a요소를 사요자가 클릭하면 
// 클릭된 a요소의 수집될 당시의 
// 인덱스 넘버를 콘솔에 기록합니다.
// 클로저를 쓰면 외부에 전역변수를 만들 필요가 없다.


var demo_nav = query('.demo-navigation');
var demo_nav_links = queryAll('a', demo_nav);
var i = 0, l=demo_nav_links.length;

// 클로저 함수를 반환하는 래퍼 함수를 만드는 일은 많은 비용이 된다.
// function showMeIndexWrapper(index) { //내부에 있는 함수가 외부에 반환된다. 이것을 클로저이다. 반복문을 돌리때마다 메모리에 저장하고 싶다.
// 	function showMeIndex() {
		// index ???
// 		console.log('my index number is', index); //클로저 함수의 index는  매개변수 index를 참조(메모리)하기 때문에 사라지지 않고 기억이 된다. 
// 	}
// 	return showMeIndex; //
// }


// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// 모던 자바스크립트 패턴 중 이 패텅이 가장 많이 사용되는 패턴
// IIFE패턴(즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.
// 즉시실행함수는 클로저로 실행된다. 전역을 오염시키지 않는다. 외부와 단절된 이 코드만을 위한 공간. 코드를 충돌시키지 않는다. 선호하는 방식이다. 
// 이 자체가 표현식이다.
// +function(){}();
// ~function(){}();
// !function(){}();
//(function(){
  // 외부와 단절된 독립된 공간이 형성
  // 캡슐화
// }());
// (function(){})();

// var fn = function() {};

for(; i<l; i++) {
  // 클로저 사용 예시, showMeIndexWrapper(i);는 클로저 함수가 됐다라는 뜻.
  demo_nav_links[i].onclick = (function(count){
    return function() {
      console.log(count);
    };
  
  }(i));

var arr = [1, 2, 3, 4, 5, 6];

for(var i = 0; i = arr.length; i++){
  div.onclick = click;
}

function click(i){
  console.log(i)
}



// for(; i<l; i++) {
  // 클로저 사용 예시, showMeIndexWrapper(i);는 클로저 함수가 됐다라는 뜻.
  // demo_nav_links[i].onclick = (function(){
  //     console.log(i);
  //   };
  // };


  // demo_nav_links[i].onclick = showMeIndexWrapper(i); //showMeIndex()가 onclick에 참조한다. 함수가 순활될때 i와 demo_nav_links[i]의 i는 다르다.
  // demo_nav_links[i].onclick = function() {
  //   console.log(i);
  // }
}
