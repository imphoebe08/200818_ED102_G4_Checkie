Vue.component('reSelectCard', {
    props: { acContents: Array },
    data() {
        return {
            num: 3,
        }
    },
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
        <div class="acSelectCard" v-for="acContent in aaa(num)">
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
            <p class="acSelectCard_time">活動日期：<br>{{acContent.actStart}} ~ <br>{{acContent.actEnd}}</p>
            </div>
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">報名截止日期：<br>{{acContent.actPend}}</p>
            </div>

            <div class="acSelectCard_bottomBlock">
            <p class="acSelectCard_person"> 剩餘名額：{{acContent.actMax - acContent.actCount}}</p>
            <a :href="'./aoCheck.html?actNo=' + acContent.actNo"><input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register"></a>
            </div>
        </div>
    </div>

    `,
    methods: {
        openShareDialog(actNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `actNo=${actNo}`);
        },
        aaa(num,data) {
            let rd = this.rand(0, this.acContents.length);
            return this.acContents.slice(rd, data);
        },
        rand(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        },
        randArr(num, data) {},


    },
    computed: {

    }

});


let vm = new Vue({
    el: '#fullpage',
    data: {
        cards: [{
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }, {
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }, {
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }],
        // 打亂陣列
        cardsBack: ["./img/oracleCard/card_cover//cover_angel.png", "./img/oracleCard/card_cover/cover_heaven.png", "./img/oracleCard/card_cover/cover_illustration.png"],
        deckNo: "",
        num: 3,
        title: ["精選活動", "講座", "療癒", "戶外", "藝文"],
        contents: [],
        comments: [],
        isActive: true,
        index: 0,
        shareNo: 0,
        shareUrl: '123',

    },
    beforeMount() {
        this.randArr(this.cardsBack.length, this.cardsBack);
    },
    mounted() {
        axios.get('./json/card.json')
            .then((res) => {
                // this.cards = res.data;
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });

        axios.get('./php/acMain.php').then((res) => {
            this.contents = res.data
            console.log(res.data);
            Vue.nextTick().then(function() {
                vm.installOwlCarousel();
            });
            

        })

        axios.get('./json/acMain_comments.json').then((data) => {
            this.comments = data.data
        })
    },
    methods: {
        //截圖
        // getScreenshot() {
        //     // alert(123);
        //     setTimeout(() => {
        //         html2canvas(document.getElementById('cutScreen')).then(function(canvas) {
        //             $('#cutPhoto').append(canvas);
        //         })
        //     }, 3000)

        // },
        // 陣列亂數好用喔
        randArr(num, data) {
            for (var i = 0; i < num; i++) {
                var iRand = parseInt(num * Math.random());
                var temp = data[i];
                data[i] = data[iRand];
                data[iRand] = temp;
            }
            return data;
        },

        cardChangeData(data) {
            //產生XMLHttpRequest物件
            // console.log(123)
            let aaa = data;
            setTimeout(function() {
                for (let index = 0; index < 3; index++) {
                    vm.$set(vm.$data.cardsBack, index, aaa)
                }
            }, 2500);
            switch (data) {
                case "./img/oracleCard/card_cover//cover_angel.png":
                    this.deckNo = 1;
                    break;
                case "./img/oracleCard/card_cover/cover_heaven.png":
                    this.deckNo = 2;
                    break;
                case "./img/oracleCard/card_cover/cover_illustration.png":
                    this.deckNo = 3;
                    break;
            }
            var xhr = new XMLHttpRequest();

            //註冊callback function
            xhr.onload = function() {
                    // if (xhr.readyState == XMLHttpRequest.DONE) { //server端已處理完畢
                    if (xhr.status == 200) { //success
                        cardData = JSON.parse(xhr.responseText);
                        vm.randArr(cardData.length, cardData);
                        for (let i = 0; i < 3; i++) {
                            vm.$data.cards[i].cardPic = cardData[i].cardPic
                            vm.$data.cards[i].cardTitle = cardData[i].cardTitle
                            vm.$data.cards[i].cardContent = cardData[i].cardContent
                        }
                    } else {
                        console.log(xhr.status);
                    }
                }
                // }

            //設定好所要連結的程式
            // 改路徑
            let url = "./php/oracleCard.php?deckNo=" + this.deckNo;
            console.log(url)
            xhr.open("get", url, true); //--------------
            //送出資料
            xhr.send(null);

        },
        category_click(value) {
            this.index = value;
        },
        openShareDialog(str) {
            console.log(str);
            let shareButton = document.querySelector(".share-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.add("is-open");
            this.shareNo = str;
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
    },
    computed: {
        addNum() {
            return this.contents;
        },
        result() {
            if (this.index == 0) {
                return this.contents;
            } else {
                this.$children[0].$data.num = 3;
                return this.contents.filter(item => item.actTypeNo == this.index || item.actTypeNo2 == this.index);
            }
        }
    },
});