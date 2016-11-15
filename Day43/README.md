###### Front-End Develop SCHOOL

# DAY 43_ Anguler

- route는 싱글페이지 애플리케이션을 만들 수 있다.
- javascript는 데이터 바인딩 기능이 내장(Native Support)되어 있지 않다.
##디렉티브
####디렉티브(지시자, Directives)는 html을 확장한다. 
디렉티브는 다음 과 같은 일을 수행 할 수 있다.
	- 문서객체모델 조작(DOM Manipulation)
	- 데이터연결
	- 컨트롤러/모듈
	- 뷰 로딩(싱글페이지어플리케이션에서 사용한다.),
	- 스타일링
	- 이벤트
####디렉티브 카테코리
- 문서객체모델(DOM) 조작
- 데이터바인딩
	- ngModel은 form Validation편하게 만들어 준다.
- 이벤트(Events)
####디렉티브(지시자)
```js
<div ng-hide="is_hidden"></div>  // 비표준
<div data-ng-hide="is_hidden"></div> // 표준