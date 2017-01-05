/**
 * ----------------------------------------------------------
 * fadeToggle() 사용
 * ---------------------------------------------------------- */

// var fade_state = true,
// 	$img_a = $('#logo img').eq(0),
// 	$img_b = $('#logo img').eq(1);

// $img_a.hide();
// $img_b.show();

// function logoImg() {

// 	if (fade_state) {
// 		$img_b.hide();
// 		$img_a.fadeToggle('slow');
// 		// console.log('True before:',fade_state);
// 	} else {
// 		$img_a.hide();
// 		$img_b.fadeToggle('slow');
// 		// console.log('False after:',fade_state);
// 		 console.log($img_b, $img_a)
// 	}

// 	fade_state = !fade_state;
// }
// setInterval(logoImg, 5000);

/**
 * ----------------------------------------------------------
 * fadeIn()/fadeOut() 사용
 * ---------------------------------------------------------- */

var fade_state = true,
	$img_a = $('#logo img').eq(0),
	$img_b = $('#logo img').eq(1);

$img_b.hide();
$img_a.show();

function logoImg() {


	if (fade_state) {

		$img_b.hide();
		  // console.log('True before:',fade_state);
	  $img_a.fadeOut('slow');
	  $img_b.fadeIn('slow');
		 // console.log('True after:',fade_state);

	} else {

		$img_a.hide();
		// console.log('False before:',fade_state);
		$img_b.fadeOut('slow');
		$img_a.fadeIn('slow');
		 // console.log('False after:',fade_state);
		 // console.log($img_b, $img_a)
	}

	fade_state = !fade_state;
}

setInterval(logoImg, 5000);



/**
 * ----------------------------------------------------------
 * 조건문 테스트
 * ---------------------------------------------------------- */

// var fade_state = true;

// function logoImg() {
// 	if (fade_state) {
// 		 console.log('True before:',fade_state);
// 		 // fade_state = !fade_state;
// 		 console.log('True after:',fade_state);
// 	} else {
// 		console.log('False before:',fade_state);
// 		// fade_state = !fade_state;
// 		console.log('False after:',fade_state);
// 	}
// 	fade_state = !fade_state;
// }

// setInterval(logoImg, 1000);