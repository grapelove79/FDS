###### Front-End Develop SCHOOL

# DAY34_JAVASCRIPT

> __[JavaScript Garden__<bold>]
> (http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this)

## 문장

## 반복문(LOOF)
While문 조건이 참인 동안(while) {...}을 수행한다.

```js
var count = 0;
while( count++ <= 10 ){ //조검이 항상 참이어서 무한반복된다.
	console.log(count);    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
}

var count = 0;
while( ++count <= 10 ){
	console.log(count);    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
```

```js
var cleanWhiteSjpace(element) = (el=document) => { //=>는 Error함수
	console.log(el);
}
```

\s: 내부에 공백있냐 감지

> 제귀함수 : 나자신을 다시 호출하는 것(다시 순환해라.)

## do while문
- do는 무조건 1번 실행
- do while문은 한번실행

```js
// do ~ while문
var boo = !ture, m =10;
do {
	console.log(boo ? '참참참!':'짝짝짝!');
	// if (--m > 0) {   // 9, 8, 7, 6, 5, 4, 3, 2, 1 
		if(m-- < 0) {   // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
		boo = !boo;     //if문은 flase이기 때문에 boo가 실행 안됨.
	}
} wihle(boo); //boo가 false이기 때문에 실행이 안된다.
```

```js
//for문 continue를 사용해보는 예제

for ( var el_collection=[], i = collection.length -1; collection[i]; i--) { //요소가 있냐 없냐 검증.
	let node = collection[i]; //let은 지역변수로 지정
	if(node.nodeType === 3 || node.localName === 'script'){ //#text, <script> 0
		continue;
	}
	el_collection.push(node);
}
console.log( el_collection ); //[div.demo_container]
```

```js
//공백이 주의
'em rem % px vw vh vmin vmax'.split(' ');  // ["em", "rem", "%", "px", "vw", "vh", "vmin", "vmax"]
'em,rem,%,px,vw,vh,vmin,vmax'.split(',');  // ["em", "rem", "%", "px", "vw", "vh", "vmin", "vmax"]
'em, rem, %, px, vw, vh, vmin, vmax'.split(', '); // ["em", "rem", "%", "px", "vw", "vh", "vmin", "vmax"]
```

##함수
함수 묶음은 재사용이 가능하다.
```js
function functionls() {
}
functionls() 
```
```javascript
 with(console) { // 좋지 않으니 안쓰는 게 좋다.
	 log('this is log message 1');
	 log('this is log message 2');
 }
 this is log message 1
 this is log message 2
```

###JavaScript함수를 작성하는 3가지 방법

####0. 사용하지 말아야 할 방법
```js
var fn0 = new Function('console.log("쓰지말자")');
	console.log('fn0():' fn0() );    //함수 실행
fun0();    //함수 실행
```

> 자바스크립트 호이스팅(Hoist :  끌어 올려진다.) 현상 발생한다.<br>
> 변수는 해석될때 나중에 할당된다.<br>
> 스코프는 해당영역이다.<br>
> 스코프란 <br>

#### 1. 함수 선언문
```js
function fn1() {
	console.log('선언된 함수가 실행되었다.');
}
fn1();
```

#### 2. 함수 표현식(권장)  17:29분
```js
var fn2 = function() {
	console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.');
}
console.log('fn2():', fn2());
```
### 스코프체인
- 전역에 뭘 만들면 거슬러 올라가기 때문에 느리다.
- 그래서 지역변수로 만드는 것이 좋다
- 매개변수에 정의 하지않으면 undifind가 출력된다.
- 인자값을 받으면 king을 출력하다.
```js
var king = '전역의 왕'; //없으면 3차적으로 전역변수에서 찾는다. 없으면 위 함수까지 찾아 올라간다.
function kingdomNorth() { //없으면 2차적으로 (매개변수)에서 찾는다.
	console.log(king); //1차적으로 function내부에서 지역변수 king을 찾는다. 
}
```
```js
var king = '전역의 왕'; 
function kingdoumSouth(king) { 
// 3.kingdoumSouth안에 king지역변수는 없지만, 
// 4.매개변수king에 인자 값을 받기 때문에 console.log(king)은 the king of fighters 2016이 출력한다.
	function inKingdomSouth() { // 2.매개 변수에서 king이 없다
		console.log(king); // 1.function 내부에 지역변수 king이 없다
	}
	inKingdomSouth();
}
kingdomSouth('the king of fighters 2016'); //인자값을 받으면 king을 출력하다.
--> the king of fighters 2016
```

### 호이스팅
- 함수는 함수자체가 끌어올라간다. 함수내에 함수가 있으면 함수안에 처음으로 끌어올라간다.
- 호이스팅은 함수의 스코프 안에 var는 var 변수명만 맨위(첫번째)로 끌어올라간다.
- ES6에서는 let 키워드는 호이스팅이 안된다. let은 지역내에서만 사용한다. 지역변수가 된다.
표현식은 변수가 올라간다.
```js
var boo = true;
if(boo) {
	if(boo) {
		console.log(boo);
		var boo = false;
	}
}
```