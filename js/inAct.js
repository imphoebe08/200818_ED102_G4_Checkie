 // 活動
 new Vue({
     el: "#inAct",

     data: {
         date: "",
     },
     methods: {

     },
     components: {
         "inact-item": {
             template: `
            <div class="inAct_item">
                            <!-- 帶資料 -->
                <a href="javascript:void(0)" draggable="false">
                    <img src="./img/index/inAct/image_1.jpg" draggable="false">
                </a>
                <div class="inAct_text">
                    <div class="inAct-top_text">
                        <div class="inAct-left_date">
                            <div class="inAct-date_icon"></div>
                            <!-- 帶資料 -->
                            <div class="inAct-date_text">2020-08-14(五)</div>  
                        </div>
                        <div class="inAct-icon_block">
                            <a href="javascript:void(0)" class="inAct-icon_1" draggable="false"></a>
                            <a href="javascript:void(0)" class="inAct-icon_2" draggable="false"s></a>
                        </div>
                    </div>
                            <!-- 帶資料 -->
                    <div class="inAct_title"><a href="javascript:void(0)" draggable="false">從陌生人到貴人，打造職涯路上的黃金人脈法則</a> </div>

                    <div class="inAct_location">
                        <div class="inAct-location_icon"></div>
                            <!-- 帶資料 -->
                        <div class="inAct-location_text">台灣文創教育中心</div>
                    </div>
                </div>
            </div>
                 `,
         },
     },
     //  rwd效果
     mounted() {
         // 不要動
         onWndLoad();

         function onWndLoad() {

             var slider = document.querySelector('.inAct_block');
             var sliders = slider.children;
             console.log(sliders)
             var initX = null;
             var transX = 0;
             var rotZ = 0;
             var transY = 0;

             var curSlide = null;

             var Z_DIS = 50;
             var Y_DIS = 10;
             var TRANS_DUR = 0.4;
             // 關閉drag
             var images = document.querySelectorAll('inAct_item>a>img');
             for (var i = 0; i < images.length; i++) {
                 images[i].onmousemove = function(e) {
                     e.preventDefault()

                 }
                 images[i].ondragstart = function(e) {
                     return false;

                 }
             }
             // 1
             function init() {
                 var z = 0,
                     y = 0;
                 for (var i = sliders.length - 1; i >= 0; i--) {
                     sliders[i].style.transform = 'translateZ(' + z + 'px) translateY(' + y + 'px)';

                     z -= Z_DIS;
                     y += Y_DIS;
                 }
                 attachEvents(sliders[sliders.length - 1]);



             }
             // 2
             function attachEvents(elem) {
                 curSlide = elem;

                 curSlide.addEventListener('mousedown', slideMouseDown);
                 curSlide.addEventListener('touchstart', slideMouseDown);
             }
             init();

             function slideMouseDown(e) {

                 if (e.touches) {
                     initX = e.touches[0].clientX;
                 } else {
                     initX = e.pageX;
                 }


                 document.addEventListener('mousemove', slideMouseMove);
                 document.addEventListener('touchmove', slideMouseMove);

                 document.addEventListener('mouseup', slideMouseUp);
                 document.addEventListener('touchend', slideMouseUp);
             }
             var prevSlide = null;

             function slideMouseMove(e) {
                 var mouseX;

                 if (e.touches) {
                     mouseX = e.touches[0].clientX;
                 } else {
                     mouseX = e.pageX;
                 }

                 transX += mouseX - initX;
                 rotZ = transX / 20;

                 transY = -Math.abs(transX / 15);



                 curSlide.style.transition = 'none';
                 curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ +
                     'deg)' + ' translateY(' + transY + 'px)';
                 curSlide.style.transform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ +
                     'deg)' + ' translateY(' + transY + 'px)';
                 var j = 1;
                 //remains elements
                 for (var i = sliders.length - 2; i >= 0; i--) {

                     sliders[i].style.webkitTransform = 'translateX(' + transX / (2 * j) + 'px)' +
                         ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' +
                         ' translateZ(' + (-Z_DIS * j) + 'px)';
                     sliders[i].style.transform = 'translateX(' + transX / (2 * j) + 'px)' +
                         ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' +
                         ' translateZ(' + (-Z_DIS * j) + 'px)';
                     sliders[i].style.transition = 'none';
                     j++;
                 }



                 initX = mouseX;
                 e.preventDefault();
                 if (Math.abs(transX) >= curSlide.offsetWidth - 30) {

                     document.removeEventListener('mousemove', slideMouseMove);
                     document.removeEventListener('touchmove', slideMouseMove);
                     curSlide.style.transition = 'ease 0.2s';
                     curSlide.style.opacity = 0;
                     prevSlide = curSlide;
                     attachEvents(sliders[sliders.length - 2]);
                     slideMouseUp();
                     setTimeout(function() {





                         slider.insertBefore(prevSlide, slider.firstChild);

                         prevSlide.style.transition = 'none';
                         prevSlide.style.opacity = '1';
                         slideMouseUp();

                     }, 201);



                     return;
                 }
             }

             function slideMouseUp() {
                 transX = 0;
                 rotZ = 0;
                 transY = 0;

                 curSlide.style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR + 's';

                 curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ +
                     'deg)' + ' translateY(' + transY + 'px)';
                 curSlide.style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' +
                     ' translateY(' + transY + 'px)';
                 //remains elements
                 var j = 1;
                 for (var i = sliders.length - 2; i >= 0; i--) {
                     sliders[i].style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR / (j +
                         0.9) + 's';
                     sliders[i].style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' +
                         rotZ + 'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-
                             Z_DIS * j) + 'px)';
                     sliders[i].style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ +
                         'deg)' + ' translateY(' + (Y_DIS * j) + 'px)' + ' translateZ(' + (-Z_DIS * j) +
                         'px)';

                     j++;
                 }

                 document.removeEventListener('mousemove', slideMouseMove);
                 document.removeEventListener('touchmove', slideMouseMove);

             }


         }
         //  到這之後可以動
     },
 })