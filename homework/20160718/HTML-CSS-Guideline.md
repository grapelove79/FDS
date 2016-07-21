###### HTML/CSS Guide by @youngsun

# 견고한 웹사이트 개발을 위한 HTML and CSS 가이드

1. 환경 및 설정
1. HTML 가이드
1. CSS 가이드
1. 이미지 가이드
1. 네이밍 규약
1. 점검 항목

## 환경 및 설정

### 호환성
#### 필수 브라우저
- IE10(기준) · IE11, Chrome 최신버전, Firefox 최신버전
- 옵션 브라우저
	- Safari 브라우저는 레이아웃이 크게 깨지지 않는 선까지 수용한다.

#### 웹 접근성
- 가이드 라인
	- 한국형 웹 콘텐츠 접근성 가이드라인(KWCAG) 2.1을 바탕으로 웹 접근성을 준수해야 한다.
- 점검 방법
	- 기획, 디자인, 퍼블리싱, 개발 등 각 부서별 웹 접근성 점검항목을 반드시 점검한다. 퍼블리셔, 개발자는 작업 후 페이지별로 OpenWAX를 통해 1차 정성평가를 마친다.

#### 파일 및 폴더 구조
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

### 기본 규칙

#### HTML5 DOCTYPE
- 모든 HTML 페이지의 시작 부분에서 간단한 DOCTYPE이 가능한 모든 브라우저에 표준 모드와 더 일관성있는 렌더링을 적용합니다.
- DOCTYPE은 문서의 최상단에 위치해야 하며, 그 위에 주석이나 스크립트 등의 코드가 오게해서는 안된다.
	
```
<!DOCTYPE html>
```
	
#### 문법
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
	
#### 언어 속성
From the HTML5 spec:

```
<html lang="ko-KR">
  <!-- ... -->
</html>
```

- 다국어 작업시 [국가별 언어](http://www.w3schools.com/tags/ref_language_codes.asp) 코드 참조
	
