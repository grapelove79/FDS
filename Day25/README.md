#DAY25
##Sass 복습

### 변수
- 변수 앞에는 항상 `$`를 붙인다.
- .sass 내에서는 들여쓰기 내부, .scss 내에서는 중괄호 내부에 선언된 변수는 지역 변수로 쓰인다. 지역 변수는 해당 영역에서만 사용이 가능하다. 단, 지역 변수 뒤에 `!global` 옵션이 붙게 되면 전역변수처럼 사용이 가능하다.
- `!default` 옵션이 변수 뒤에 붙게 되면 `null`인 데이터 유형을 제외하고 가장 마지막에 적용되는 기본 값으로 설정된다.

### 데이터 유형
- 숫자`Number` ex) 5em, 12px
- 문자`String` ex) Times, "Times New Roman"
- 색`Color` ex) red, #ff0, rgb(255,255,0), hsla(320, 100%, 50%, 0.4)
- 논리`Boolean` ex) true, false
- 집합`list` ex) 10px auto 20px / 공백으로 구분되는 것은 다 list, 콤마로도 구분이 가능하다
- 맵`Map` ex) h1: 22px, h2: 18px, h3: 14px 1.51/ h1,h2,h3은 key가 되고, 값은 value가 된다. value에는 list가 들어올 수도 있다.
- 비어있음 `null`

##### 보간법(interpolation)
`#{$변수}`
- 특정 문자열 내에서 접합이 가능하다.
- 미디어 쿼리 구문 or 선택자 조합 or 웹 폰트의 폰트 정보에 변수를 처리할 경우 사용한다.
- 폰트 속기형 작성 시, 나눗셈 연산으로 처리되지 않게 하기 위함.

### 연산자
- 할당 연산자 ':'($변수`:`값)
- 사칙 연산자
    - + (문자에 사용할 경우, 문자 접합 가능)
    - -
    - *
    - /
    - %
- 비교 연산자
    - >
    - <
    - >=
    - <=
    - ==
    - !=
- 기타 연산자
    - and
    - or
    - not 부정

### 믹스인
- `@mixin` 지시자를 사용하여 정의한다. (.sass 에서 `=`로 대체가능.)
- `@include` 지시자를 사용하여 정의된 믹스인을 호출한다. (.sass 에서 `+`로 대체가능.)
- 기본적으로 매개변수(파라미터)가 설정되어 있지 않은 믹스인을 정적 믹스인이라 한다. (확장되어 있지 않은 상태)
- 대체 선택자가 믹스인보다 잘 쓰이는 경우? ex) `common.css`
(대체 선택자를 미디어쿼리에 넣어 사용하는 것은 아직까지 좀 어렵다!)
- 전달인자(아규먼트)를 설정한 믹스인을 동적 믹스인이라고 한다. (확장 가능한 상태)
- 전달인자는 Sass의 변수와 유사하기에 변수 전달인자 앞에 `$`를 붙여야 하며, 각 인자는 콤마로 구분된다.
- 전달인자의 값을 설정하는 구문이  있다면 해당 인자는 선택사항이다. ex) $arg: value
- 전달인자가 다수일 경우에 이를 줄여 표현할 수 있다 ex) $args...
- 줄여서(...) 전달하는 인자 표현식에서 맵 데이터 유형을 사용할 경우, $를 제외한 키(key)를 전달하여 처리 가능하다. (반복문 없이)
- 믹스인 내부에 @content를 사용하면 믹스인 호출 과정에서 믹스인 내부에서 처리될 콘텐츠를 전달하여 코드를 섞을 수 있다.



##Sass 기본 문법
### function

**컬러함수**
* set
- rgba($color, $alpha)
- rgb($red, $green, $blue)
* get
- $my-color : #291039 -> red($my-color) = 41/green($my-color) = 16
* 혼색함수 mix
- mix(#f00, #00f) => #7f007f
=> hsl 값은 실제 포토샵에서 쓰이는 것과는 많이 다르다. hsl값을 던지면 헥스코드, hsla값을 던지면 rgba값으로 변환이 가능하다! hsl값은 되도록 쓰지 않는 것이 나을 수도 있다.
```
@function hsla($hex, $alpha: 1)
    // 실행: hsla(#393909, 0.4) 
    // 결과: hsla(hue, 채도, 명도, 알파값)
    $hue: hue($hex)
    $saturation: saturation($hex)
    $lightness: lightness($hex)
    $result: hsla($hue, $saturation, $lightness, $alpha) = 이건 rgba값으로 변환 된다
    $result: "hsla(#{$hue}, #{$saturation}, #{$lightness}, #{$alpha})" = 변환되는 것을 막기 위해 문자열 처리를 시킨다. 
```
-adjust-hue($color, $degrees)
-lighten($color, $amount)
-darken($color, $amount)
-saturation($color, $amount)
-desaturate($color, $amount)
-grayscale($color)
-complement($color) 보색
-invert($color)반대색 명도와 채도 전부 반전
-alpha($color) & opacity($color)
-fade-out($amount) 점점 투명
-fade-in($amount) 점점 불투명

*숫자함수*
-percentage(10px/960px) 퍼센트 함수
-ceil 올림함수
-round 반올림함수
-floor 내림함수
-min (10px/12px) 비교하여 둘 중 작은 값을 반환
-max(10px/12px) 비교하여 둘 중 큰 값을 반환함.

* 수업 복습 내용을 다시 확인해 볼 것!
* Sass의 라이브러리는 따로 참고하거나 보강~

*사용자함수*
@function

**조건문**
IF $USING-SASS 

*if함수*
조건이 참일 경우 실행하는데 한번만 실행이 된다!
has-brother ? true : false
//삼항식을 사용 가능하다. 삼항식의 거짓 조건에도 삼항식을 
$변수 : if($lightness)

*반복문*
* while ; if문과 흡사하나, 조건이 참이 경우에 계속 반복이 된다. 
```
@if 조건{
    조건이 참인 경우, 코드 블록문이 처리
}
=> if문은 딱 한번만 처리됨!

@while 조건{
    조건이 참인 경우, 코드 블록문이 처리
}
=> 조건이 참인 경우 계속 반복, 무한 반복
```
```
$i: 1;
$count: 24;
$unit-width: 130px
$gutter: 30px
$gutter-direction: after

%cf::after
    display: block
    clear: both
    content: ''

%col
    $gutter-direction: split !default
    float: left
    @if $gutter-direction == split
    margin: 
        left: $gutter/2
        right: $gutter/2
    @if $gutter-direction == before
        margin-left: $gutter
    @if $gutter-direction == after
        margin-right: $gutter
    @if $gutter-direction == inside
        padding:
            left: $gutter/2
            right: $gutter/2

@function width($n){
    @return $unit-width * $n + $gutter * ($n -1);
}

@while $i <= $count {
    .grid .unit-#{$i} { width: width($i);}
    $i: $i +1;
}

//while 구문의 i가 참일 동안, 구문 안에 함수 실행이 반복해서 이루어진다.
```

* @for문
일정구간을 돌릴 때 (구구단처럼)
```
$total: 12
@for $k from 1 through $total //to는 $total 전까지, through $total까지! 변수에 +1을 일일히 적어줄 필요없다 
    .grid 
        @extend %cf
    .col-#{$k}
        @extend %col
        width: width($k)
```
*each문
list나 map이랑 같이 쓰인다.
