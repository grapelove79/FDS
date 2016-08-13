###### Front-End Develop SCHOOL
# DAY33_JAVASCRIPT
책추천 : dom을 깨우치다

[기술용어정의 http://whatis.techtarget.com/](http://whatis.techtarget.com/)
## NaN
형 변화하기

아니죠? 확실해요? (is Not a Number)
isNaN( );
!isNaN( );
```js
isNan(9)
false

isNaN([])
false

function isNumber(data) {
return !isNaN(data);
}

funtion isNumber(data) {
return typeof data === 'number';
}
```
 1. 자바스크립트 데이터 유형
 1.1. 원시형 데이터(숫자, 문자, 논리, null, undefined)
 1.2. 자료형 데이터(함수, 배열(1개밖에), 객체(어떤 특정키의 밸류))

##함수형(Function)
- 함수 리터럴 표현식, 변수에 참조
- 메모리에서 사라지기 때문에 변수에 담은면 {}뒤에 ;세미콜론을 붙여줘야 한다. 
var myFn = function() {};

### 함수 선언문(Function Declaration ) 
- 권장하지 않는 방법
```
function 함수이름(){} //함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨.

if() {}
while() {}
for() {}
```

###함수 표현식(Function Expression) 
-  권장한다.
- 변수에 담을때는 ; 붙여줘야함.
- 함수 블록문 뒤에 세미콜론(;)을 사용해야됨.
```
var 변수(함수이름) = functoin(){};//변수에 담거나 함수에 이름을 부여하거나 해야함. 아니면 사라짐
```
- 객체(object)의 프로퍼티(변수)에 함수 참조
obj.onclick=function( ) {} 

### '함수' 생성자 함수를 사용 함수를 생성하는 방법 
-  잘 사용하지 않음.
- 많은 오류를 가지고 있다.
- 생성자 함수를 new를 통해서 객체를 만들 수있다.

```js
함수(Function), 변수에 참조
var myFn = new Function(); //생성자 함수 new키워드
```
- 함수를 참조하고 있는 변수 이름을 통해서 호출(실행 연산자'( )' 사용)
logIdentity();  // 함수를 호출할때는(;)세미콜론을 붙여야함.
```js
new Function('return false');
var logIndentity = new Function('console.log("this is function")');
```
### 함수(funtion), 이름으로 작성
```js
Function myFn( ){ };
```
- 변수에 참조하지 않고 이름이 있는 함수로 선언
- 함수이름은 카멜케이스로 만든다.
- 변수는 _를 붙여서 이름을 만든다.
- 제이쿼리는 $를 붙여서 이름을 만든다.

####객체의 프로퍼티(변수)에 함수이름 참조
```
obj.onclick = myFn;
function myFn(){};
```
##배열형(Array)
배열 : 자료형
```
//변수는 하나의 데이터 값만 담을 수 있다.
var favorite_item_01 = '커피';
var favorite_item_02 = '에어컨';
var favorite_item_03 = '선풍기';
```
###배열의 특징
- 집합(데이터드를 묶을 수 있다.)
- 여러개의 변수를 만들지 않고도 하나의 변수에 배열 데이터를 참조함으로서 다수의 데이터를 관리할 수 있다.
```
// var favorite_items = ['커피', '에어컨', '선풍기', '깐풍기'];
var favorite_items = new Array();
favorite_item[0] = '커피';
favorite_item[1] = '에어컨';
favorite_item[2] = '선풍기';

var favorite_items = ['커피','에어컨','선풍'];
console.log(favorite_items[0]); //'커피'

----------------------------------------------------------
var favorite_items = new Array('커피','에어컨','선풍'); // 권장하지 않는다. 오류가 많음.

```
###배열(Array), 변수에 참조
 = new Array();
특정 객체를 만들때 함수로 정의하고 싶을때
```
function Carousel() {

}
function Navigation() {

} 
var banner_carousel = new Carousel(); 
var header_gnb = new Navigation();
```

####연관 배열:
- 배열 원소로 추가된 아이템이 아니라, 객체의 속성임
	- 데이터를 표현하는 방식
	- 뭔가를 통해서 값을 찾아 내는 방식
```
favorite_items['true-or-false'] = '깐풍기는 한웅님이 추천한 메뉴이다';
// favorite_items.true-or-false [X]

// console.log(favorite_items);
// console.dir(favorite_items);
```
- 요소를 생성할 수 있다.
- 숫자형 배열
- 배열 인덱스()
- 자료가 중첩이 될 수 있다.
```javascript
var temp = [];

temp[0] = true;
ture

temp['type'] = 'array';
"array"

temp['scope]='global';
"global"

temp.type;
"array"

temp.scope;
"global"

temp;
[true, "coffee", function temp.(anonymous function)(), >Array[4]]

dir(temp); //console.log(temp); 과 같다.
Array[4]

new Array('yamoo9');
["yamoo9"]

new Array(9,10,11)
[9, 10, 11]

new Array(9) //숫자값을 받았을때 오류 --> 자바스크립트는 배열[]이 최선
[undefined x 9]

[9]
[9]

```
###객체형(Object)
사스는 맵이 객체형이다.
자바스크립트 언의의 모든 것은 객체이다. null, undefinde는 객체가 아니다.
```js
//toString() 가지고 있으면 객체이다.
NaN.toString()  //typeof은 치명적인 오류를 가지고 있다.
"NaN" //숫자객체

''.toString()
""
```
프로퍼티(변수)추가
property = data;

객체 리터럴 표현식
var a = { }
객체 리터럴 표현식, 프로퍼티 추가
{속성: 값}
{속 값성1: 값, 속성2:값}
키워드를 쓸때 예약어는 따옴표로(' 예약어 ') 묶어준다. 문자열로 묶어준다.
'for'
'class'

지울때
delete
일반적인 객체는 지울수 있는데 전역에 선언된 변수는(함수) 지울 수 없다. 
air === window.air
true
delete window.air;
false

air
90
air = null;
unll
air
null

전역변수는 전역객체의 속성과 같다.

###정보분석
정보 유형 파악하기 1
```
typeof | typeof() //키워드
```
## 변수 선언
데이터 유형별 변수 선언 및 값(리터럴) 할당
```js
var num, str, boo, fnc, arr, obj;

// 선언된 변수에 각각 데이터를 리터럴 펴현식으로 복사/참조
// 원시데이터 유형(복사)
num = 1203; 
str = 'hey, jude;
boo = !o;

// 자료형 데이터 (참조)
fuc= function(){};
arr = [];
obj = {};

// var 키우드를 한 번만 사용하는 패턴
// (var singleton pattern)
var num = 9,
    str = '',
    boo = true,
    fnc = function(){},
    arr = [],
    obj = {};
```
####자바스크립트 데이터 유형 체크
#####typeof 키워드를 사용하는 방법
```js
typeof num;        // 'number'
typeof str;        // 'string'
typeof boo;        // 'boolean'
typeof fnc;        // 'function'
typeof obj;        // 'object'
typeof arr;        // [기대] "array" [결과]'object': 문제 발생! 설계 오류!!!!
typeof null;       // [기대] "null" [결과]'object': 문제 발생! 설계 오류!!!!
typeof undefiend;  // 'undefined'

typeof RegExp;     // 'function'
typeof new RegExp; // 'object'
typeof Math;       // 'object'
```

#####instanceof 키워드를 사용하는 방법
- 역할 : 생성자 함수(객체를 생성하는 자)를 통해 생성된 객체(인스턴스)인가?
-> 객체 instanceof 생성자
```js
arr instanceof Array; //true: typeof의 설계 오류 문제점을 해결할 수 있다.
// array물어 볼때 말고 거의 쓸일이 없다.
```
- 약점 : 원시 데이터 유형(리털럴 방식)의 경우는 올바른 대답을 해주지 않는다.
```
'primitive' instanceof String;  //false
new String('primitive')instanceof String; //true
```
##### constructor 속성을 사용하는 방법

- 객체유형의 데이터에서는 완벽한 결과를 반환한다.
```
'primitive'.constructor === String; //true
(new String('primitive)).constructor === String //true
```
단, 객체가 아닌 유형에서는 오류를 발생시킨다.
Uncaught TypeError: Cannot read property 'constructor' of null(…)
이유는 , constructor속성은 객체만이 가지고 속서이기 때문이다.
 (null).constructor; // null, undefined는 객체가 아니기 때문에 속성이 없다.
 객체에 한해서 올바르다.완벽하게 나온다. 객체가 아닌것에는 아무런 힘도 못낸다.

```js
'hey'.constructor

null.constructor
TypeError
(null).constructor //undefinded도 에러가 뜬다.
TypeError

num.constructor === Number
true
arr.constructor === Array
true
/(\s|^).constructor ===RegExp
true
function checkDataType(data, maker){
	return data.constructor === maker;
}
undefined
checkDataType('string', String);
```
####JavaScript Design Pattern
*** 타 객체의 메소를 빌려쓰는 패턴 
__object.prototype.toString__<bold> (`완벽하게 모든데이타 타입을 체크할 수 있다.유형을 얘기해준다.`) 던진 값을 정확하게 빼주고 있다.
```
object.prototype.toString(undefined)
"[object Object]"

Object.prototype.toString.call(undefined) //call은대신 빌려 서 실행한다.(undefined 과 주체)

"[object Date]".slice(8)
"Date]"

"[object Date]".slice(8, -1)
"Date"

// 자바스크립트의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수
function isType(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
```
##연산자
###사친 연산자 +, -, *, /
###나머지 연산 %
```
var doll_message = ['안녕', '밥 먹었니?', '공부는 잘하고?', '결혼은 언제?', '아이는 몇 명?'];
for (var count = 0, messages = doll_message.length; count < messages; count++ ) {
  // console.log(doll_message[ count % messages ]);
}


var doll_message = ['안녕','밥 먹었니?', '공부는 잘하고'];
var count = 0;
doll_message[ count++ % doll_message.length]
"안녕"
doll_message[ count++ % doll_message.length]
"밥 먹었니?"
doll_message[ count++ % doll_message.length]
"공부는 잘하고"
doll_message[ count++ % doll_message.length]
"안녕"
doll_message[ count++ % doll_message.length]
"밥 먹었니?"
doll_message[ count++ % doll_message.length]
"공부는 잘하고"
doll_message[ count++ % doll_message.length]
"안녕"
doll_message[ count++ % doll_message.length]
"밥 먹었니?"
doll_message[ count++ % doll_message.length]
"공부는 잘하고"

for(var count = 0, messages = doll_message.length; count < messages; count++){
	console.log(doll_message[count%messages]);
}
```
- 문자열 (String)접합   +
```
var message = 'jungle' + 'shchool';
```
```js
var strat = 0;
while(start < 10 ){
	console.log(start);
	start++;  
	//후증가, start = start + 1; 같다. 여기 주석처리 되면 무한 반복된다.  
	//선증가는 1부터 시작된다. 후증가는 0부터 시작된다. while문은 조건이 참일때 실행 
	0
	1
	2
	3
	4
	5
	6
	7
	8
	9
	10
	srart
	10
})


var i = 0
while(document.querySelectorAll('a')[!++];){
//문서의 요소가 있을때까지 실행하고 끝낸다.
}
```
###증가(감소) 연산
```
var check_fack = 100;

//debugger; //debugger는 사용자가 쓰는 화면에서 멈추게 된다.
console.log(check_fact);
console.log(check_fact++); // 100
console.log(check_fact);
console.log(--check_fact); // 101
console.log(check_fact);
console.log(check_fact--);
console.log(check_fact);
console.log(++check_fact);
// debugger
```

###대입연산자
typeof, instanceof ⇒ 오퍼레이터이다.

##조건문(conditional statment)
- 원시적인 형태의 인공지능(Artificial Intelligence)을 부여하는 것, 
- 의사결정(상황판단)의 기준을 제시.
###if문

- && : and (앞이 참이면 뒤에 거짓일때 실행)뭐가 존재한다면 이것도 실행하라, 
		--> 첫번째 falshy, 마지막 trushy값을 반환한다.
```
1&& 2 && 5 && 8;
8

0 && 2 && 4 && 3;
0

0 || 3 || 4
3

2 || 3 || 0
2

0 || NaN || 3
3

var a=10;
undefined
var b;
undefined
b = b || a
10
b;
10
b = b && a;
10
```
-  ||    : or (앞이 거짓이면, 뒤에 참일때 실행)하나라도 만족
-  !     : 부정
```
function display(value)
```
```
function equal(data1, data2){
return data1 == data2;
}

function strictEqual(data1, data2){
return data1 === data2;
}
undefined
equal(0, false);
true
strictEqual(0, false);
false
```
### 삼항 조건식 - 조건? 참(true) : 거짓(false);
```
? :
```
```js
condition ? 'condition is true' : 'condition is false';
"condition is false"

if( condition ){
console.log('condition is true');
} else {
console.log('condition is false');
}
condition is false
```
```
// 오늘은 무슨 요일입니까?
// 0,1,2,3,4,5
var today = new Date().getDay();

//var today_is = today === 0 ? '일요일' : '일요일이 아님';
var today_is = today === 0 ? '일' : 
			   today === 1 ? '월' :  
			   today === 2 ? '화' :  
			   today === 3 ? '수' :  
			   today === 4 ? '목' :  
			   today === 5 ? '금' :  
			   today === 6 ? '토' :  false;
						   
console.log( today_is ? '오늘은' + today_is + '요일 입니다.' : '장난하냐?');
```
###swich문(조건이 5개 이상일때 쓰는 것이 좋을 것이다.)
swich, case, default
```js
 switch(조건) {
   case 값: 코드 실행;
   case 값: 코드 실행;
   case 값: 코드 실행;
   default: 위의 상황(case)이 아니면 최종 실행;
 }


var today_is, today = 5;
switch(today) {
	case 0:
	  today_is = '일';
	break;
	case 1:
	  today_is = '월';
	break;
	case 2:
	  today_is = '화';
	break;
	case 3:
	  today_is = '수';
	break;
	case 4:
	  today_is = '목';
	break;
	case 5:
	  today_is = '금';
	break;
	case 6:
	  today_is = '토';
	break;
	default:  today_is = 'false'; //가장 마직막에 실행되니까 멈출필요가 없다.
}
console.log(today_is ? '오늘은' + today_is + '요일 입니다.' : '장난하냐?');
```
###switch ~ case문 응용
```javascript
function init() {
  // 지역 변수
  var event_types = 'click dblclick mouseenter mouseover mouseout mouseleave focus blur'.split(' ');
  var random_count = Math.floor( Math.random() * event_types.length );
  var event_type = event_types[ random_count ];
  var callback;
  var dom_el = query('.result');
  dom_el.innerHTML = 'this is dom object.';
  dom_el.setAttribute('tabindex', 0);
  console.log(event_type);

  switch(event_type) {
    case 'click':
    case 'dblclick':
      callback = function() {
        console.log('clicked object');
      };
    break;
    case 'mouseenter':
    case 'mouseover':
      callback = function() {
        console.log('mouse entered object');
      };
    break;
    case 'mouseout':
    case 'mouseleave':
      callback = function() {
        console.log('mouse entered object');
      };
    break;
    case 'focus':
    case 'blur':
      callback = function() {
        console.log('focused or blured object');
      };
  }

  dom_el['on'+event_type] = callback;
}

window.onload = init;
```