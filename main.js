$(function() {
  // Framed Images
  let framedImg = $("#framedImg"),
        imgList = new Array(
          "assets/img001.png",
          "assets/img002.png",
          "assets/img003.png",
          "assets/img004.png",
          "assets/img005.png",
          "assets/img006.png",
          "assets/img007.png",
        ),
        selectNum = Math.floor(Math.random()*imgList.length);
      framedImg.css({"background":"url(" + imgList[selectNum] + ")"});
  if (window.performance) {
    if (performance.navigation.type === 1) {
      // let framedImg = $("#framedImg"),
      //   imgList = new Array(
      //     "assets/img001.png",
      //     "assets/img002.png",
      //     "assets/img003.png",
      //     "assets/img004.png",
      //     "assets/img005.png",
      //     "assets/img006.png",
      //     "assets/img007.png",
      //   ),
      //   selectNum = Math.floor(Math.random()*imgList.length);
      framedImg.css({"background":"url(" + imgList[selectNum] + ")"});
    }
  }

  // Slider
  $('.prev').click(function(){
    $('.slider-list:not(:animated)').animate({
      'margin-left' : -1*$('.slider-item').width()
    },function(){
      $('.slider-list').append($('.slider-item:first-child'));
      $('.slider-list').css('margin-left', '0');
    })
  });
  
  $('.next').click(function(){
    $('.slider-list:not(:animated)').prepend($('.slider-item:last-child'))
    .css('margin-left', -1*$('.slider-item').width())
    .animate({
      'margin-left' : 0
    });
  });

  // Easter Egg
  function randomImages(id) {
    let box = $(id),
    //     eggList = [
    //       "PP",
    //       "PP",
    //       "PP"
    //     ];
    // for(let i = 0; i < eggList.length; i++) {
    //   let x = Math.floor(Math.random()*100),
    //       y = Math.floor(Math.random()*100);
    //   box.append("<a href='#' class='hiddenLink'><img src='assets/" + eggList[i] + ".png' alt='Easter Egg' class='easterEgg' style='top:" + y + "%; left:" + x + "%;'></a>");
    // }
        easterEgg = $("a.easterEgg"),
        x = Math.floor(Math.random()*100),
        y = Math.floor(Math.random()*100);
        box.append("<a href='easterEggChallenge.html' class='easterEgg' style='top:" + y + "%; left:" + x + "%;' target='_blank'></a>")
  }

  randomImages(".container");

  $(document).on({
    "mouseover":function() {
      $(this).css("background","url('assets/PP.png')");
    },
    "mouseleave":function() {
      $(this).css("background","rgba(0,0,0,0)");
    }
  }, ".easterEgg");
});
