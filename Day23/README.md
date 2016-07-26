 sass 기본 문법
​
*주석*
* 싱글라인 
` // 주석내용` 으로 달면 된다. 하지만 css에는 출력이 되지 않습니다. 
> 어차피 우리팀만 볼 거 // 주석으로 사용하는 것이 좋겠다!
* 멀티라인 `/* 여러 줄 주석 */` 끝에 */는 생략이 가능하다. 그러나 여러 줄 주석의 경우에는 앞에 반드시 공백이 있어야 된다!
​
```
<!-- ex -->
/*
 여러
 줄 
 주석
 공백
```
​
> scss의 경우도 똑같지만 공백은 상관이 없다!
​
*호출*
.css,.scss,.sass파일을 @import를 사용하여 호출이 가능하다.
​
​
```
//scss나 css 경우에는 반드시 확장자명을 명시해주어야 한다! sass 파일은 확장자명 생략 가능
@import "work.scss";
@import "work";
​
//콤마를 통해 여러 파일을 불러들일 수 있다.
@import "work", "test.css"
​
@import "work" screen
// 미디어쿼리처럼 특정 기기나 해상도에서 불러들이는 것도 가능하다.
@import "http://work.com"
@import url(work)
// 외에도 외부 링크를 가져올 수도 있다.
```
​
* 호출 제어
scss나 sass 파일에 _(언더스코어)를 붙여주면 css로 컴파일되지 않는다.
* sass에서는 각각의 역할을 분리하여 필요에 따라 재사용할 수 있는 모듈 관리가 가능하다!
​
```
@import "initialize/common"
@import "common/links"
@import "common/pagination"
@import "form/form-style"
```
​
- css는 import 구문이 상단에 위치해야 하지만, Sass의 경우는 문서 어디든 위치해도 상관이 없다
​
* import 중첩 ; 해당 클래스나 아이디 등에 중첩으로 import를 사용한다면, import로 호출한 코드가 부모로 들어오게 된다. (extend는 선택자가 해당 요소로 올라가게 되는것 둘이 반대얌!)
​
```
<!-- sass 파일  -->
_combobox.sass
_carousel.sass
_box.sass
​
​
#process-A
  @import _combobox.sass
  @import _carousel.sass
​
#prosess-B
  @import _box.sass
​
<!-- 컴파일 된 css 결과 -->
=> #process-A .combobox
  #process-A .carousel
  #process-B .box
```
​
​
```
<!-- button.sass -->
.button
  $space: null !default 
  //!default는 초기변수 선언임! 사용자가 따로 재정의 하지 않으면 초기변수 값을 가지게 된다.
  $red: null !default
  padding: $space
  background :$red
​
​
<!-- review.scss -->
// 변수 값 재정의
$space: 22px;
$red: red;
​
@import "button";
​
.bul{
  $space: null;
  //지역변수로 null이라는 값을 재정의 해줌!
  width: 55%;
  @import "button";
}
​
<!-- review.css -->
.button{
  border:none;
  padding:22px;
  background:red;
}
// 재정의를 해준 값을 먹는다!
.bul{
  width:55%;
}
.bul .button{
  border:none;
  background:red;
  //재정의 해준 null이라는 값을 다시 먹게 된다!
}
```
​
### Sass 스크립트
​
*변수*
​
* Sass 변수 이름 작성 규칙
  - sass 변수는 변수 이름 앞에 $ 기호를 붙인다.
  - 변수 이름 사이에 공백을 사용하지 않으며, 음절과 음절 사이에 _(언더스코어), -를 사용한다.
  > 자바스크립트의 경우, - 하이픈을 사용할 수 없어 유의해야함!
  - 만약 프로그래밍에 익숙하여 camelCase 방식이 익숙하다면??????
    => 사용은 가능하나, 함수 이름에 사용되기 때문에 권장하지 않는다!
  - 변수 값은 따로 끌어올릴 수가 없기 때문에, 항상 상위에 위치해야한다.
​
```
$my-nickname: 'Yerina'
​
body
  &::before,
  &::after
    content: $my_nickname
​
// 변수 이름에 -를 사용하고, 내용에 _를 사용했다! 그러나 오류가 나지 않는다. sass는 이 둘을 같은 것으로 처리하기 때문이져. 하지만 좋지 않은 습관이야
```
  -!global 변수 뒤에 !global을 쓰면 지역변수도 전역변수처럼 사용이 가능하다
​
```
#main{
  $width: 30px !global
  /// !global이 없다면 위에 변수값이 선언되지 않았으니, 오류가 발생한다! 하지만 !global로 전역변수임을 선언하였으므로 사용이 가능하다.
  width: $width
}
#section{
  width: $width
}
​
=> #main{width:30px;}
  #section{width:30px}
```
​
​
*데이터유형*
Null/Number/String&Color/Boolean/list/map 키와 속성값을 가지고 있는 하나의 묶음 객체?
​
- null 없음
- numner 실수, 뒤에 px이라는 단위가 있어도 숫자형으로 인식한다.
- string&color 문자형, sass에서는 따옴표를 쓰지 않아도 문자형으로 인식한다.
``` "Noto-sans", Verdana```
  color hex코드나 rgb 값 등등