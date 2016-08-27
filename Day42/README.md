###### Front-End Develop SCHOOL

# DAY 42_AJAX, Anguler

##storage
웹 스토리지 API의 스토리지 인터페이스는 특정 도메인을 위한 세션스토리지 또는 로컬 스토리지에 접근할 수 있게 합니다. 예를 들면, 저장된 데이터 아이템들의 추가, 변경, 삭제가 가능한 방식과 같습니다.

만약 한 도메인을 위한 세션스토리지를 조작하고 싶다면, Window.sessionStorage 메서드를 사용하면 됩니다. 마찬가지로, 로컬스토리지의 경우에는 Window.localStorage를 사용합니다.

####Properties
Storage 오브젝트에 저장된 데이터 아이템들의 갯수를 반환합니다.
```js
Storage.length 
```
####Methods
setItem, getItem, key , clear를 쓸 수 있다.

- 특정 숫자 n에 대해서, 스토리지에 n번째 저장되어 있는 키의 이름을 반환합니다.
```js
Storage.key()
```
- 키의 이름을 넘기면, 키 값이 반환됩니다.
```js
Storage.getItem()
```
- 키 이름과 값을 지정하여 스토리지에 저장합니다. 만약 키가 이미 있다면, 키의 값을 업데이트합니다.
```js
Storage.setItem()
```
- 키 이름에 해당하는 아이템을 제거합니다.
```js
Storage.removeItem()
```
- 스토리지의 모든 키를 제거합니다.
```js
Storage.clear()
```
- Aplication을 열어놓고 console에서 확인한다.

```js
// 로컬스토리지에 grapelove저장
// 객체 -> 문자
// stringify(스트링어빠이)는 객체는 문자화 해준다.
var str_grapelove = JSON.stringify(grapelove);	// string
strorage.setItem('grapelove', str_grapelove);

// 전역에 공개
global.grapelove = grapelove;

// 문자 -> 객체
var getted_grapelove = storage.getItem('grapelove');
getted_grapelove = JSON.parse(getted_grapelove); // object
console.log(getted_grapelove);
```
## Angular JS
__React 강의__<br>
https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC

- 앵귤러는 ie8이하는 지원 못한다.
- ie8을 고려할때는 Lagacy 1.2버전을 써야 한다.
- 앵귤러와 제이쿼리의 같이 쓰려면 딱 필요한 기능만 쓰는 게 좋은 선택이 될 수 있다.
- bower모듈을 깔아야 한다. 꼭 깃이 필요한다. 거기서 자료를 가져온다.
- bower는 프론트툴을 관리 해 주는 것.
- 앵귤러와 리액트는 같이 쓴다.

__BOWER Command Line__<br>

- bower 설치
```js
angularJs kys$ sudo npm i -g bower
```
- bower 확인
```js
angularJs kys$ sudo npm list -g bower    //  윈도우에서는  npm list -g bower
```
-  bower 버전확인
```js
angularJs kys$ bower -v
```
- bower help
```js
angularJs kys$ bower -h
```

- 서브라임텍스트를 열라
```js
angularJs kys$ subl ~/ .bowerrc
```
-  JSON파일을 command라인으로 만든것.
```js
angularJs kys$ echo '{"directory": "lib"}' > .bowerrc && cat .bowerrc
```
- bower.json파일을 생성
```js
// echo는 내용 값을 넣을 수 있다.
angularJs kys$ echo '{}' > bower.json 
```

- angular설치 (git 이 설치되어 있어야 한다.)
```js
angularJs kys$ bower i --save angular
```
```js
angularJs kys$ rm bower.json 
```
- lip 설치
```js
angularJs kys$ bower init

? name angularJS
? description 
? main file 
? keywords 
? authors grapelove <grapelove79@gmail.com>
? license MIT
? homepage https://github.com/grapelove79/FDS
? set currently installed components as dependencies? Yes
? add commonly ignored files to ignore list? Yes
? would you like to mark this package as private which prevents it from being accidentally published to the registry? No

{
  name: 'angularJS',
  homepage: 'https://github.com/grapelove79/FDS',
  authors: [
    'grapelove <grapelove79@gmail.com>'
  ],
  description: '',
  main: '',
  license: 'MIT',
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'lib',
    'test',
    'tests'
  ]
}

? Looks good? Yes
```
- angular 설치
```js
angularJs kys$ bower install angular#1.5.8

bower                     invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower angular#1.5.8         not-cached https://github.com/angular/bower-angular.git#1.5.8
bower angular#1.5.8            resolve https://github.com/angular/bower-angular.git#1.5.8
bower angular#1.5.8           checkout v1.5.8
bower angular#1.5.8           resolved https://github.com/angular/bower-angular.git#1.5.8
bower angular#1.5.8            install angular#1.5.8

angular#1.5.8 lib/angula
```
- map파일은 하나의 모듈 단위로 개발해서 통합.

- css스프라이트 이미지/스타일 파일 자동 생성 (png, svg기반)
--> sprites.png, sprites.svg, sprites.css파일을 자동을 생서합니다.

bower.json  (클라이언트)
package.json (서버)
`->` 에러 function 표시

RESTful서비스 : 