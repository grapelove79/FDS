###### HTML/CSS Guide by @youngsun

# 견고한 웹사이트 개발을 위한 HTML and CSS 가이드

![ HTML and CSS 가이드](mk_pro_cover.jpg)

1. 환경 및 설정
1. HTML 가이드
1. CSS 가이드

## 환경 및 설정

### 필수 브라우저
- IE10(기준) · IE11, Chrome 최신버전, Firefox 최신버전
- 옵션 브라우저
	- Safari 브라우저는 레이아웃이 크게 깨지지 않는 선까지 수용한다.

### 웹 접근성
- 가이드 라인
	- 한국형 웹 콘텐츠 접근성 가이드라인(KWCAG) 2.1을 바탕으로 웹 접근성을 준수해야 한다.
- 점검 방법
	- 기획, 디자인, 퍼블리싱, 개발 등 각 부서별 웹 접근성 점검항목을 반드시 점검한다. 퍼블리셔, 개발자는 작업 후 페이지별로 OpenWAX를 통해 1차 정성평가를 마친다.

### 파일 및 폴더 구조
- 이 구조는 가장 일반적인 형태이며, 프로젝트의 규모에 따라 폴더 뎁스를 가감할 수 있다. 각 카테고리 명 및 HTML 파일은 폴더 및 파일 네이밍 규칙을 준수하도록 한다.

```
css/
	font/						웹폰트
	grid.css 					그리드 스타일 정의
	default.css 				리셋 스타일, 전역 스타일 정의
	layout.css 					레이아웃(헤더, 푸터, 사이드 바 등) 템플릿 스타일 정의
	common.css 					공통(버튼, 탭메뉴, 박스, 불릿, 서식 등) 스타일 정의
	content.css 				각 서브페이지 스타일 정의
	main.css 					메인페이지 스타일 정의
	popup.css 					팝업 레이아웃 및 스타일 정의

images/
	layout/ 					레이아웃(헤더, 푸터, 사이드 바 등) 관련 이미지
	common/ 					공통(버튼, 탭메뉴, 박스, 불릿, 서식 등) 관련 이미지
	content/ 					각 서브페이지 이미지
	각카테고리/
	main/ 						메인페이지 이미지
	popup/ 						팝업 이미지

js/
	jquery-1.10.1.min.js 		jQuery 라이브러리
	ui.js 						레이아웃 및 공통 UI(GNB, 탭메뉴 등) 컨트롤
	main.js 					메인페이지 컨트롤

각카테고리/
	guide.html 					HTML 가이드
	index.html 					메인 페이지
```


## HTML 가이드

### HTML5 DOCTYPE
- 모든 HTML 페이지의 시작 부분에서 간단한 DOCTYPE이 가능한 모든 브라우저에 표준 모드와 더 일관성있는 렌더링을 적용합니다.
- DOCTYPE은 문서의 최상단에 위치해야 하며, 그 위에 주석이나 스크립트 등의 코드가 오게해서는 안된다.
	
```
<!DOCTYPE html>
```
	
### 문법
- Soft teb 사용한다. 코드는 모든 환경에서 동일한 렌더링을 보증할 수 있는 유일한 방법이다.
	
```
<!DOCTYPE html>
<html>
  <head>
    <title >Page title </title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```
	
### 언어 속성
From the HTML5 spec:

```
<html lang="ko-KR">
  <!-- ... -->
</html>
```

