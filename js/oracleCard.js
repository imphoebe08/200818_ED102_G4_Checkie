function doFirst(){
  $(".item").click(function(){

    $(".item").parent(".cards").siblings(".title").children("h2").css({"opacity":"0"});
    $(".item").addClass("middle");
    $(this).css('zIndex', '2');

    var imgSrc = $(this).children(".itemImg").children("img").attr("src");

    setTimeout(function(){
      $(".item").parent(".cards").siblings(".title").children("h2").text("Step2. 默念三次問題按照直覺選擇一張卡牌");
      $(".item").parent(".cards").siblings(".title").children("h2").css({"opacity":"1"});
      $(".item").children(".itemImg").children("img").attr("src",`${imgSrc}`);
      $(".item").removeClass("middle");
      $('.item').off('click');
      $('.item').on('click');

      $(".item").click(function(){
        $(".item").parent(".cards").siblings(".title").children("h2").css({"opacity":"0"});
        $(".item").parent(".cards").siblings(".title").css({"padding":"20"});
        $(".item").parent(".cards").siblings(".title").css({"transition":"1s"});
        $(this).css({"transition":"1s"});
        $(this).siblings().children(".itemImg").addClass('itemRemoveOpacity');
        $(this).siblings().children(".itemImgBack").css({"opacity":"0"});
        $(this).css({"transform":"translateX(-50%) rotateY(540deg) scale(1.5)"});
        $(this).children().children("img").css({"animation":"none"});
        $(this).css({"zIndex":"10"});
        $(".item").css({"left":"20%"});
        $(".item").css({"top":"-100%"});
        $(this).children(".itemImgBack").children(".cardTxt").children("h2").text("hello,World!");
        $(this).children(".itemImgBack").children(".cardTxt").children("p").text("干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏干安捏");
        $(this).children(".itemImgBack").children(".cardTxt").addClass('cardTxtLeft');
        $(this).children(".itemImgBack").children(".cardTxt").children("h2").addClass('h2AddOpacity');
        $(this).children(".itemImgBack").children(".cardTxt").children("p").addClass('pAddOpacity');
        $('.item').off('click');
    });
    },2500);
    
  });
  new fullpage('#fullpage',{
    anchors: ['page1', 'page2', 'page3'],
    autoScrolling:true,
    navigation:true,
  });
  $(document).on('click', '#cardBtn', function(){
    fullpage_api.moveTo('page3', 1);
  });
  
}

window.addEventListener('load',doFirst);


function getScreenshot(){
  html2canvas($('#cutScreen'),{
    onrendered: function(canvas){
      // $('#cutPhoto').html("");
      $('#cutPhoto').append(canvas);
    }
  });
}


