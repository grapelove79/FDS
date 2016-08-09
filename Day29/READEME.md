###### Front-End Develop SCHOOL
# DAY29_JAVASCRIPT
[참고 http://demo.yamoo9.net/aria-tabs/](http://demo.yamoo9.net/aria-tabs/)

```
// undefined, null 이 객체가 아닌 이유
// Object // 생성자/함수, Constructor
// 모든 객체의 종(소유한 능력)
// .toString()

// Number, String, Boolean, Array, Function, Object, Math, Date, RegExp, ...
// 위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

!!'날이 더워요.'.toString
```

## DOM Traversing
- [선택] 현재 선택한 대상 el
- [탐색] 부모노드 el.parentNode
- [탐색] 첫번째 자식노드 el.firstChild, childNodes[0]
- [탐색] 마지막 자식노드 el.lastChild,  노드.childNodes[노드.childNodes.length - 1]
- [탐색] 이전 형제 노드 el.previousSibling
- [탐색] 다음 형제 노드 el.nextSibling
- [탐색] 자식 노드들 el.childNodes
- [탐색]은 하기 쉽지 않아 사용을 잘 하지 않았지만 jQuery는 탐색이 쉽게 해준다.

```
<div id="parent">
    <div class="child">
        <div class="children">child 1</div>
        <div class="children">child 2</div>
        <div class="children">child 3</div>
        <div class="children">child 4</div>
        <div class="children">child 5</div>
    </div>
    <div class="child">
        <div class="children">child 1</div>
        <div class="children">child 2</div>
        <div class="children">child 3</div>
        <div class="children">child 4</div>
        <div class="children">child 5</div>
    </div>
    <div class="child">
        <div class="children">child 1</div>
        <div class="children">child 2</div>
        <div class="children">child 3</div>
        <div class="children">child 4</div>
        <div class="children">child 5</div>
    </div>
</div>
```
```
var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

// parent_el 변수에 참조된 객체의 자식 노드들을 수집
console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드 개수', parent_el_child_nodes.length);

console.log(0, parent_el_child_nodes.item(0).nodeType);
console.log(1, parent_el_child_nodes.item(1).nodeType);
// 위와 같은 결과
console.log(1, parent_el_child_nodes[1].nodeType);
console.log(2, parent_el_child_nodes.item(2).nodeType);
console.log(3, parent_el_child_nodes.item(3).nodeType);

// 미리보는 자바스크립트의 반복 구문

// while, do ~ while , for, for ~ in, for ~ of, forEach
for (var i =0; i <9; i = i +1) {
//console.log('i: ', i)
console.log(i, parent_el_child_nodes.item(i).nodeType);
}
// 미리보는 자바스크립트의 조건 구문
// if ~ else, switch case default break, 3항식
for (var i =0; i <9; i = i +1) {
   if (parent_el_child_nodes.item(i).nodeType===1) {
       console.log('현재 노드는 ELEMENT_NODE');
   } else { console.log('현재 노드는 TEXT_NODE');
   }
}
// 크롬에서 콘솔창 출력 스타일링 하기
console.log('%c some text', 'background: #222; color: #f00')
// #parent .child:first-child 요소의 자식노드를 순환하여 노드 유형 로그하기
// children => 요소 노드만 수집한다
var parent_el_first_child_el =parent_el.children[0];
var test_list =parent_el_first_child_el.children;
var test_list_len =test_list.length;
for (i =0; i < test_list_len; i++) {
   console.log(test_list[i].nodeType);
}
```

- 노드.children // 그 안의 요소만 가져옴. 빈칸은 textnode인데 가져오지 않으므로 편리하다.

$0.children[0] // 첫번째자식요소 찾음
$0.children[$0.children.length -1] // 마지막 자식요소 찾음
$0 은 콘솔창에서 가리키는 요소

## 노드(node)의 유형/이름/값을 출력하는 방법

속성 | 특성
-|-
nodeType | 노드의 타입 반환(요소노드는 1, 텍스트노드 3, 주석노드 8)

nodeName( tagName) | 요소의 이름을 문자(대문자)로 반환.  텍스트노드의 경우는 #text로 반환. 요소의 경우 DIV처럼 대문자로 반환
- 노드.nodeName.toLowerCase(); 라고하면 소문자로 반환
- 노드.tagName도 쓸 수 있다. (예전방식)




nodeValue
( data )

Text 노드에서만 접근 가능, ELEMENT_NODE는 null 반환, 텍스트 노드의 실제 값 반환

- nodeType

    - ELEMENT_NODE = 1
    - TEXT_NODE = 3
    - COMMENT_NODE = 8

- 요소를 탐색할 때 고려할 수 있는 DOM API (단! IE 9 이상에서만 작동)

       --> 직접적인 요소를 선택할 수 있는 방법(Traversal Properties)크로스브라우징 helper function만들어 사용!

    - 노드.firstElementChild      : 자식중에서 첫번째 요소 노드를 반환
    - 노드.lastElementChild             : 자식중에서 마지막 요소 노드를 반환
    - 노드.previousElementSibling : 노드의 이전 위치에 자리한 형제 요소 노드 반환
    - 노드.nextElementSibling     : 노드의 다음 위치에 자리한 형제 요소 노드 반환
    - 노드.parentElement          : 노드의 부모 요소 노드 반환

NODE Information
HTML DOM 방식의 속성 접근 방법, 웹 초창기 때부터 존재했던 속성들

<div id="parent" class="papa" data-con="true" role="tab" aria-hidden="false"> 일 때...

var parent_el = document.getElementById('parent');
console.log('id:', parent_el.id); // 'parent' 출력
console.log('class:', parent_el.className);
console.log('title:', parent_el.title);
// title은 마우스 올렸을 때 나오는 문구. 필요할때 : a 링크를 클릭하면 새창이 뜬다..
이럴 때처럼 예측이 가능하도록 해줄 때. --> 모바일에선 title은 적용 안되므로 접근성에 안좋을 수 있으니 조심~

// 예전방식은 위처럼 id, className, title만 되고
// 아래처럼 role, data-*, aria-* 같은 속성은 안된다.
console.log('role:', parent_el.role); // undefiend
console.log('data-:', parent_el['data-con']); // undefiend

// 아래처럼 getAttribute로 해야한다.
console.log('role:', parent_el.getAttribute('role'));
console.log('data-con:', parent_el.getAttribute('data-con'));
console.log('aria-hidden:', parent_el.getAttribute('aria-hidden'));

var parent_el = document.getElementById('parent');

parent_el.id
parent_el.className  (class는 예약어)
parent_el.title

그렇다면 새롭게 등장한 속성들은 어떻게 가져오는가?(data-*, role, aria)

<div id="parent" role="group" aria-hidden="true" data-container="false"></div>

parent_el.getAttribute('role');
parent_el.getAttribute('data-container');
parent_el.getAttribute('aria-hidden');

DOM Method
hasChildNodes(): 자식이 있으면 true, 자식이 없으면 false

parent_el.hasChildNodes() // true

// #parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하기
// 전역을 오염시키지 않는 방법. 이 또한 전역변수이지만..
// for문에 사용되는 변수이므로 한꺼번에 복사해도 되도록
var parent_childs = parent_el.getElementsByTagName('div');

for (var child, i = 0, len=parent_childs.length; i < len; i++){
    child = parent_childs[i]
    if ( !child.hasChildNodes() ) { //
        console.log(child)
    }
}

- document.getElementById('ID_NAME')
- document.getElementsByClassName('CLASS_NAME')
- document.getElementsByTagName('element_NAME') ( IE9+ )

var container = document.getElementsByClassName('container');
// 유사 배열에 담겨서 나온다

- document.querySelector('css selector')

    - querySelectorAll('css selector')[0]과 같다, 막강!!! IE8이상. 원하는 대상 바로 선택. 첫번째 하나만 반환
- document.querySelectorAll('css selector')
    - 막강!!! IE8이상. 원하는 대상 바로 선택. 전체 복수로 반환
    - .querySelector() === .querySelector()[0]
- IE 8 이상 지원
- jQuery보다 빠르다

document.querySelector('#parent > .child:nth-child(3)');

노드 만들기

문서 객체를 동적으로 생성한다

- createElement('element')
- createAttribute('attribute')
- createTextNode('text')

var maked_div = document.createElement('div');

var maked_ul = document.createElement('ul');
var maked_ul_li = document.createElement('li');

var maked_div_text = document.createTextNode('this is division');
var maked_li_text = document.createTextNode('this is list item');

노드 조작
문서 객체를 동적으로 조작한다, node 만들기. 동적 생성

- document.createElement('element')
    - html 요소 만들기. 실제 DOM에 붙는건 아니다.

- document.createAttribute('attribute')

    - 안씀
- document.createTextNode('text')
    - 텍스트 노드 만들기
- 부모노드.appendChild(자식노드)
    - 부모의 꽁지쪽에 붙이기
    - 모달의 경우 이렇게 붙여서 aria로 연결시키고, role="dialog"라고 붙이면 리더기도 제대로 접근하게 된다.
    - 앞에 붙이는 건 없으니, 함수로 만들어서 붙이자. 헐~
- 목표노드.부모노드.insertBefore(insert삽입할노드, target목표노드)
    - 노드 ~ 앞에 삽입
- node.removeChild(childnode)
- node.replaceChild(alternate, target)

    - replacedNode = parentNode.replaceChild(newChild, oldChild);
- node.cloneNode(boolean)
    - false가 기본값 ul이면 ul만 복제. true면 ul과 자식까지 복제
- element.innerHTML

    - 위의 것들을 손쉽게 해줌

// 동적으로 생성한 텍스트를 역시나 동적으로 생성한 div에 추가
maked_div.appendChild(maked_div_text);

// 동적으로 생성한 div 요소를 문서의 특정한 목적지에 추가
document.querySelector('#parent > .child:last-child').append(maked_div);

maked_ul_li.appendChild(maked_li_text);
maked_ul.appendChild(maked_ul_li);

var target_container = document.createElement('div');
target_container.appendChild(maked_ul);

document.body.appendChild(target_container);
// 혹은
var target = document.body.firstChild;
target.parentNode.insertBefore(target_container, target)

undefined(아니다), null(존재자체를 부정.없다)이 객체가 아닌 이유?
Objdet   //생성자/함수, Constructor
모든 객체의 종(소유한 능력)
.toString()- 객체를 증명하는 사실

객체 : Number,String, Boolean, Array, Function, Object, Math, Date, RegEx, ....
위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

느낌표 !! 2개는 형변환이 일어난다.
저 값이 true, false을 확인하기 위해.!!두개 붙여주면 Boolean 값을 나타낸다.

!!'날이 더워요'.toString //문자여서 괄호( )를 안붙여 준다.
--> true

!!(2016).toString
--> true

!!(null).toString
--> Error (객체가 아니다.)

!!(undefined).toString
--> Error (객체가 아니다.)

괄호( )는 데이타값를 wraping할때 사용한다.
(data).call(content)

컴파일러() 이미 사전에 해석된 것 (더 빠름)
인터프리터() : 동시 통역

속성은 지울 수 있는데
변수는 지울 수 없다.
이미 전에 변수를 정의해 주었으면 똑같은 변수를 또 쓸때 이미 정의 되어 있기때문에 똑같은 변수를  덮어쓰는 것으로
var라는 키워드를 안써줘도 된다.

$0는 콘솔창에서만 쓸 수 있다.
$0.children
<div class="children">Children 1</div>
<div class="children">Children 2</div>
<div class="children">Children 3</div>
<div class="children">Children 4</div>
<div class="children">Children 5</div>

$0.children[0]
<div class="children">Children 1</div>

$0.children[$0.children.length -1] // lastchild 5-1 =4
<div class="children">Children 5</div>

$0.children[$0.children.length -2] // lastchild 5-2 =3

Children : 모든자식요소찾기
Children은 모든 ie에서 지원
document.codumentElement.firstChild; 첫번째 자식 노드 찾기

nodeName : 대문자로 반환
nodeType :
nodeValue : 텍스트노드한테만 있다.

firstElementChild (ie8이하 지원안됨. ie9이상지원)

scrollY,  scrollYOffset,  scrollTop: 스크린에서만지원

DOM API

IE8 이하

IE9 이상

***기존의 방식은 id,cass 점(.)찍는 방식이나 대괄호로[ -]묶어서 가져왔는데, 새롭게 등장한 속성들 (' ')로 묶어서 불러온다.
data-*, aria-*, role, ...

// consone.log('parent_el.role:' , parent_el.role);
data-container="true" aria-hidden="false"

객체의 속성 -의 속성들의 접근방식은   점(.)을 찍는 방식이 있고 또는 대괄호를 묶어서  ['_'] 쓰는 방식이 있다.
object.속성
object.getAtrribute('속성이름'); 이렇게 속성을 가져와야 한다.

document
- creatElement("element")
- createAttribute(" ")

$0.hasChildNodes()
--> true

hasChildNodes가 있니?
!child[t].hasChildNodes()--> 자식노드가 없다. false
child[t].hasChildNodes()--> 자식노드가 없다. false

유사배열

https://developer.mozilla.org/en-US/docs/Web/API/NodeList
배열은 대괄호 안에 [ ] 큰따옴"" 묶음들이 있다.
배열  ["","","",""]
유사배열은  배열처럼 보이지만 배열이 아닌 것이다. 유사배열은 배열객체의 기능(shift( ), ...)이 안된다
노드 리스트는 유사배열이다. shift( )가 안된다.
유사배열 [<div class="child">..</div>, <div class="child">..</div>, <div class="child">..</div>, <div class="child">..</div>]
childs.shift();

CSS 선택자를 통해 문서 객체를 선택하는 방법
(css선택자로 바로 가져올 수 있다.) IE 8+ 지원
.querySelector('#id .class'); (단수)
.querySelectorAll('#id .class'); (복수 )
.querySelectorAll() === .querySelectorAll()[0]

querySelector('css selector') //단수
querySelectorAll('css selector') //복수

document.querySelector('#parent > .child:nth-child(3)')
document.querySelectorAll('#parent *')[0]
document.querySelectorAll('#parent *')

요소노드 만들기
document.creat

 부모_노드.appendChild(자식노드) : 부모의 꼬리쪽에서 부터 붙이는 것.
preAppend는 정식으로 지원하지 않는다. 필요하다 싶으면 만들어야 한다.