// inArti
Vue.component("boxcenter", {
    props: ["pus"],
    template: `
    
        <div class="item">
            <a :href="gogo(pus)">
                <div class="seRecommend-box_center">
                    <div class="seRecommend-box-center_pic">
                        <img :src="pus.artPic2" alt="">
                    </div>
                    <div class="seRecommend-box-center_name">
                        <h2>{{pus.artTitle.substring(0,12)}}</h2
                    </div>
                    <div class="seRecommend-box-center_detail">
                        {{pus.artContent.substring(0,101)}}
                    </div>
                </div>
            </a>
        </div>
    `,
    methods: {
        gogo(pus) {
            return `./atSelf.html?artNo=${pus.artNo}`
        },

    },
    mounted() {

    },

})
new Vue({
    el: "#inArti",
    data: {
        Arti: [{
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }, {
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }, {
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }],
        winWidth: "",

    },
    methods: {
        getInArti() {
            axios.post('./php/inArti.php').then(
                res => {
                    this.Arti = res.data
                    console.log(this.Arti)
                    Vue.nextTick().then(() => {
                        this.indac();
                    });
                }
            )


        },
        artiUrl(data) {
            return `./atSelf.html?artNo=${data}`
        },
        onResize(data) {
            if (data == "1") {
                return (this.winWidth > 768) ? true : false;
            } else if (data == "2") {
                return (this.winWidth <= 768) ? true : false;
            } else {
                return (this.winWidth >= 1080) ? true : false;

            }
        },
        indac() {
            $('.owl-carousel').owlCarousel({
                // items: 3,
                autoplay: true,
                // loop: true,
                margin: 100,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        },
    },

    mounted() {
        this.getInArti();
        this.winWidth = window.innerWidth;
        $(window).resize(() => {
            this.winWidth = window.innerWidth;
        });

    },


})