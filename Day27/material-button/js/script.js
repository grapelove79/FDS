// --------------------
// Helper Fucntions 
// --------------------
function id(name) {
  return document.getElementById(name);
};
function tag(name) {
  return document.getElementsByTagName(name);
};

// --------------------
// Material-Style-Button-Script 
// --------------------

var body = document.body
var btn_group = id("btn-group");
var btns = tag("button");

var changeBg = function(){
  var it = this
  var color = it.getAttribute("data-color");
  it.setAttribute('class', 'focused');
  console.log(color, '완료!');
  setTimeout(function(){
    body.style.backgroundColor = color
    it.removeAttribute('class', 'focused');
    console.log(it)
  },325)
  //동시에 'focus' class가 추가되어 있을 때 표현에 문제가 발생
  //setTimeout 함수를 동작하는 기준 시간을 단축시킴
} 

for (var i = 0; i < btns.length; i++) {
  var num = i + 1
  var btn = 'btn_' + num
  // 변수를 생성
  console.log( btn )
  // 변수에 요소를 할당
  btn = btns[i]
  // 할당된 요소를 클릭시 함수 실행
  btn.onclick = changeBg;
}