- 다국어 작업시 [국가별 언어](http://www.w3schools.com/tags/ref_language_codes.asp) 코드 참조.

### IE 호환 모드
- Internet Explorer에서 IE의 버전을 지정하는 문서 호환성 <메타> 태그의 사용을 지원합니다. 
- 최신모드로 지정된 DOCTYPE에 상관없이 IE8 이상 버전에서 항상 최신 표준 모드로 렌더링됩니다.

```
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

- 더 많은 정보를 위해 [awesome Stack Overflow article](http://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do) 참조.

### Character 인코딩
- 빠르고 쉽게 명시적인 문자 인코딩을 선언함으로써 콘텐츠의 적절한 렌더링을 보장합니다. 

```
<head>
  <meta charset="UTF-8">
</head>
```

### HTML5 용 레이아웃 가이드
- Wrap을 relative로 하여 Minidaum을 상단으로 올리는 형태
- article : 태그 자체로 완전한 하나의 개별 컨텐츠 article은 그 안에 section을 가질 수 있음
= section : 제목 태그(Heading Tag)를 지닌 영역 구분

```
<div id="Index"> <!-- 웹접근성용 바로가기 링크 모음 -->
    <a href="#Body">본문 바로가기</a>
    <a href="#Gnb">메뉴 바로가기</a>
</div>
<article id="Wrap" class="서비스명_type1"><!-- position:relative 적용 / 레이아웃 관련 클래스 적용 -->
    <header id="Head">
        <h1>
            <a id="Logo">로고(text)</a>
            <a id="ServiceLogo">서비스명(text)</a>
        </h1>
        <ul id="RelServices">관련서비스들</ul>
        <nav id="Gnb">GNB</nav>
    </header>
    <article id="Content"  class="cont_폴더명"><!-- 대메뉴별(폴더명) 관련 클래스 적용 -->
        <!-- 알아서 구성 -->
        <div id="cSub">#cSub or #cFeature 페이지내 의미에 따라 구분하여 사용</div>
        <!-- 컨텐츠의 기본 영역(body Main) -->
        <div id="cMain">
            <nav id="mNav">#mNav</nav>
            <div id="mSub">#mSub or #mFeature</div>
            <article id="mArticle">
                <h2 id="Body">서비스명 본문</h2>
                <!-- Body 본문바로가기 링크임 - 페이지별 위치 및 element 명은 서비스에 맞게 변경하여 사용-->
            </article>
            <aside id="mAside">#mAside</aside>
            <div id="mEtc">#mEtc</div>
        </div>
        <!-- 기타 하단 Etc 영역(body Etc) -->
        <div id="cEtc">#cEtc</div>
    </article>
    <footer id="Foot">
        copyright
    </footer>
    <div id="UI__minidaum"></div><!-- //position:absolute로 상단 위치. cgi 수정작업 전까지는 기존 id를 유지 -->
</article>
```
### 필수 attributes

#### 흔히 누락하는 애트리뷰트
필수 애트리뷰트는 누락시 문법 오류로 검출되므로, 값이 없을 경우라도 누락해서는 안된다.
- 흔히 누락하는 애트리뷰트
```
<img src="" alt="" />
<table border="1" summary=""></table>
<form action=""></form>
<iframe src="" title=""></iframe>
<frame title="" />
```

#### 개발상의 이유로 비어있는 프레임을 사용할 경우 title="빈 프레임"으로 기입한다.

```
<ifrmae src="sample.html" title="빈 프레임" scrolling="no"></iframe>
```

#### CSS and JavaScript 포함
CSS와 JavaScript파일을 포함할 때 HTML5공식 문서에 의한면 일반적 유형이 각각 기본으로 설정되어있기 때문에 text/css와 text/javascript를 지정할 필요가 없다.

_HTML5 spec links_
- [Using link](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [Using style](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [Using script](https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

```
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```

#### html표준 사용을 할때 의미부여를 제대로 해서 사용해야하는데 실용적이지 못하면 굳이 그럴 필요없다.

## CSS 가이드
### 기본 정책

- CSS 파일 최상단에 언어셋을 지정한다.
- CSS 데이터를 로딩할 경우 @import 방식은 사용하지 않는다. (일부 브라우저에서 이미지 로딩 후 적용되기 때문에)
- external방식에서는 charset 표기한다.

```
@charset "utf-8"
```
- CSS 데이터는 섹션의 경우 head 상단에 공통부분(common.css)과 콘텐츠부분(해당서비스.css)으로, 간단한 콘텐츠의 경우 하나의 - css 파일로 로딩될 수 있도록 권장한다.
- 외부 스타일시트(<link />)를 사용한다. (@import는 일부 브라우저에서 HTML 문서 로딩 후에야 로드됨)

```
<link rel="stylesheet" href="yozm_common.css" /> <!-- reset, common요소 -->
<link rel="stylesheet" href="yozm_top.css" /> <!-- 콘텐츠관련 -->
```

### 문법

- 두번의 스페이인 soft tabs를 사용한다. 보증 코드를 모든 환경에서 동일하게 렌더링하는 유일한 방법이다.
- 선택자를 그룹지을때 한줄의 선택자는 독립적으로 유지한다.
- 가독성을위한 선언 블록의 시작 중괄호 앞에 공백을 포함한다.
- 새로운 줄에 선언 블록의 닫는 중괄호를 배치한다.
- prefix 속성 값이나 color 매개변수에서 leading zero를 넣지 않아도 된다.(예를들어, 0.5대신에 .5 그리고 -0.5px 대신에-.5px)

```
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 단위

#### 상대단위 (px, em, ex, %, rem)
> - px
 	- pixel을 기준으로 브라우저에는 고정적이지만 표시장치(기기의 해상도)에 따라서 상대적인 크기를 갖는다.
	- 1px = 1dot
 - em
 	- 해당폰트의 대문자 M의 너비를 기준으로 값을 가진다.
- ex
 	- x-height
 	- 해당폰트의 소문자 x의 높이를 기준으로 값을 가진다.
- %
 	- percent
 	- 기본글꼴의 크기에 대해 상대적으로 값을 가진다.
- rem
 	- root em
 	- 최상위 요소의 크기에 대해 상대적으로 값을 가진다.
 	
#### 절대단위 (in, cm, mm, pt, pc)

> - in
	- inch 단위로 계산
	- 1inch = 2.54cm
- cm
	- centimeter 단위로 계산
	- 1cm = 10mm
- mm
	- 단위로 계산
	- 10mm = 1cm
- pt
	- point 단위로 계산
	- 1pt = 1/72inch
- pc
	- pica단위로 계산
	- 1pc = 12pt










