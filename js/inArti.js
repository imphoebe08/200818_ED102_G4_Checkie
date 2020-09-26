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
        Arti: "",
        winWidth: "",

    },
    methods: {
        getInArti() {
            axios.post('./php/inArti.php').then(
                res => {
                    this.Arti = res.data
                }
            )
        },
        artiUrl(data) {
            return `./atSelf.html?artNo=${data}`
        },
    },

    mounted() {
        this.getInArti();
        this.winWidth = window.innerWidth;
        $(window).resize(() => {
            this.winWidth = window.innerWidth;
            if (this.winWidth < 768 || this.winWidth == 768) {
                $(".scrollmagic-pin-spacer").css("display", "none")
            } else {
                $(".scrollmagic-pin-spacer").css("display", "block")

            }
        });

    },


})
let vm2 = new Vue({
    el: "#inArti2",
    data: {
        Arti: "",
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
        indac() {
            $('.owl-carousel').owlCarousel({
                // items: 3,
                autoplay: true,
                loop: true,
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
            if (this.winWidth < 768 || this.winWidth == 768) {
                $(".scrollmagic-pin-spacer").css("display", "none")
            } else {
                $(".scrollmagic-pin-spacer").css("display", "block")

            }
        });

    },


})