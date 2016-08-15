###### Front-End Develop SCHOOL
# DAY32_JAVASCRIPT
[참고 http://demo.yamoo9.net/aria-tabs/](http://demo.yamoo9.net/aria-tabs/)
## 자바스크립트 코어
자바스크립트 언어의 기초이자, 프로그래밍 언어의 기본
###명령문(Command)
```
첫번째 명령문; 
두번째 명령문;
```
- 점 연산자로 연결되는 구문(dot Syntax)
	 - 메소드 : 객체가 소유하고 있는 함수.
```javascript
window.alert(); 전역객체
console.log(); // 사실상의 표준 . 콘솔객체의 기록 메소를 실행
console.error();
console.dir();
console.info();
```
###변수(Var)
- 자바스크립트 변수란? 하나의 값을 저장하는 기억장소
- 자바스크립트 변수 기억장소에 담기는 정보(값)? 
(숫자, 문자, 논리, 객체, 배열, 함수 등)
```
변수(variables)
var 변수이름 = 정보유형;
```
> let : if나 for안에서 변수를 지역변수로 만들어 준다.
> const: 상수( 암묵적 함수에서 쓴다. ) - 변화시킬수 없다.
```js
const DOG_AGE = 7;
```
####변수이름 작성규칙
- 대문자로 이름쓰지 말자

- 변수가 가리키고 있는거지 실제 문서가 사라지는 것은 아니다.

- 값을 복제하는 경우
	- 변수 button_text에 복사되는 값은 문자 유형의 데이터이다.
```javascript
var button_text = query('[type="button"]').firstChild.nodeValue;
var a =9;
var b = a;

a
=== 9 복제
b
=== 9 
```
- 원시 데이터 유형(숫자, 문자, 논리, undefined, null)
	- 원시 데이터 유형은 값이 복제가 된다.
- 자료형 데이터 유형(객체, 배열, 함수)
	- 자료형 데이텨 유형은 데이터가 참조가 된다.
```javascript
var obj= {'name: '점심시간'};
obj.name;
"점심시간"
var obj2 = obj;
```
###상수(constnat)
```
상수(constnat)
const 변수이름 = 정보유형;
```
- 상수는 대무자로 작성, 변수와 구별.
	- const CHAR_SEX = 'male';
- 클라이언트 환경에서 자바스크립트 상수 선언. 일반적으로 많이 사용되지는 않는다.
- 항상 그대로 의 값. 
- 특정할 값을 넣을 때 쓴다.
###정보유형(Date Type)
###숫자형()
- 자바스크립트 언어의 숫자는 다른 언어와 달리 간단하게 처리된다.
- 그냥 숫자다.
- 우리가 흔히 쓰는 숫자는 10진수이다.
###문자(String) 상수
홑 따옴표 사용시 문제점.
그런경우 문자화 시켜주기 위해서 '\'사용한다.
```html
'I'm your mom.'  ---> 'I\' m a Teacher.'로 사용 한다.
```
###논리형(Boolean) 
```javascript
Boolean(0)
--> false
Boolean(1)
--> true
```
- undefine(정의 되지 않았다.)
- onclick = null
	-  null이 기본 값이다
	- 담겨있던 값을 비운다 - null 대입시, 기존의 값은 제거되고 현재 비원진 상태를 의미)
- __false__<bold> : 0, '', null, undefined

#### 형 변환하기: Number to String
```javascript
'' | +'' | String() | .toString()
```
##### 데이터 유형 변환1

1.  숫자 -> 문자
1.1. '데이터' ex) '9'
1.2. 데이터 + '' ex)
__*주의할 점__<bold> : 숫자, 함수, 객체 리터럴(그 차제의 값)의 경우는 오류가 발생!
오류가 발생하는 객체는 괄호()를 사용하여 데이터를 감싼 후 테스트
```javascript
var num = 9;
String(num);
=== "9"

num.toString();
=== "9"

(9).toString();
=== "9"
```
참조는 가르키는 것이다.
```javascript
(function(){}).toString()
```
##### 데이터 유형 변환2
```javascript
숫자 + 0 
=== '숫자0'  // 덧셈은 안된다.

"3rem" - 0
=== NaN //단위 부터 제거하고, 다시 단위를 붙여준다.
```
```js
+$0.style.lineHeight  //숫자를 문자로 바꿔준다.
```
|종류|뜻|
|--|--|
|parse| 해석|
|parseInt()|단위를 빼고 숫자만 반환시킨다.|
|parseFolat()| 단위를 빼고 실수를 반환시킨다. (IE하위번전 6,7 지원 안됨.)|
|split(''px")| 배열 상태로 변화고, 그후 단위를 뺀다.|

```js
parseFloat( $0.style.fontSize, 10);
=== NaN
parseInt( $0.style.fontSize, 10);
=== NaN
$0.style.fontSize.split('px')[0]-0
=== 0

'예리나예+리나'.split('+');// 배열이 분리됨
=== ["예리나예", "리나"]
'예리나예+리나'.split('+')[0];
=== "예리나예"
```
##### 데이터 유형 변환3
```js
Boolean(null)
=== false
Boolean(' ') // 띄어쓰기는 true이다.
=== true
Boolean('')
=== false
```

>__retrun__<bold>의 쓰임새
> - getter :  값을 가져오는 것이기 때문에  반드시 retrun이 필요하고
> - setter이나 뭔가 설정이 있는 것 :  설정하는 것이기에 retrun이 필요할때도 있고, 필요하지 않을 때도 있다.

>글자 크기 변환하는 것은 setter이기 때문에 retrun일 필요없다.

```js
// 비표준 Ms IE 방식
$0
// 비표준 Ms IE 방식
$0.currentStyle.fontSize
// 비표준 Ms IE 방식 (ie 8-)
$0.currentStyle
// 표주 W3C 방식 (ie 9+)
// window.getComputedStyle(대상, 가상요소).스타일 속성
window.getComputedStyle($0,null).fontSize
"32px"

$0
//pseudo 값을 가져옴 
getStyle($0, 'marginTop', '::after')
'32px'
```

### 정규표현식
하는 기능만 알아두자. 검색하고 가져다 쓰다.. 시간적 여유가 되면 분석을 해보자
```js
function camelCase(css_prop) {
	return css_prop.replace(/-./g. function($1){
		return $1.replace('-','').toUpperCase();
	});
}
// -------------------------------------------------
// css 속성 입력 표기 방식 -> camelCase표기 방식
// function camelCase(){}
// 정규표현식 (일종의 도구)
'box-sizing'.replace(/-/,'') //  -만 찾는 것
"boxizing"
'box-sizing'.replace(/-./,''); // .은 하나의 문자를 찾는 것.
"boxizing"

'font-size'
"font-size"
'font-size'.replace('s','S'); //어떤구문을 어떻게 바꿀것인가? 
"fontSize"
'images/cont-img-tumbnail.jpg'.peplace('-thumbnail','')
"images/con-img.jpg"
``` 

__getStyle()__<bold>

for문은 수집해온 대상들을 순회하기 위해서.
[https://goo.gl/49ZYPa](https://goo.gl/49ZYPa)