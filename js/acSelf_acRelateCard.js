Vue.component('acRelateCard', {
    props: { acContents: Array },
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
            <div class="acSelectCard" v-for="acContent in acContents">
                    <a href="./acSelf.html">
                        <img src="./img/acMain/acCard.jpg">
                    </a>
                
                <!-- 卡片文字 -->
                <h6 class="acSelectCard_title"><a href="./acSelf.html">{{acContent.acName}}</a></h6>
                
                <!-- 卡片時間 -->
                <div class="acSelectCard_icon">
                <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
                <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
                </div>
                <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">活動日期：<br>{{acContent.acStartDate}} ~ <br>{{acContent.acEndDate}}</p>
                </div>
                <div class="acSelectCard_text">
                    <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                    <p class="acSelectCard_time">報名截止日期：<br>{{acContent.acRedEndDate}}</p>
                </div>

                <div class="acSelectCard_bottomBlock">
                <p class="acSelectCard_person"> 剩餘名額：{{acContent.acMax - acContent.acMin}}</p>
                <input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register">
                </div>
            </div>
        </div>
    `,
});

new Vue({
    el: "#acSelf",

    data: {
        date: "",
        contents: [],
        cards: [],
    },
    methods: {
        installOwlCarousel: function() {
            $('.owl-carousel').owlCarousel({
                loop: false,
                touchDrag: true,
                autoplay: false,
                // autoplayTimeout: 2000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 1,
                    },
                    1180: {
                        items: 3,
                    }
                }
            });
        }
    },
    mounted() {
        var vm = this;
        axios.get('../php/acSelf.php').then((res) => {
            this.contents = res.data
            console.log(res)
        })
        axios.get('../php/acSelf.php').then((res) => {
            this.cards = res.data
                // console.log(res)
            Vue.nextTick().then(function() {
                vm.installOwlCarousel();
            });
        })
    },
})