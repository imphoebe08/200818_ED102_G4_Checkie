$(function(){

/*nav*/
$( ".hamburger" ).click(function() {
    $(".hamburger").toggleClass("is-active");
    $( ".navbar__menu" ).toggleClass( "navbar__menu--active" );
    $(".top").toggleClass("top--open");
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    
        if (scroll >= 80) {
            $(".top").addClass("top--scrolling");    
        } else {
            $(".top").removeClass("top--scrolling");
            
        }

    
});

/*sign up&sign in*/
$(function(){
    // $("#signup_overlay").hide();

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
    