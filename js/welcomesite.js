$(function() {
    var colors = ['pink1','pink2','blue1', 'blue2'];
    var $bubble = $('<div />').addClass('circle');
    var $container = $('.welcome_container');
    var size = { width: document.body.offsetWidth, height: document.body.offsetHeight }
    var bubbles = [];

window.onresize = function() {
    size = { width: document.body.offsetWidth, height: document.body.offsetHeight }
}

function add() {
    var wh = Math.round(Math.random()*200);
    bubbles.push(
    $bubble.clone()
    .addClass(
        colors[Math.floor(Math.random()*colors.length)]
    )
    .css('left', Math.floor(size.width*Math.random()))
    .css('top', size.height)
    .css('width', wh).css('height', wh)
    .attr('data-float', Math.ceil(Math.random()*3))
    .appendTo($container)
    );
}

function float(bubble) {
    if(!bubble[0].parentNode) return;
    
    if(parseInt(bubble.css('top'))+bubble.offset().height < 0) {
    bubble.remove();
    return false;
    }
    
    bubble.css('top', parseInt(bubble.css('top')) - parseInt(bubble.attr('data-float')));
    return true;
}

var last;

window.requestAnimationFrame(function tick(ts) {
    if(!last) last = ts;
    bubbles = bubbles.filter(bubble => float(bubble))
    
    if(ts - last > 800) {
    add()
    last = ts;
}

window.requestAnimationFrame(tick)
});

$container.on('click', () => add());
})

/*sign up&sign in*/
$(function(){
    $("#signup_overlay").hide();

    $("#signup").click(function(){
    $("#signup_overlay").removeClass("signup_overlay-none");
    $("#signup_overlay").fadeIn(300);
        container.classList.add("right-panel-active");
    });

 $("#signin").click(function(){
     $("#signup_overlay").removeClass("signup_overlay-none");
     $("#signup_overlay").fadeIn(300);
     container.classList.remove("right-panel-active");
 });

 $("#close").click(function(){
    $("#signup_overlay").hide();
});


});

 var signUpButton = document.getElementById('signUp');
 var signInButton = document.getElementById('signIn');
 var container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
     container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
     container.classList.remove("right-panel-active");
 });
