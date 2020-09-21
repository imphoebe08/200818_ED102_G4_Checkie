function doFirst() {
    $(".item").click(function() {

        $(".item").parent(".cards").siblings(".title").children("h2").css({ "opacity": "0" });
        $(".item").addClass("middle");
        $(this).css('zIndex', '2');

        var imgSrc = $(this).children(".itemImg").children(".back").children(".cardBack").attr("src");


        setTimeout(function() {
            $(".item").parent(".cards").siblings(".title").children("h2").text("Step2. 默念三次問題按照直覺選擇一張卡牌");
            $(".item").parent(".cards").siblings(".title").children("h2").css({ "opacity": "1" });
            // $(".item").children(".itemImg").children(".back").children(".cardBack").attr("src", `${imgSrc}`);


            $(".item").removeClass("middle");
            $('.item').off('click');
            $('.item').on('click');

            $(".item").click(function() {
                $(".item").parent(".cards").siblings(".title").children("h2").css({ "display": "none" })
                $(this).children(".itemImg").children('.card__side--back').addClass("backRotate")
                $(this).children(".itemImg").children('.card__side--front').addClass("frontRotate");
                $(this).children(".itemImg").removeClass("animationShack");
                $(this).siblings(".item").children(".itemImg").css({ "opacity": "0" });
                $(this).children(".itemTxt").removeClass("txtOpacityOne");
                $(this).parent(".cards").siblings("#mediaCardBtn").removeClass("mediaCardBtnNone");
                $(".cardBtn").css({ "opacity": "1" });
                $(".item").addClass("left");
                $('.item').off('click');
            });
            //RWD查看更多按鈕
            $('#mediaCardBtn').click(function() {
                if ($(window).width() < 769) {
                    $(this).css({ "opacity": "0" });
                    $(this).siblings(".cards").children(".item").children(".itemTxt").css({ "opacity": "1" });
                }
            });
            $('.cards').click(function() {
                if ($(window).width() < 769) {
                    $("#mediaCardBtn").css({ "opacity": "1" });
                    $("#mediaCardBtn").siblings(".cards").children(".item").children(".itemTxt").css({ "opacity": "0" });
                }
            });
        }, 2500);

    });
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        autoScrolling: true,
        navigation: true,
    });
    $(document).on('click', '#cardBtn1', function() {
        fullpage_api.moveTo('page2');
    });
    $(document).on('click', '#cardBtn2', function() {
        fullpage_api.moveTo('page3');
    });
    $(document).on('click', '#cardBtn3', function() {
        fullpage_api.moveTo('page4');
    });

}

window.addEventListener('load', doFirst);

// function getScreenshot() {
//     html2canvas($('#cutScreen'), {
//         onrendered: function(canvas) {
//             // $('#cutPhoto').html("");
//             $('#cutPhoto').append(canvas);
//         }
//     });
// }



function step() {
    $('.step').click(function() {
        $(this).children('label').addClass('h3Color');
        $(this).siblings('li').children('label').removeClass('h3Color');
    });
    $('#step1').click(function() {
        rotateFoo();
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').addClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').removeClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').removeClass('opacity1');

        $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').addClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').removeClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').removeClass('opacity2');

    });
    $('#step2').click(function() {
        rotateFoo();
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').removeClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').addClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').removeClass('opacity1');

        $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').removeClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').addClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').removeClass('opacity2');
    });
    $('#step3').click(function() {
        rotateFoo();
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg1').removeClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg2').removeClass('opacity1');
        $(this).parent('.stepNum').siblings('.showImg').children('.mainImg').children('#stepImg3').addClass('opacity1');

        $(this).parent('.stepNum').siblings('.showTxt').children('#txt1').removeClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt2').removeClass('opacity2');
        $(this).parent('.stepNum').siblings('.showTxt').children('#txt3').addClass('opacity2');
    });
}

window.addEventListener('load', step);
//步驟旋轉
function rotateFoo() {
    var angle = ($('#showImgBg').data('angle') + 90) || 90;
    $('#showImgBg').css({ 'transform': 'rotate(' + angle + 'deg)' });
    $('#showImgBg').data('angle', angle);
}





//获取元素相对于屏幕绝对位置
function getAbsPosition(element) {
    var abs = { x: 0, y: 0 }
        //如果浏览器兼容此方法
    if (document.documentElement.getBoundingClientRect) {
        //注意，getBoundingClientRect()是jQuery对象的方法
        //如果不用jQuery对象，可以使用else分支。
        abs.x = element.getBoundingClientRect().left;
        abs.y = element.getBoundingClientRect().top;

        abs.x += window.screenLeft +
            document.documentElement.scrollLeft -
            document.documentElement.clientLeft;
        abs.y += window.screenTop +
            document.documentElement.scrollTop -
            document.documentElement.clientTop;
    }
    //如果浏览器不兼容此方法
    else {
        while (element != document.body) {
            abs.x += element.offsetLeft;
            abs.y += element.offsetTop;
            element = element.offsetParent;
        }
        //计算想对位置
        abs.x += window.screenLeft +
            document.body.clientLeft - document.body.scrollLeft;
        abs.y += window.screenTop +
            document.body.clientTop - document.body.scrollTop;
    }
    return abs;
}

function getCenterPosition(element) {
    center = { x: 0, y: 0 }
    var leftTop = getAbsPosition(element[0])
        // console.log(leftTop)
        // console.log(element.css('width'),element.css('height'))
    center.x = leftTop.x + parseInt(element.css('width')) / 2
    center.y = leftTop.y + parseInt(element.css('height')) / 2
    return center
}

$(document).on('mousemove', '#oracleCard', function(e) {
    //console.log(e.clientX,e.clientY)
    CenterPosition = getCenterPosition($('#forCloud'))
    moveY = (CenterPosition.x - e.clientX) / 100
    moveX = 0 - (CenterPosition.y - e.clientY) / 28
    move1Y = (CenterPosition.x + e.clientX) / 100
    move1X = 0 - (CenterPosition.y + e.clientY) / 28
        //console.log(moveX,moveY)
    $('#forCloud').css('transform', 'translateX(' + moveX + 'px)' + '' + 'translateY(' + moveY + 'px)')
    $('#forCloud').css('webKitTransform', 'translateX(' + moveX + 'px)' + '' + 'translateY(' + moveY + 'px)')
    $('#forCloud1').css('transform', 'translateX(' + move1X + 'px)' + '' + 'translateY(' + move1Y + 'px)')
    $('#forCloud1').css('webKitTransform', 'translateX(' + move1X + 'px)' + '' + 'translateY(' + move1Y + 'px)')
})