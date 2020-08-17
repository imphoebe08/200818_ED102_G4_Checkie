var i = 0;

function move_box() {
  
    win_scroll = $(window).scrollTop(),
    hWin=$(window).height(),seClassTitle_top=$(".seClassTitle").offset().top; 
    win_scroll = $(window).scrollTop(),
    hWin=$(window).height(),
    seClassTitle_top=$(".seClassTitle").offset().top;
    if(win_scroll>seClassTitle_top - 0.5*hWin){
        var dis = win_scroll-0.2*hWin-seClassTitle_top;
        $(".seClassTitle-content-pic_img").css("transform",`translateX(${dis*0.8}px)`);
        $(".seClassTitle-content-pic_ColorBlock").css("transform",`translateX(${dis*0.6}px)`);
    }
        $(".seClassTitle-content-pic_img").css("transform",`translate(${dis*0.8}px,${dis*0.2}px)`);
        $(".seClassTitle-content-pic_ColorBlock").css("transform",`translate(${dis*0.6}px,${dis*0.1}px)`);
};

$(window).scroll(function(){
    move_box();
})