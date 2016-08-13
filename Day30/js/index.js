// .querySelectorAll()메소드를 단축하여 사용할 수 있는 헬퍼 함수
function queryAll(selector_str, context) {
	// 사용자가 올바른 데이터를 전달하였는가? 검증
	if (typeof selector_str !== 'string') {
		// 조건이 참이 되면 오류 발생
		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
	}
	// context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context 값을 전달하지 않았을 경우는 undefined이다.
	// if(typeof context === 'undefined')
	if (!context) { context = document;}
	return context.querySelectorAll(selector_str);
}
function query(selector, parent) {
	return queryAll(selector, parent) [0];
}

function queryItem(selector, index, context) {
	if(!index) { index = 0; }
	return queryAll(selector, context)[index];
}

// function $q {

// }


// 문서 객체(노드)를 제거하는 헬퍼 함수
function removeNode('node'){
  modal.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// '요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입'
// 인자이름과 변수 이름이 같으면 안좋다. 
// 왜? 호이스트라는 개념 때문에 문제가 발생할 염려가 있기 때문에 이름을 다르게 주는 게 좋다.
function createNode('element', 'text') {
	var elementNode= document.createElement('element'); //요소로 생성 
	var textNode = document.createTextNode('text');
	elementNode.appendChild(textNode);
	return elementNode
} 

function createNode('element', 'text') {
	var elementNode= document.createElement('element'); //요소로 생성 
	if (typeof text !== 'undefined' && typeof text === 'string') {  
	// 만약 조건문에 if(text) 만 넣으면 에러가 생긴다.
	// 어떤 값이 전달 됐다면 &&는 모두가 참일 때 실행 
	// 텍스트 사용자가 전달하지 않을 경우, 단 반드시 요소가 있어야 한다.
		var text_node = document.creatTextNode(text);
		elementNode.appendChild(textNode);

	}
	elementNode.appendChild(textNode);
	return elementNode
} 
