let vm = new Vue({
    el: '#app',
    data: {
        article: "",
        shareUrl: "https://tw.yahoo.com/?", //傳送的文章或活動主連結
        shareNo: "", //傳送的文章或活動編號，我預設為0
        // 會員分享用
        memberData: [{
            member: false,
            memNo: 1,
            artCollect: [1, 2, 5, 7], //每個會員要有自己的收藏編號陣列
            actCollect: [1, 2, 4, 7] //每個會員要有自己的收藏編號陣列
        }],
    },
    methods: {
        ajax() {
            // let xhr = new XMLHttpRequest();
            // xhr.onload = function() {
            //     // console.log(xhr.responseText)
            //     let article = JSON.parse(xhr.responseText);
            //     vm.$data.article = article;
            //     console.log(article)
            // }
            // var a = location.search;
            // xhr.open("get", `./php/atSelf.php${a}`, true);
            // xhr.send(null);
            var a = location.search;
            axios.all([
                    axios.get(`./php/atSelf.php${a}`),
                    axios.get(`./php/csSelfCollect.php`) // 收藏的清單和會員判定
                ])
                .then(axios.spread((res1, res2) => {
                    this.article = res1.data;

                    // 收藏的清單
                    this.memberData[0].member = res2.data.member; //會員判定
                    this.memberData[0].memNo = res2.data.memNo;
                    this.memberData[0].artCollect = res2.data.artCollect.map(i => parseInt(i));
                    this.memberData[0].actCollect = res2.data.actCollect.map(i => parseInt(i));

                })).then(() => {
                    this.firstChecked();
                });

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
        },
        firstChecked() {
            if (this.memberData[0].member) {
                let a = this.memberData[0].artCollect.indexOf(parseInt(this.article.artNo));
                if (a > -1) this.article.isCollect = true;
                else this.article.isCollect = false;
            }
            // this.article.forEach((v, i) => {

            // });
        },
        doCollected(artNo) {
            console.log(this.article.artId);
            if (this.memberData[0].member)
                if (this.article.isCollect) {
                    // delete收藏資料;
                    this.deleteCollect(artNo, 'art');
                    this.memberData[0].artCollect.splice(
                        this.memberData[0].artCollect.indexOf(parseInt(artNo)), 1
                    );
                    this.article.isCollect = false;
                } else {
                    this.insertCollect(artNo, 'art');
                    this.memberData[0].artCollect.push(parseInt(artNo));
                    this.article.isCollect = true;
                }
            else {
                $("#signup_overlay").removeClass("signup_overlay-none");
                $("#signup_overlay").fadeIn(300);
                $("#container").removeClass("right-panel-active");
            }; //跳出登入視窗
        },
        deleteCollect(number, type) {
            let actNo, artNo;
            if (type == 'art') {
                actNo = 0;
                artNo = number;
            } else {
                artNo = 0;
                actNo = number;
            }
            axios.get('./php/deleteCollect.php', {
                params: {
                    "artNo": artNo,
                    "actNo": actNo,
                }
            }).then((res) => {
                console.log(res.data);
            });
        },
        insertCollect(number, type) {
            let actNo, artNo;
            if (type == 'art') {
                actNo = 0;
                artNo = number;
            } else {
                artNo = 0;
                actNo = number;
            }
            axios.get('./php/insertCollect.php', {
                params: {
                    "artNo": artNo,
                    "actNo": actNo,
                }
            }).then((res) => {
                console.log(res.data);
            });
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
    updated() {},

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