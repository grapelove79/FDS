(function(global, XHR) {
	'use strict';


var createXHR = (function(){
  // IE 6 이하 웹 브라우저를 위한 대체 코드
  // ActiveXObject('Microsoft.XMLHTTP')
  XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
  return function () {
      return new XHR;
  };
})();

// 1. CREATE
// XHLHttpRequest() 생성자 함수를 통해
// 비동기 통신을 수행할 객체를 생성생

var xhr = createXHR(); //xhr는 비동기통신할 수 있는 객체이다. 
var xhr2 = createXHR();
// var xhr2 = creatXHR();
// console.log(xhr)

// XMLHttpRequest 생성자.portotype의 객체
console.dir('XHL.prototype');//xhr.__proto__와 통일.
// console.dir('SMLHttpRequest 생성자.prototype객체:', XHR.prototype);
console.log('생성된 xhr 객체:', xhr);

// 2. OPEN
// 마지막 인자 값이 false 라면 동기 통신!
// 마지막 인자 값이 true 또는 생략하면 비동기 통신!
// xhr.open('GET', 'data/data.txt', false); // 동기 통신, Deprecated!! open는 어떻게 보낼건지 설정.
// xhr.open('GET', 'data/data.txt'); // 비동기 통신, 기다려 주지 않고 바로바로 실행

// 3. SEND
// xhr.send();   //요청을 본내다.


// 동기 통신일 경우는.... 데이터가 로드될 때까지 기다림...
// 비동기 통신일 경우는.... 아래 코드가 바로 해석됨...

  var result_view = document.querySelector('.ajax-result');
  var call_ajax_btn = document.querySelector('.call-ajax-data-btn');
  var call_ajax_btn2 = document.querySelector('.call-ajax-data-btn2');


  call_ajax_btn.onclick = updateViewPlace;
  call_ajax_btn2.onclick = updateViewPlace2;


// 통신 상태 확인
// if (xhr.status === 200) {  // 200은 성공했다라의 의미,500은 서버문제,a404는 클라언트단에서 실패
// 	console.log('통신 데이터 전송 성공! ^^');
// 	//console.log(xhr.reponse);
// 	call_ajax_btn.onclick = updateViewPlace
// } else {
//   console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
//   result_view.textContent = '데이터 로드에 실패했습니다....';
//   console.log(xhr);
// }


// xhr.open('GET', 'data/data.txt', true); // 비동기 통신, rue는 기본값이니까 안써도 된다.
// xhr.open('GET', 'data/model.txt', false); // 동기 통신

  // 비동기 통신 객체에 이벤트 핸들러 바인딩
  xhr.onreadystatechange = function() {
    console.log(this); // this === xhr 객체
    if ( this.status === 200 && this.readyState === 4 ) {
      console.log('통신 데이터 전송 성공! ^ㄴ^');
      result_view.innerHTML = this.responseText;
    } else {
      console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
      result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
    }
    console.log(xhr);
  }


  xhr2.onreadystatechange = function() {
    console.log(this); // this === xhr 객체
    if ( this.status === 200 && this.readyState === 4 ) {
      console.log('통신 데이터 전송 성공! ^ㄴ^');
      result_view.innerHTML = this.responseText;
    } else {
      console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
      result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
    }
    console.log(xhr2);
  }


  function updateViewPlace() {
  xhr.open('GET', 'data/data.html'); // 비동기 통신
    // AJAX 통신 요청 보내기
    xhr.send();

    // 비동기 통신을 요청했을 경우,
    // 이벤트(`readystatechange`)를 통해 비동기 데이터가 로드된 시점에
    // 아래 조건문이 수행되어야 한다.
  }

  function updateViewPlace2() {
  	 xhr2.open('GET', 'data/data2.html'); // 비동기 통신
    // AJAX 통신 요청 보내기
    xhr2.send();

    // 비동기 통신을 요청했을 경우,
    // 이벤트(`readystatechange`)를 통해 비동기 데이터가 로드된 시점에
    // 아래 조건문이 수행되어야 한다.
  }




})(this, this.XMLHttpRequest);
