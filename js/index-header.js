$(function(){

/*nav*/
$( ".hamburger" ).click(function() {
    $(".hamburger").toggleClass("is-active");
    $( ".navbar__menu" ).toggleClass( "navbar__menu--active" );
    $(".top").toggleClass("top--open");
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    /*var x = window.matchMedia("(min-width: 768px)");*/
    /*if (x.matches) { }*/
    
        if (scroll >= 800) {
            $(".top").addClass("top--scrolling");
            $(".navbar__item").addClass("navbar__item--scrolling");
            $(".navbar__sign__item").addClass("navbar__sign__item--scrolling");
            $(".hamburger-inner").addClass("hamburger-inner--scrolling");
        } else {
            $(".top").removeClass("top--scrolling");
            $(".navbar__item").removeClass("navbar__item--scrolling");
            $(".navbar__sign__item").removeClass("navbar__sign__item--scrolling");
            $(".hamburger-inner").removeClass("hamburger-inner--scrolling");
        }

    
});

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

});
    