###### Front-End Develop SCHOOL

# DAY 41_AJAX, Anguler

## AJAX(Asynchronous Javascript And XML)<br>
__AJAX 비동기 통신 기술__<bold>
Asynchronous(비동기) JavaScript and XML (AJAX)는 그 자체가 (특정한) 기술은 아닙니다. 하지만 HTML 또는 XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, XMLHttpRequest object를 비롯한 기존의 여러 기술을 사용하는 "새로운" 접근법이라고 설명할 수 있습니다. 이러한 기술들을 AJAX 모델을 통해 결합하면, 웹 응용 프로그램을 빠르게 만들 수 있으며, 전체 웹 페이지를 다시 불러 오지 않은 채로 점진적으로 또 부분적으로 그 사용자 인터페이스(와 페이지 내용)를 갱신할 수 있습니다. 이 기능을 써서 더 빠르며 사용자가 취하는 동작이나 요구(예를 들어, 검색어 입력, 지도 스크롤, 새로운 위치 선택, 축척 조정 등)에 더 잘 응답하는 응용 프로그램을 만들 수 있습니다.

###AJAX란?
AJAX란 비동기 JavaScript와 XML을 말합니다. 간단히 말하면, 서버측 Scripts와 통신하기 위한 XMLHttpRequest객체를 사용하는 것을 말합니다. 서버측으로 다양한 형식(JSON, XML, HTML 및 일반 텍스트 형식 등)의 정보를 주고 받을 수 있습니다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"입니다. 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해줍니다.

- AJAX의 단점은 접근성에 열악하다. 그래서 ARIA로 보완한다.
- 자바스크립의 객체 방식의 문자데이터이다.
- 문자를 객체로 개체를 문자로 바꿀수있다.
- XHR(XML Http Request) : AJAX비동기 통신을 하기 위한 객체, 프로토타입을 가지고 있다.
- AJAX통신을 위해서는  XHR객체를 사용해야 합니다.
- AJAX는 XHR(XML Http Request) 를 요구한다.


>FrameWork의 장점 : 일성, 코드의 생산성.<br>
>Anguler Js: 누가 작성하든 코드가 똑같다.

### 실습
####Command Line 작업
```
kys$ http-server -o -a localhost -p 8081 	// 서버구동하기
kys$ npm list -g http-server	// http-server가 설치되어있는지 확인

data kys$ curl http://api.randomuser.me/?results=10 > random-users.json // 10개의 json가져와  random-users.json 파일 생성됨.
```

>__JSON파일 정렬__<br>
comand+shift+p > pakege install > pretty JSON 깔기 >
pretty JSON: Format(pretty print) JSON (^ + COMMAND + J)

>__JSON 제너레이터__<br>
http://www.generatedata.com/
https://randomuser.me/documentation#howto

####JSON사용법
- text --> objcet
	- json객체의 parse( )메소드를 사용
	- JSON.parse( JSON 문자열)
- text --> object
	- JSON 객체의 stringify( )메소드를 사용
	-  JSON.stringify( javascript 문자열)

##__AngularJS__<br>
- 어플리케이션 만들때 쓴다
-  화려한 것은 제이쿼리를 많이 쓴다.
- 앵귤러와 제이쿼리는 충돌하지 않지만 

####프론트-엔드/백-엔드 개발자 AngularJS프레임워크를 선호하는 이유
- 코드 일관성 유지
- MVC 구조
- 코드양 감소
- 코드 재사용
- 양방향 데이터 바인딩
- 다양한 모듈 확장





