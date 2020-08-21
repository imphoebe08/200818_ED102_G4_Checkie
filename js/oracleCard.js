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


function step(){
  $('.step').click(function(){
    $(this).children('h3').addClass('h3Color');
    $(this).siblings('li').children('h3').removeClass('h3Color');
  });
  $('#step1').click(function(){
    rotateFoo();
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').addClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').removeClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').removeClass('opacity1');

    $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').addClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').removeClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').removeClass('opacity2');

  });
  $('#step2').click(function(){
    rotateFoo();
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').removeClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').addClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').removeClass('opacity1');

    $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').removeClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').addClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').removeClass('opacity2');
  });
  $('#step3').click(function(){
    rotateFoo();
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').removeClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').removeClass('opacity1');
    $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').addClass('opacity1');

    $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').removeClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').removeClass('opacity2');
    $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').addClass('opacity2');
  });
}

window.addEventListener('load',step);

function rotateFoo(){
  var angle = ($('#showImgBg').data('angle') + 90) || 90;
  $('#showImgBg').css({'transform': 'rotate(' + angle + 'deg)'});
  $('#showImgBg').data('angle', angle);
}