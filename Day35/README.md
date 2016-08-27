
###### Front-End Develop SCHOOL
# DAY35_JAVASCRIPT
>[__JavaScript Garden__<bold><br>
>http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this](http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this)

>[__배열__<bold><br>
>http://colintoh.com/blog/5-array-methods-that-you-should-use-today?utm_source=javascriptweekly&utm_medium=email](http://colintoh.com/blog/5-array-methods-that-you-should-use-today?utm_source=javascriptweekly&utm_medium=email)

##자바스크립트 반복문
1.1 while
1.2 do ~ while
2.1 for 
2.2 for ~ in [Object] : 
2.3 forEach [Array] :  ECMASript 5 Edition
2.4 for ~ of [Array] : 배열의 원소에 바로 접근 가능. ECMASript 2015

###forEach 구문
```js
var movielist = [];

movielist.push('터널');
movielist.push('덕해옹주');
movielist.push('부산행');
movielist.push('서울역');

console.log(movielist);

// for문
for(var i=0, l=movielist.length; i<l; i+=1) {
	// console.log('for문의 결과:' , movielist[1]);
}

// for ~ in문
for (var index in movielist) {
	if (movielist.hasOwnProperty(index)) {
	// console.log('for문의 결과:' , movielist[index]);
	}
}

// for ~ of문
for(var movie of movielist) {
	// console.log('for ~ of문의 결과:' , movie);
}

// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
movielist.forEach(function(item, index, arr) { 
//forEach도 함수 인데 그안도 함수를 호출하는 것을 콜백함수이다.
// function(callback)받는 것. 순서가 중요하다.
// 원본은 변하고 싶지 않을때 forEach를 쓴다. 
	console.log('item:', item);
	console.log('index:', index);
	console.log('arr:', item);
)};


// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
movielist.forEach(function(item, idx) {
  // console.log('item '+ idx +': ', item);
  return 'item '+ idx +': ' + item;
});
console.log('movielist.forEach() 결과: ', movielist);


// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)-조건문과 반복문은 뗄래야 뗄수 없는 관계(크로스브라우징 확인해야함)
// .map()의 반환 값은 수정된 배열을 반환한다.
var new_movielist = movielist.map(function(item, index, arr) {
  // console.log(item + '은 ' + index + '번째 원소입니다.');
  return item + '은 ' + index + '번째 원소입니다.';
  // console.log('item' + index + ':', item);
  // if ( index === movielist.length - 1 ) {
  //   console.log('arr:', arr);
  // }
});
console.log('movielist.map() 결과: ', new_movielist);
```
>[__forEach 참고 URL__<bold><br>
>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

>[__map 참고 URL__<bold><br>
>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

##자바스크립트 함수 
###함수의 특징
- 상위 영역(scope)과 구분되는 별도의 독립적인 영역을 생성한다.
- 함수 내부에 'var' 키워드, 'function'키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다.
- 함수 내부에 독립된 공간이기에 내부에 'var'키워드, 'function' 키워드로 정의된 데이터는 호이스트(Hoist)된다.

###호이스트(영역 최상단으로 끌어 올려진다.)
- 'function'으로 정의된 함수는 몸체가 전부 끌어올려진다.
- 'var' 키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터는 원래 정의된 곳에서 이루어진다.

###선언식 (함수 이름으로 정의하는 방법)
```js
function scopeFn() {...}
```

###표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
```js
var scopeFnExpression = function() {
  // console.log(this); // window 객체
  // 외부와 단절된 독립된 공간이 형성된다.
  if (movielist) {
    inScopeFnc();
    console.log('if 내부:', movielist);
    // ※ ES2015에 표준으로 추가된 let 키워드를 사용한 변수는 호이스트 되지 않는다.
    // let movielist = null;
    // var 키워드로 정의된 변수는 호이스트되어 함수 영역의 최상단으로 끌어올려진다.
    movielist = ['영화 짱 좋아', '진짜 짱 좋아'];
    function inScopeFnc() {
      console.log('this is inScopeFnc.');
    }
  }
  console.log('함수 내부:', movielist);
};
// 함수 실행
// 함수를 실행시킨 컨텍스트 객체? === window 객체
scopeFnExpression(); // window.scopeFnExpression()와 같다.

console.log('함수 외부:', movielist);
```
###함수정의
```js
// 매개변수 parameter
function 함수이름(매개변수1, 매개변수2, ...){

}

// 함수 호출
// 전달인자 argument
함수이름(전달인자1, 매개변수2, ...);
```
- 전달받은 인자를 검증하지 않으면 원하는 결과가 나오지 않을 수도 있다.
- return을 만나면, 함수는 바로 종료된다. 결과를 반환한다.(getter함수)
- console.log()는 연산된 값을 돌려 준다.

### this
- 참조변수

### 자바스트립트 엄격(stric)모드     11: 50분
```js
function strictFn() {
	// 엄격 모드 발동
	// *ECMASCript 2015 버전부터는 기본 설정 값이 '엄격 모드'
	'use strict';
	// 변수 선언 시에 var키워드를 강제화 한다. (오류 발생)
	var hi_message = 'Hello';
	// this 컨텍스트 참조 변수는 더 이상 window 전역 객체가 아닌 undefined이다. 
	console.log(this, hi_message);
}

// 엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우, 
// 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. (문제 발생!!)
strictFn(); // this === undefined

// 반명 엄격 모드에서 명시적으로 특정 객체가 함수를 호출하게 되면 
// this컨텍스트 참조 변수는 해당 객체를 참조한다.
window.strictFn(); // this === window 객체
document.onclick = strictFn; // this === windwo.document 객체
```
###자바스크립트 함수는 일급 객체(First Class Object)
자바스크립트에서 함수는 일급객체입니다. 일급 객체가 되기 위해서는 몇 가지 조건을 만족하여야 합니다.

- 변수나 데이터 구조 안에 담을 수 있다.
- 인자를 파라미터로 전달 할 수 있다.
- 반환값으로 사용 할 수 있다.
- 런타임에 생성될 수 있다.

```js
// callback === cb
var fn = function (cb) {
  // 인자로 함수 데이터 유형이 전달되었다면 함수를 실행하라.
  if ( typeof cb === 'function' ) {
    // cb();
    window.setTimeout(cb, 2000);
  } else {
    throw new Error('전달인자는 함수 데이터 유형이어야 합니다.');
  }
};

// 자바스크립트 함수가 일급 객체인 이유!
// 함수를 다른 함수의 인자로 전달할 수 있다.
fn( function() {
  console.log('전달된 함수가 실행되었습니다.');
} );
```
### 자바스크립트 클로저 함수란?
- 자바스크립트 함수는 일급 객체의 요건을 모두 충족한다.
- 인자로서 전달도 가능하며, 값으로서 반환 또한 가능하다.
- 함수가 실행되어  내부에 존재하는 함수를 외부로 반환할 경우 클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있다.
- 이때 반환된 함수를 클로저 함수라 명한다.
- 배열, 객체, 함수는 참조한다.
```js
function countDown(number){
	if(typeof number !== 'number') { throw new Error('숫자를 전달하세요.');}
	var _num = number;
	// countDown 외부 함수 내부에 존재하는 함수
	var _countDown = function() {
		console.log('_num:', _num--); //_num--라는 변수가 참조하기 때문에 메모리에서 사라지지 않는다.
	};
return _countDown;
}
var countDown10 = countDown(10);
// console.log(_countDown);

countDown(10); //10
countDown(); //9
countDown(); //8
countDown(); //7
countDown(); //7
// ...
countDown(); //0
```

 