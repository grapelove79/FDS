#DAY24
##Sass 기본문법

*연산*
* 덧셈, 뺄셈, 곱셉, 나눗셈 등으로 수학의 연산 결과를 수행할 수 있다.
* 단위가 붙어 있는 값도 연산이 가능하다.
```
13px * 10px 
///단위가 붙어 있는 것 끼리 연산을 할 경우 결과 값은 130pxpx이 된다. 이럴 경우엔 `/ 1px`를 다시 해 주어야 한다.
```
* 주의해야 할 점은 만약 폰트의 속기형의 경우, `15px/1.5 Dotum`식으로 쓸 때 자동으로 연산이 되어버린다.
```
$width: 10px
$width-plus: $width * 2
```
* 인터폴레이션 interpolation
    - `#{}`
    - 문자열 중간에 변수를 집어넣으면 변수 이름값 또한 문자열로 인식하기 때문에 `#{$변수이름}`식으로 사용할 수 있다.
```
<!-- ex1 -->
$language: ko
@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$language}.css")
=> @import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-ko.css");
//외부 링크에서는 url()안에서 써야만 변수 인터폴레이션이 가능하다
<!-- ex2 -->
$selector: yerina
#area .#{$selector}
    margin:
        left: 20%
        right: 20%
=>#area .yerina{margin-left:20%;margin-right:20%;}
$selector: fastcampus
=> #area .fastcampus{margin-left:20%;margin-right:20%}
```
* 비교 연산
    - 크다 작다 같다 등등 >,<,= 로 불린값을 나타낼 수 있다 `1 < 4 => true`
    - @debug 지시자를 사용하면 명령 창에 디버그 결과를 출력할 수 있다.
```
@debug red!= #ff0; = false
@debug type of(red) = color
```
* 문자 연산
    - 문자와 문자를 접합할 때 +를 사용할 수가 있다.
```
mug+cup = mugcup
mug+"cup" = "mugcup"
type-of(Noto Sans) = list
type-of("Noto Sans") = String
* 컬러 연산
```
p 
    color: #010203 + #040506
=> color: #050709
```
* 기타 연산
```
$border: 10px solid #fff
length($border) = 3
//해당 변수 값의 갯수를 나타낸다.
nth($border, 2) = solid
//해당 변수의 2번째 값만 출력할 수 있다.
```
[참고 sass-lang.com/documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)
###Mixins
*mixin*
* 코드를 섞는 것는 의미로 외부에서 전달받은 인자나 컨텐츠를 병합하여 코드의 덩어리를 출력한다.
* js 함수와 흡사하며, 매개변수를 사용할 수 있다.
* 사용은 @mixin 으로 믹스인을 정의하고 @include로 믹스인을 호출한다.
```
@mixin 믹스인이름($매개변수){
    섞고자 하는 코드
    섞고자 하는 코드
    섞고자 하는 코드
}
<!-- ex -->
@mixin box-sizing{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
header{
    @include box-sizing;
}
main{
    @include box-sizing;
}
css =>
header{
    box-sizing: border-box;
}
main{
    box-sizing: border-box;
}
```
> @mixin과 @extend의 차이점 ; extend는 선택자가 그룹핑 되어 한꺼번에 묶이지만(header,main,footer{box-sizing: border-box;}), mixin은 선택자별로 각각 값이 들어간다. 
> 효율성으로 따지면 extend가 더 좋아 보일 수 있지만, css 유지보수 측면에서 본다면 mixin이 더 좋다.
*전달인자*
    - $매개변수 이곳에 전달인자를 갖다 넣으면 값을 따로 지정해 줄 수 있어 스타일 변경이 각각 가능해진다. 활용성이 무척이나 향상된다. 믹스인의 강점!
```
<!-- ex. extend -->
%box-sizing
    -webkit-border-radius: 4px
    -moz-border-radius: 4px
    border-radius: 4px
header
    @extend %box-sizing
main
    @extend %box-sizing
=> css
header,main{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
<!-- ex. mixin -->
@mixin box-sizing($type)
    -webkit-border-radius: $type
    -moz-border-radius: $type
    border-radius: $type
header
    @include box-sizing(content-box)
main
    @include box-sizing(border-box)
=> css
header{
    -webkit-border-radius: content-box;
    -moz-border-radius: content-box;
    border-radius: content-box;
}
main{
    -webkit-border-radius: border-box;
    -moz-border-radius: border-box;
    border-radius: border-box;
}
```
    - .sass에서는 @mixin 대신에 '='을 사용하고, @include 대신에 '+'를 사용할 수 있다. scss에서는 사용이 불가능.
    - 전달인자 기본 값 설정 - !default처럼 초기 기본 값을 설정해 둘 수 있다.
```
@mixin border-radius( $radius: 4px ){
    border-radius: $radius;
}
@mixin size($w:null, $h: null){
    width: $w
    height: $h
}
header{
    @include size($h: 80px)
}
//자바스크립트와는 다르게 순서대로 전달인자를 굳이 쓰지 않아도 직접 지정하여 사용이 가능하다.
```
    - $매개변수... ; 멀티백그라운드 같이 하나의 속성에 여러 값을 쓰고 싶은 경우, 매개변수를 일일히 지정하기가 힘들다. 그래서 매개변수에 ... 을 쓰면 매개변수를 하나하나 지정하지 않아도 전달인자에 값을 계속해서 쓰게 된다면 모두 적용이 된다! -> 매개변수를 확장시키고, 가변 매개변수를 사용!
*@content, scope*
* mixin 구문 아래 @content를 넣어 사용하면, mixin에 지정해둔 코드 외에 다른 코드를 사용하여 치환시킬 수 있다.
* 지역 변수처럼 mixin을 사용한 코드 내에서만 해당된다.
정적 믹스인 @mixin 이름{}
동적 믹스인 @mixin 이름(매개변수1, 매개변수2){} - @include 이름(전달인자1,전달인자2)
매개변수 기본 값 설정 @mixin 이름(매개변수1: 기본값1, 매개변수2: 기본값2){}
매개변수 확장 @mixin 이름(매개변수 1, 매개변수2, 변수3, 변수4..){}
가변 매개변수 @mixin 이름(매개변수...){}
콘텐츠 블록 @content
@mixin 이름(매개변수...){
    @content
}
외부 믹스인 호출 시 콘텐츠 블록 코드 전달
@include 이름{
    믹스인 내부로 전달할 콘텐츠 블록(코드 덩어리)
}