Vue.component('acRelateCard', {
    props: { acContents: Array },
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
            <div class="acSelectCard" v-for="acContent in acContents">
                    <a :href="'./acSelf.html?actNo=' + acContent.actNo">
                        <img :src="acContent.actpic1">
                    </a>
                
                <!-- 卡片文字 -->
                <h6 class="acSelectCard_title"><a :href="'./acSelf.html?actNo=' + acContent.actNo">{{acContent.actName}}</a></h6>
                
                <!-- 卡片時間 -->
                <div class="acSelectCard_icon">
                <i class="fas fa-share-alt acSelectCard-share_icon share-button" style="font-size:20px"  @click="openShareDialog(acContent.actNo)"></i>
                <i class="fas fa-bookmark acSelectCard-bookmark_icon" style="font-size:20px"></i>
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
                <a :href="'./aoCheck.html?actNo=' + contents[index].actNo"><input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register"></a>
                </div>
            </div>
        </div>
    `,
    methods: {
        openShareDialog(actNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `actNo=${actNo}`);
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
        })
    },
})