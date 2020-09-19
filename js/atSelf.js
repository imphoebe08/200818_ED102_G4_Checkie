let vm = new Vue({
    el: '#app',
    data: {
        article: "",
        shareUrl: "https://tw.yahoo.com/?", //傳送的文章或活動主連結
        shareNo: "", //傳送的文章或活動編號，我預設為0
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
        openShareDialog(artNo) {
            let shareButton = document.querySelector(".share-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.add("is-open");
            this.shareNo = `artNo=${artNo}`;
        },
        copyWord() {
            let copyWord = document.querySelector(".pen-url");
            copyWord.select();
            let copyStatus = document.execCommand("copy");
        },
        closeShereDialog() {
            let closeButton = document.querySelector(".close-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.remove("is-open");
        }
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

        // console.log(this.pus)
    },

})