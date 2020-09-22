Vue.component('acRelateCard', {
    props: { acContents: Array },
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
            <div class="acSelectCard" v-for="(acContent,index) in acContents">
                    <a :href="'./acSelf.html?actNo=' + acContent.actNo">
                        <img :src="acContent.actpic1">
                    </a>
                
                <!-- 卡片文字 -->
                <h6 class="acSelectCard_title"><a :href="'./acSelf.html?actNo=' + acContent.actNo">{{acContent.actName}}</a></h6>
                
                <!-- 卡片時間 -->
                <div class="acSelectCard_icon">
                <i class="fas fa-share-alt acSelectCard-share_icon share-button" style="font-size:20px"  @click="openShareDialog(acContent.actNo)"></i>
                <i class="fas fa-bookmark acSelectCard-bookmark_icon" style="font-size:20px" :class="[{ colorful: acContent.isCollect }, 'icon']" @click="doCollected(index)"></i>
                </div>
                <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">活動日期：<br>{{acContent.actStart}} ~ <br>{{acContent.acEndDate}}</p>
                </div>
                <div class="acSelectCard_text">
                    <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                    <p class="acSelectCard_time">報名截止日期：<br>{{acContent.actPend}}</p>
                </div>

                <div class="acSelectCard_bottomBlock">
                <p class="acSelectCard_person"> 剩餘名額：{{acContent.actMax - acContent.actCount}}</p>
                <a :href="'./aoStepper.html?actNo=' + acContents[index].actNo"><input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register"></a>
                </div>
            </div>
        </div>
    `,
    methods: {
        openShareDialog(actNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `actNo=${actNo}`);
        },
        doCollected(index) {
            this.$emit('do-collected', index);
        }
    },
});

let acVue = new Vue({
    el: "#acSelf",

    data: {
        date: "",
        contents: [],
        cards: [],
        index: location.href.split('?')[1].split('=')[1] - 1,
        shareUrl: "https://tw.yahoo.com/?", //傳送的文章或活動主連結
        shareNo: '',
        // 會員分享用
        memberData: [{
            member: false,
            memNo: 1,
            artCollect: [1, 2, 4, 7], //每個會員要有自己的收藏編號陣列
            actCollect: [1, 2, 4, 7] //每個會員要有自己的收藏編號陣列
        }],
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
                    996: {
                        items: 2,
                    },
                    1180: {
                        items: 3,
                    }
                }
            });
        },

        //分享功能
        openShareDialog(str) {
            let shareButton = document.querySelector(".share-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.add("is-open");
            this.shareNo = str;
        },
        openShareDialog2(actNo) {
            let shareButton = document.querySelector(".share-button2");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.add("is-open");
            this.shareNo = `actNo=${actNo}`;
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

        //收藏功能
        firstChecked2() {
            if (this.memberData[0].member)
                this.cards.forEach((v, i) => {
                    let a = this.memberData[0].actCollect.indexOf(parseInt(v.actNo));
                    if (a > -1) this.cards[i].isCollect = true;
                    else this.cards[i].isCollect = false;
                });
            else {
                this.result.forEach((v, i) => {
                    this.result[i].isCollect = false;
                });
            }
        },
        doCollected2(index) {
            if (this.memberData[0].member)
                if (this.cards[index].isCollect) {
                    // delete收藏資料;
                    this.deleteCollect(this.cards[index].actNo, 'act');
                    this.memberData[0].actCollect.splice(
                        this.memberData[0].actCollect.indexOf(parseInt(this.cards[index].actNo)), 1
                    );
                    this.cards[index].isCollect = false;
                } else {
                    // insert收藏資料;
                    this.insertCollect(this.cards[index].actNo, 'act');
                    this.memberData[0].actCollect.push(parseInt(this.cards[index].actNo));
                    this.cards[index].isCollect = true;
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
        checkMember() {
            axios.get(`./php/csSelfCollect.php`).then((res3) => {
                this.memberData[0].member = res3.data.member; //會員判定
                this.memberData[0].memNo = parseInt(res3.data.memNo);
                this.memberData[0].artCollect = res3.data.artCollect.map(i => parseInt(i));
                this.memberData[0].actCollect = res3.data.actCollect.map(i => parseInt(i));
                this.firstChecked2();
            })
        }
    },
    mounted() {
        let actNo = location.href.split('?')[1].split('=')[1];
        var vm = this;
        axios.get(`../php/acSelf.php?actNo=${actNo}`).then((res) => {
            this.contents = res.data
            console.log(this.contents)
        })
        axios.get('../php/acMain.php').then((res) => {
            this.cards = res.data
                // console.log(res)
            Vue.nextTick().then(function() {
                vm.installOwlCarousel();
            });
            this.checkMember();
            this.firstChecked2();
        })
    },
    updated() {
        this.checkMember();
        this.firstChecked2();
    }

})