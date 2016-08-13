// 문서에서 선택한 요소노드(객체) 참조
// 1. 대상을 선택한다.
// 2. 버튼이 많으면 for문을 사용하여 event로 연결한다.

var page_header = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text = 5;
var limit_up = 40;
var limit_down = 12;

// 검증 
//console.log('page_header:', page_header);
//console.log('increase_btn:', increase_btn);
//console.log('decrease_btn:', decrease_btn);


// ------------------------------------------------
// 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
// ------------------------------------------------
// 비 표준 MS IE 방식 (IE 8-)
// 대상.currentStyle.스타일속성
// ------------------------------------------------
// 표준 W3C 방식 (IE 9+)
// window.getComputedStyle(대상,가상요소).스타일속성
// ------------------------------------------------

// 글자 크기 변경 함수
function changeTextSize() {
	 //console.log('context:', this.firstChild.nodeValue);
	var operator = this.firstChild.nodeValue;
	var _current_text; //전역변수 change_text를 
	// page_header의 글자 크기를 키운다.
	// 글자 크기를 연산이 가능하도록 변경
	// var current_size = parseInt(page_header.style.fontSize);
	 var current_size = parseInt(getStyle(page_header, 'font-size'));
	 
	// 글자 크기를 변경(키움)하여 해당 요소에 설정
	// **문제발생 : + 버튼을 누르면 글씨가 키워지지 않고 줄어들기만 한다.
	//   문제해결 : <button type="button" class="btn-increase-text" area-label="텍스트 크게"> + </button>
	//           html에서는 요소와 + 사이에 공백이 주었고, 스크립트에서는 "+" 양옆에 공백을 만들지 않았다. 
	//           그래서 + 양옆에 공백을 주었더니 해결 함.(공백도 nodeValue이다.)
	console.log( operator );
	if(operator === " + ") {
		_current_text = current_size + change_text;
	} else {
		_current_text = current_size - change_text;
	}
	//console.log(operator)
	
	// 현재 사이즈가 limit보다 크거나 작아지기 때문에 limit_변수 사이즈에서 멈춤 설정
	// 글자 크기를 변경(키움)하여 해당 요소에 설정

	// 방법.1
	if ( _current_text > limit_up || _current_text < limit_down) {
    _current_text = current_size;
  }

  // 방법.2
  //  if (_current_text > limit_up) {
  //  	_current_text = limit_up;
  //  }
  //  if(_current_text < limit_down) {
  //    _current_text = limit_down;
  //  }
  //  

   page_header.style.fontSize = _current_text + 'px';
  // console.log(page_header.style.fontSize);
};


// page_header 요소 객체의 글자 크기 초기화
//page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링 (핸들러 - 바인딩)
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;




// 버튼에 이벤트 핸들링(핸들러 - 바인딩 )
//increase_btn.onclick = function() {
	// page_header의 클자 크기를 키운다.
	//console.log(page_header.style.fontSize);
	//글자 크기를 연산이 가능하도록 변경 
	//var current_size = parseInt(page_header.style.fontSize);
	// 글자 크기를 변경(키움)하여 해당 요소에 설정
	//page_header.style.fontSize = current_size + change_text +'px';
	//console.log(page_header.style.fontSize);
//};

//decrease_btn.onclick = function() {
	// page_header의 클자 크기를 줄인다.
	//console.log(page_header.style.fontSize);
	//글자 크기를 연산이 가능하도록 변경 
	//var current_size = parseInt(page_header.style.fontSize);
	// 글자 크기를 변경(키움)하여 해당 요소에 설정
	//page_header.style.fontSize = current_size - change_text +'px';
	//console.log(page_header.style.fontSize);
//};



 
function getStyle(el, property, pseudo) {
// property는 무조건 문자열로 받아야 한다. 
// pseudo는 가상요소를 가져올때 스타일 속성 값을 가져온다.(디자이너가 가상요소 만들것을 가져올때 ) 
// 가상은 검증 과정을 통해 가지고 와야 한다.

	var value, el_style;
	// 유효성 검사.
	// && 는 and : 둘다 참이면 실행된다.
	// || 는 or : 둘중에 하나가 참이면 실행된다.
	if (el.nodeType !== 1) {
		console.error('첫번째 인자 el은 요소노드여야 합니다.');
	}
	if (typeof property !== 'string' ) {
		console.error('두전째 인자 property는 문자열이어야 합니다.');
	}
	if (typeof pseudo !== 'string' && pseudo) {
	 //pseudo가 무조 건 참이어야 수행된다.

		console.error('세번째 인자 pseudo는 문자열이야 합니다.');
	}


 // CSS 속성 이름이 카멜케이스화
  property = camelCase(property);//camelCase 메소드 질문?

  if ( window.getComputedStyle ) { //좋지 않은 코드다. 왜냐면 한번만 물어보면 되는데 계속 물어보니까!,
    el_style = window.getComputedStyle(el,pseudo);
    if (pseudo && el_style.content === '') {
      return null;
    }
    value = el_style[property];//pseudo우는 차등이기 때문에 빈공간을 만들어 놓고 중간 놓는다.
  } else {
    value = el.currentStyle[property]; //비표준 방식 
  }
  return value;
}

function camelCase(css_prop) {
   return css_prop.replace(/-./g, function($1){
      return $1.replace('-','').toUpperCase();
   });
}

	// css 속성 입력 표기 방식 -> camelCase표기 방식
	// function camelCase(){}
	//정규표현식 (일종의 도구 : )
	// 'box-sizing'.replace(/-/,'') //  -만 찾는 것
	// "boxizing"
	// 'box-sizing'.replace(/-./,''); // .은 하나의 문자를 찾는 것.
	// "boxizing"

	// 'font-size'
	// "font-size"
	// 'font-size'.replace('s','S'); //어떤구문을 어떻게 바꿀것인가? 
	// "fontSize"
	// 'images/cont-img-tumbnail.jpg'.peplace('-thumbnail','')
	// "images/con-img.jpg"


	// 비표준 Ms IE 방식
	// $0
	// 비표준 Ms IE 방식
	// $0.currentStyle.fontSize
	// 비표준 Ms IE 방식 (ie 8-)
	// $0.currentStyle
	// 표주 W3C 방식 (ie 9+)
	// window.getComputedStyle(대상, 가상요소).스타일 속성
	// window.getComputedStyle($0,null).fontSize
	// "32px"

	// $0
	//pseudo 값을 가져옴 
	// getStyle($0, 'marginTop', '::after')
	// '32px'



