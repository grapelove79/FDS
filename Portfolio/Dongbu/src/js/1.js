//parallax.js
(function(global, $, SM){
  'use strict';

  //ScrollMagic
  //객체생성
  var ctrl = new SM.Controller({
    // 'addIndicators': true
  });

  //씬
  // 치킨요리 이미지 슬라이드
  var slide_img_btn_scene = new SM.Scene({
  'triggerElement': '.slide_img_btn',
  'triggerHook' : 0.95,
  'reverse': false
  });

  slide_img_btn_scene
    .setClassToggle('.slide_img_btn', 'fade-in-transform')
    .addTo( ctrl );




  // CHICKEN STOCK FOOD
  var chicken_wrap_scene = new SM.Scene({
  'triggerElement': '.chicken_wrap',
  'triggerHook' : 0.9,
  'reverse': false
  });

  chicken_wrap_scene
    .setClassToggle('.chicken_wrap', 'fade-in-transform')
    .addTo( ctrl )
    .on("enter", function (event) {
      // console.log("Scene entered.");
      // shuffleLetters(): 글씨 뒤바뀌는 이미지
      $('.chicken_wrap .chicken_head').shuffleLetters(); 
      $('.chicken_wrap .chicken_sub_head').shuffleLetters();
    });




  // STORIES DELICIOUS OF FOOD
  var stories_wrap_scene = new SM.Scene({
    'triggerElement': '.stories_wrap > h3',
    'triggerHook' : 0.7,
    'offset' : -150,
    'reverse': false
  });

  stories_wrap_scene
    .addTo( ctrl )
    .on('enter', function(event){ 
      $('.stories_head').shuffleLetters();
    });




  // INQUIRES
  var inquire_wrap = new TimelineMax();

  inquire_wrap
    .fromTo('.inquire_wrap', 0.2, {
      'autoAlpha': 0,
      'y': '50%'
    },
    {
      'autoAlpha': 1,
      'y': '0%'
    }, 0.1);


  var inquire_wrap_scene = new SM.Scene({
    'triggerElement': '.inquire_wrap',
    'triggerHook' : 0.95,
    'offset' : -300,
    'reverse': false
  });

  inquire_wrap_scene
    .setTween(inquire_wrap)
    .addTo( ctrl );



  // STORIES DELICIOUS OF FOOD
  var article_content = $('.m-stories-content1 > article');
  var article_content_2 = $('.m-stories-content2 > article');
  
  article_content.each(function( idx ){

  var article = new TimelineMax();

  article
    .fromTo(article_content[idx], (idx+1)/3, {
      'autoAlpha': 0,
      'scale': 0
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.5);


  var article_content_scene = new SM.Scene({
    'triggerElement': article_content[idx],
    'triggerHook' : 0.8,
    'offset' : -400,
    'reverse': false
  });

  article_content_scene
    // .addIndicators({'name':'갸갸', 'indent': 200})
    .setTween(article)
    .addTo( ctrl );





  var article2 = new TimelineMax();

  article2
    .fromTo(article_content_2[idx], (idx+1)/3, {
      'autoAlpha': 0,
      'scale': 0
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.5);


  var article_content_scene_2 = new SM.Scene({
      'triggerElement': article_content_2[idx],
      'triggerHook' : 0.8,
      'offset' : -700,
      'reverse': false
    });

  article_content_scene_2
    // .addIndicators({'name':'냐냐', 'indent': 100})
    .setTween(article2)
    .addTo( ctrl );

  });
 

})(this, this.jQuery, this.ScrollMagic);