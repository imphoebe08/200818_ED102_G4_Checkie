let vm = new Vue({
    el: '#app',
    data: {
        article: "",
    },
    methods: {

        ajax() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                // console.log(xhr.responseText)
                let article = JSON.parse(xhr.responseText);
                vm.$data.article = article;
                console.log(article)
            }
            var a = location.search;
            xhr.open("get", `./php/atSelf.php${a}`, true);
            xhr.send(null);

        },
    },
    mounted() {
        this.ajax();

    },
})
let vm2 = new Vue({
    el: "#seRecommend",
    data: {
        boo: "",
    },
    methods: {
        there() {
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                let add = JSON.parse(xhr.responseText);
                vm2.$data.boo = add;
                Vue.nextTick().then(() => {
                    this.indac();
                });

                // console.log(xhr.responseText)
            }
            xhr.open("get", "./php/atself_one.php", true);
            xhr.send(null);
        },
        indac() {
            console.log('haha');
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
        }
    },
    mounted() {
        this.there();

    },
    updated() {

    },

})
Vue.component("boxcenter", {
    props: ["pus"],
    template: `
    
        <div class="item">
            <div class="seRecommend-box_center">
                <div class="seRecommend-box-center_pic">
                    <img :src="pus.artPic2" alt="">
                </div>
                <div class="seRecommend-box-center_name">
                    <h2>{{pus.artTitle.substring(0,9)}}</h2
                </div>
                <div class="seRecommend-box-center_detail">
                    {{pus.artContent.substring(0,100)}}
                </div>
                </div>
            </div>
        </div>
    `,
    methods: {

    },
    mounted() {

        // console.log(this.pus)
    },

})