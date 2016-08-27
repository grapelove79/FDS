###### Front-End Develop SCHOOL

# DAY 40_JQuery

```
filter(수집된것을 걸러내는 것) VS find(안에 있는 것들을 찾아오는 것)
```

## Filter
- .is는 조건구문에서 쓴다(참 또는 거짓을 물어본다, 조건 처리할때)
- .each()필터 함수는 Array의 forEach와 유사하다., jquery객체를 돌려줌. (for문에 비해 느리다.)  --> forEach는 크로스브라우징이 안된다.느리다.
- 네이티브가 빠르다. 
- if문인데 조건이 많은면 switch문을 쓴게 좋다.
- .slice()는 원래 Array메소드이다. 
	- .slice(원소 갯수)는 원소갯수만큼 필터.(가져온다.)
	- .slice( 시작 원소, 원소를 뺀 앞에 원소)를 추출하는 것. 첫번째 인자와 두번째 인자 사이에 원소를 필터하는 함수
- finding은 


## Finding
####find( selector )함수 
- 수집된 대상을 찾아오는 것이다.(자식, 자손 다 포함된다.)
```js
$('li').filter(':last')
// li중 수집된 대상에서 맨마지막 것을 반환한다. 
```
```js
// 수집된 그 안에 자식, 자손을 찾아오는 것이다.
$('li').find(':last') // 마지막 자식의 자손들
$('li').find(':a')  // 자식들
```
- .prev([selector])
- .nextAll([selector]):  뒤에 있는 것들의 모든 것들 찾는 것.
- .nextUntil([selector]) : 수집하다 해당 선택자가 나오면 그 전까지 멈추는 것.
- .siblings([selector]) : 형제요소들(앞, 뒤 모두)을 찾아 jQuery 객체로 반환(return)합니다.(나빼고 나머지 형제들)
- .parent([selector]): 부모가 맞다면 
- .parents([selector]): 부모들을 중에 찾아 오는 것(조상까지 가능)
- .parentsUntil([selector]) : 부모중에 선택자 전 부모들까지
- .conents(): 전달된 인자가 없는 상태에서 모든 노드(node)들을 찾는 것이다.(전달인자 원래 없다.)
- .closest(selector, [context]): closest()함수는 ()안에 전달된 값을 통해 일치하는 부모 요소 중, 가장 가까운 요소를 반환한다.
- .add(selector | element | htmlString | jQuery | selection | [selector, context])
```js
$gnb.clone().add('<div class="add">this is youngsun </div>').appendTo('body');
```
- .addBack(): 부모와 자손(find)에서 수집된것을 포함해서
- .end() : 부모를 수집하고 나서 자손(find)에서 수집했는데 end()나오면 그 자손을 제외한 부모만 수집한다.

##Manifulation
-  jQuery(html)

```js
$('<blockquote>')
.text('this is block quotation.')
.prependTo('body')		//자식에서 시작할때.부모앞에다 붙이는 것
// 목적지가 뒤에 있을땐 to를붙인다.

.prepend                // 부모부터 시작할때
```
- .html([html | function])
- .attr : 속성을 추가하거나  가저오거나 한다.

```js
$('h2').attr('class')					//'ally-hidden'
$('h2').hasClass('ally-hidden')    	// true
$('.ally-hidden:first').is('h2')		// true
$('form').find('input').attr('type')	// "text"


//getter
$('p').atrr('class')

//setter
$('p').first().atrr('class')
$('p').first().atrr('class',function(){
	console.log(argument);
});


또는,
$('p').first().atrr('class',function(index, old_class){
	return ':(${old_class}/${old_class} :-)'; //ECMAScript 2015 스트링 템플릿
});

```
- .removeAttr(인자): 인자가 꼭 필요한다( 문자), 속성을 지우는 것

```js
$('.gnb-hidden:eq(1)').removeAttr(type)
```
- .prop(): form에서 사람이 입력해서 변경되는 값을 찾는것

```js
$('form').find('input').prop('value')		// "사람이 입력한 내용"


$('form').find('input').val()		// "desinger"
$('form').find('input').prop('value')	// "desinger"
```
## Inset! in
jQuery - 요소 내부 앞, 뒤에 삽입

```js
$('.gnb')

$('.gnb').prepend('<div class="prepend>Prepend Child Content</div>')

$('.gnb').append('<div class="Append>Append Child Content</div>')

$('<div>',{
	'attr': {'class': 'prepend'},
	'text': 'Prepend Child Content 2.'
}).prependTo('.gnb'); 	// [<div class="prepend">Prepend Child Content 2.</div>]
```
- .before() 
```js
// a앞에 b를 삽입하라.
('.a').before('.b')	

$('.gnb').before('<pre><kbd>ctrl+s</kbd></pre>')

// a뒤에 b를 삽입하라.
('.a').after('.b')	
```

```js
// b를 삽입하라, a의 앞에
b.insertBefore(a);.

// a를 삽입해라, b의 뒤에
a.beforeAfter(b);
```
##Wrap
- wrap: 개별적으로 wrapping한다.

```js
$.each([1,2,3,4,5].reverse(), function(index, item) {
	$('<div>',{'class':'hesus'+item}).text('hesus'+item).prependTo('body');
});		// [5,4,3,2,1]

$('[class*="hesus"]').wrapAll('<aside class="wrapAllHesus">')
// [
// <div class="hesus1">hesus1</div>,
// <div class="hesus2">hesus2</div>,
// <div class="hesus3">hesus3</div>,
// <div class="hesus4">hesus4</div>,
// <div class="hesus5">hesus5</div>,
// ]
```
- wrapAll  :  모두 통칭해서 하나로 합치는 것
- unwrap()

### toggle 구문
이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성[객체 합성]
외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
```js
$('p:eq(2)').on('click', {'test': ture}, function(ev){
	if (ev.data.test) { 
		console.log('toggle 1');
	} else {
		console.log('toggle 2');
	}
	ev.data.test = !ev.data.test;
});

```

