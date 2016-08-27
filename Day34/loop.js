//do는 무조건 실행
//do while문은 do는 한번실행

// JavaScript Loop Statement


// while문
var boo = true, m = 10;

while(boo) {
  console.log(boo ? '참참참!' : '짝짝짝!');
   // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  if (m-- > 0) { // 10,9,8,7,6,5,4,3,2,1
    boo = !boo; ////boo가 false기때문 실행이 안된다.
  }
}


// do ~ while문
var boo = !true, m =10;

do {
	console.log(boo ? '참참참!':'짝짝짝!');
	// if (--m > 0) { // 9, 8, 7, 6, 5, 4, 3, 2, 1 
		if(m-- < 0) { // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
		boo = !boo;
	}
} while(boo); //boo가 false기때문 실행이 안된다.



// ECMAScript 2015 Syntax
var cleanWhiteSpace = ( el=document ) => {
    var current_node = el.firstChild;
    while( current_node ) {
      if ( current_node.nodeType === 3 && /\s/.test(current_node.nodeValue) ) {
          remove(current_node);
      } else if ( current_node.nodeType === 1 ) {
          cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
};

//var demo_container = query(".demo-container");
// console.log(demo_container.firstChild);
//var demo_container_first_el = firstEl(demo_container);
//console.log(demo_container_first_el);
//노드가 존재하고, 노드가 요소노드 가 아니라면(텍스트노드나 속성노드계쪼?) ? 가 존재하면 true이다.

// for문 countinue를 사용해보는 예제 
var fruits = ['바나나', true,'딸기', false, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({'name': 'object'});

// 민션! frunits 변수에 참조된 데이터(배열)에는 과일이 아니 것들이 포함되어 있습니다.
// 이를 for문을 사용하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.
var real_fruits = [],
		fruits,
		k = 0,
		o = fruits.length;

for (; k < 0 ; k++) {
	fruits = fruits[k];
	if( isType(fruit) !== 'string') {
		//console.log(fruits);
		countinue
	}
	real_fruits.push(fruit);
}
console.log(real_fruits);



// countinu 실전예제 
// <body>요소의 자식노드 중, <script>, #text노드가 아닌 요소노드를 찾아
// el-collection 배열에 수집하라.
var collection = document.body.childNodes;

for ( var el_collection=[], i = collection.length -1; collection[i]; i--) { //요소가 있냐 없냐 검증.
	let node = collection[i];
	if(node.nodeType === 3 || node.localName === 'script'){ //#text, <script> (o)
		continue;
	}
	el_collection.push(node);
}
// console.log( el_collection ); //[div.demo_container]



// break예제 
// 전역변수는 협업을 했을때 다른사람들이 그 변수를 쓸 수 있기 때문에(오염) 지역변수로 쓰는 것이 좋다. 지역변수로 쓰는경우 외부에서 접근이 어렵다.
// 지역변수 units에 접근하려면 getUnit.units으로 접근한다. 
// 함수 또한 객체이기 때문에 속성을 가질 수 있다. 

var units = 'px em rem % vw vh vmin vmax'.split(' '); //검수율이 많은 것부터 배치 
var unit;
var i = 0;
var l = units.length;

var demo_container = query('.demo-container');
var get_value = getStyle(demo_container, 'margin-bottom');

for( ; i<l; i++ ) {
  unit = units[i];
  // console.log( get_value.indexOf(unit) > -1 );
  if ( get_value.indexOf(unit) > -1 ) {
    // 특정 단위가 존재한다.

  }
  // console.log(unit);
}

// ECMAScript 2015 <for ~ of>
// for ( let unit of units ) {
//   console.log(unit);
// }

// -------------------------------------------------------
// for ~ in 문
// for ( var property in obj ) {
//     if ( obj.hasOwnProperty(property) ) {
//         console.log('속성:', property);
//         console.log('값:', obj[property]);
//     }
// }