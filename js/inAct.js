 // 活動

 new Vue({
     el: "#inAct",
     data: {
         date: "",
         cards: "",
     },
     methods: {

     },
     components: {
         "inact-item": {
             props: ["acContent"],
             template: `
                    <div class="acSelect container-sm container-md bgUnset">
                        <div class="acSelectCard" >
                            <a :href="'./acSelf.html?actNo=' + acContent.actNo">
                                <img :src="acContent.actpic1">
                            </a>

                            <!-- 卡片文字 -->
                            <h6 class="acSelectCard_title"><a :href="'./acSelf.html?actNo=' + acContent.actNo">{{acContent.actName}}</a></h6>

                            <!-- 卡片時間 -->
                            <div class="acSelectCard_icon">
                                <i class="fas fa-share-alt acSelectCard-share_icon share-button" style="font-size:20px" @click="openShareDialog(acContent.actNo)"></i>
                                <i class="fas fa-bookmark acSelectCard-bookmark_icon" style="font-size:20px" :class="[{ colorful: acContent.isCollect }, 'icon']" @click="doCollected(index)"></i>
                            </div>
                            <div class="acSelectCard_text">
                                <img class="acSelectCard-time_icon" src="./img/icon/clock.png" alt="">
                                <p class="acSelectCard_time">活動日期：<br>{{acContent.actStart}} ~ <br>{{acContent.actEnd}}</p>
                            </div>
                            <div class="acSelectCard_text">
                                <img class="acSelectCard-time_icon" src="./img/icon/clock.png" alt="">
                                <p class="acSelectCard_time">報名截止日期：<br>{{acContent.actPend}}</p>
                            </div>

                            <div class="acSelectCard_bottomBlock">
                                <p class="acSelectCard_person"> 剩餘名額：{{acContent.actMax - acContent.actCount}}</p>
                                <a :href="'./aoCheck.html?actNo=' + acContent.actNo"><input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register"></a>
                            </div>
                        </div>
                        
                    </div>
                 `,
             mounted() {

             },
         },

     },
     //  rwd效果
     mounted() {
         axios.get('./php/acMain.php').then((res) => {
                 this.cards = res.data
                 console.log(this.cards)
             })
             // 不要動

         //  到這之後可以動
     },
     updated() {
         onWndLoad();

         function onWndLoad() {

             var slider = document.querySelector('.inAct_block'),
                 sliders = slider.children,
                 initX = null,
                 transX = 0,
                 rotZ = 0,
                 transY = 0,
                 curSlide = null,
                 Z_DIS = 50,
                 Y_DIS = 10,
                 images = document.querySelectorAll('inAct_item>a>img'),
                 TRANS_DUR = 0.4;
             console.log(sliders)
                 // 關閉drag

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
     }
 })