var controller = new ScrollMagic.Controller();
//滾動視差
var parallax = new TimelineMax();

var parallax01 = TweenMax.fromTo('.m_1',1,{
    y:'100%'
},{
    y:'1300%'
});
var parallax02 = TweenMax.fromTo('.m_2',1,{
    y:'500%'
},{
    y:'300%'
});
var parallax03 = TweenMax.fromTo('.m_3',1,{
    y:'100%'
},{
    y:'500%'
});
var parallax04 = TweenMax.fromTo('.m_4',1,{
    y:'100%'
},{
    y:'-200%'
});
var parallax05 = TweenMax.fromTo('.m_5',1,{
    y:'100%'
},{
    y:'500%'
});
var parallax06 = TweenMax.fromTo('.m_6',1,{
    y:'800%'
},{
    y:'500%'
});

parallax.add([parallax01,parallax02,parallax03,parallax04,parallax05,parallax06]);

var scene05 = new ScrollMagic.Scene({
    triggerElement:'#trigger1',
    duration:'150%'
}).setTween(parallax).addTo(controller);