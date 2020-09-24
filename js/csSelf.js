// ===================================================================
// 文章元件
// ===================================================================
Vue.component('cssart-layout', {
    props: ['art-Data'],
    data() {
        return {
            csArtData: this.artData,
        }
    },
    template: `
    <div class="row csS-art">
        <div v-for="(item, index) in csArtData" :key="item.artId" class="csS-art__card">
            <a :href="'./atSelf.html?artNo='+ item.artId">
                <img class="img-responsive" :src="item.artImg">
            </a>
            <div class="card-Info">
                <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">{{item.artDate.split(' ')[0]}}</span>
                <span class="card-Info__category small">| {{item.artAuthor}}醫師</span>
            </div>
            <p><a :href="'./atSelf.html?artNo='+ item.artId">{{item.artName}}</a></p>
            <p class="small">
                <a :href="'./atSelf.html?artNo='+ item.artId">{{item.artContext | cutStringFilter}}</a>
            </p>
            <div class="row card-tag">
                <a :href="'./atSelf.html?artNo='+ item.artId" class="button2">More...</a>
            </div>
            <div class="card-share">
                <span>Share : </span>
                <a href="javascript:void(0)" class="small"><i class="fa fa-share" :class="['icon','share-button']" @click="openShareDialog(item.artId)"></i></a>
                <a href="javascript:void(0)" class="small"><i class="fa fa-bookmark" :class="[{ colorful: item.isCollect }, 'icon']" @click="doCollected(index)"></i></a>
            </div>
        </div>
    </div>`,
    methods: {
        openShareDialog(value) {
            this.$emit('share', `atSelf.html?artNo=${value}`);
        },
        doCollected(index) {
            this.$emit('do-collected', index);
        }

    },
    watch: {
        artData: function () {
            this.csArtData = this.artData;
        }
    },
    filters: {
        cutStringFilter: function (str) {
            return str.substring(0, 30).concat('...')
        }
    }
})

// ===================================================================
// 活動元件
// ===================================================================
Vue.component("csselfact-layout", {
    props: ['act-data'],
    data() {
        return {
            csActData: this.actData,
        }
    },
    template: `
    <div id="csSelfAct">
        <div v-for="(item,index) in csActData" :key="item.actId" class="csSelfAct-card row">
            <div class="card-image col-3">
            <a :href="'./acSelf.html?actNo='+ item.actId">
                <img :src="item.actImg" alt="">
            </a>
            </div>
            <div class="card-info col-9">
                <a :href="'./acSelf.html?actNo='+ item.actId">
                    <h5>{{item.actName}}</h5>
                </a>
                <span>{{item.actDate}}</span>
                <span>{{item.actTime}}</span>
                <div class="share-buttons">
                        <span>Share : </span>
                        <a href="javascript:void(0)" class="small"><i class="fa fa-share" :class="['icon','share-button']" @click="openShareDialog(item.actId)"></i></a>
                        <a href="javascript:void(0)" class="small"><i class="fa fa-bookmark" :class="[{ colorful: item.isCollect }, 'icon']" @click="doCollected(index)"></i></a>
                </div>
                <p>{{item.actContext | ellipsisWords}}</p>
            </div>

            <button class="joinBut button2"><a :href="'./acSelf.html?actNo='+ item.actId">立即報名</a></button>
        </div>
        <p class="nonData" v-if="csActData.length == 0" text-align-center>沒有相關活動~</p>
    </div>
`,
    methods: {
        openShareDialog(value) {
            this.$emit('share', `acSelf.html?actNo=${value}`);
        },
        doCollected(index) {
            this.$emit('do-collected', index);
        }
    },
    watch: {
        actData: function () {
            this.csActData = this.actData;
        }
    },
    filters: {
        ellipsisWords: function (str) {
            let str2 = str.slice(0, 30);
            str2 += '...';
            return str2;
        },
    }
});

// ===================================================================
// 推薦諮商師元件
// ===================================================================
Vue.component("csselfreco-layout", {
    props: ['reco-data'],
    data() {
        return {
            csRecoData: this.recoData
        }
    },
    template: `
    <div id="csSelfReco">
	    <div v-for="(item, index) in csRecoData" :key="item.recoId" class="csSelfReco-card">
            <div class="card__image">
                <a :href="'./csSelf.html?csNo=' + item.recoId">
                    <img :src="item.recoImg" alt="">
                </a>
            </div>
            <div class="card__title">
                <h5><a :href="'./csSelf.html?csNo='+item.recoId">{{ item.recoName }} 心理師</a></h5>
            </div>
            <div class="card__info">
                <p v-html="clipToParagraph(item.recoContext)"></p>
            </div>
        </div>
    </div>
`,
    methods: {},
    watch: {
        recoData: function () {
            this.csRecoData = this.recoData;
        }
    },
    methods: {
        clipToParagraph(str) {
            return str.replace(/,/g, '<br>');
        }
    }
});

// ===================================================================
// new Vue
// ===================================================================
let vmcss = new Vue({
    el: "#app",
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        shareUrl: "http://140.115.236.71/demo-projects/ED102/ED102G4/", //傳送的文章或活動主連結
        shareNo: '', //傳送的文章或活動編號
        csData: {},
        csArtData: {},
        csActData: {},
        csRecoData: {},
        series: [{
            name: '自評分數',
            data: [50, 50, 50, 50, 50],
        }],
        chartOptions: {
            chart: {
                height: 250,
                type: 'radar',
            },
            xaxis: {
                categories: ['家庭關係', '人際關係', '伴侶關係', '壓力創傷', '自我探索'],
                labels: {
                    style: {
                        colors: ['#666', '#666', '#666', '#666', '#666'],
                        fontSize: '12px',
                        fontFamily: '微軟正黑體,Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                },
                range: 100,
            },
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
            },
            fill: {
                colors: ['#e05891']
            },
            colors: ['pink'],
            chart: {
                toolbar: {
                    show: false,
                }
            }
        },
        // 會員分享用
        memberData: [{
            member: true,
            memNo: 1,
            artCollect: [1, 2, 4, 7], //每個會員要有自己的收藏編號陣列
            actCollect: [1, 2, 4, 7] //每個會員要有自己的收藏編號陣列
        }],

    },
    mounted() {
        let csNo;
        if (location.search && location.href.split('?')[1].split('=')[0] == 'csNo') {
            csNo = location.href.split('?')[1].split('=')[1];
        } else {
            location.replace("./csSelf.html?csNo=1");
        }
        axios.all([
                axios.get(`./php/csSelf.php?csNo=${csNo}`),
                axios.get(`./php/csSelfCards.php?csNo=${csNo}`),
                axios.get(`./php/csSelfCollect.php`) // 收藏的清單和會員判定
            ])
            .then(axios.spread((res1, res2, res3) => {
                this.csData = res1.data;
                for (let i = 0; i < 5; i++) {
                    this.series[0].data[i] = this.csData.csType[i].csTypeNum
                };

                this.csArtData = res2.data.csArtData;
                this.csActData = res2.data.csActData;
                this.csRecoData = res2.data.csRecoData;

                Vue.nextTick().then(() => {
                    this.installOwlCarousel1();
                    this.installOwlCarousel2();
                    this.installOwlCarousel3();
                });

                // 收藏的清單
                this.memberData[0].member = res3.data.member; //會員判定
                this.memberData[0].memNo = res3.data.memNo;
                this.memberData[0].artCollect = res3.data.artCollect.map(i => parseInt(i));
                this.memberData[0].actCollect = res3.data.actCollect.map(i => parseInt(i));

            })).then(() => {
                this.firstChecked();
                this.firstChecked2();
                this.$refs.newChart.updateSeries([{
                    data: this.series[0].data
                }], false, true)
            });
    },
    updated() {
        this.firstChecked();
        this.firstChecked2();
    },
    methods: {
        installOwlCarousel1: function () {
            $('.owl-carousel1').owlCarousel({
                loop: false,
                mouseDrag: true,
                touchDrag: true,
                center: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    }
                }
            });
        },
        installOwlCarousel2: function () {
            $('.owl-carousel2').owlCarousel({
                loop: false,
                mouseDrag: true,
                touchDrag: true,
                center: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 3,
                    }
                }
            });
        },
        installOwlCarousel3: function () {
            $('.slider').slick({
                arrows: false,
                dots: false,
                vertical: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                verticalSwiping: true,
                autoplay: false,
                autoplaySpeed: 2000,
                centerMode: true,
                swipeToSlide: true,
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        slidesToShow: 1,
                        autoplay: true,
                        swipeToSlide: true,
                        slidesToScroll: 1,
                        centerMode: true,
                    },
                }]
            });
        },
        // 分享用
        openShareDialog(str) {
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
        // 收藏用
        firstChecked() {
            if (this.memberData[0].member)
                this.csArtData.forEach((v, i) => {
                    let a = this.memberData[0].artCollect.indexOf(parseInt(v.artId));
                    if (a > -1) this.csArtData[i].isCollect = true;
                    else this.csArtData[i].isCollect = false;
                });
        },
        firstChecked2() {
            if (this.memberData[0].member)
                this.csActData.forEach((v, i) => {
                    let a = this.memberData[0].actCollect.indexOf(parseInt(v.actId));
                    if (a > -1) this.csActData[i].isCollect = true;
                    else this.csActData[i].isCollect = false;
                });
        },
        doCollected(index) {
            console.log(this.csArtData[index].artId);
            if (this.memberData[0].member)
                if (this.csArtData[index].isCollect) {
                    // delete收藏資料;
                    this.deleteCollect(this.csArtData[index].artId, 'art');
                    this.memberData[0].artCollect.splice(
                        this.memberData[0].artCollect.indexOf(parseInt(this.csArtData[index].artId)), 1
                    );
                    this.csArtData[index].isCollect = false;
                } else {
                    this.insertCollect(this.csArtData[index].artId, 'art');
                    this.memberData[0].artCollect.push(parseInt(this.csArtData[index].artId));
                    this.csArtData[index].isCollect = true;
                }
            else {
                $("#signup_overlay").removeClass("signup_overlay-none");
                $("#signup_overlay").fadeIn(300);
                $("#container").removeClass("right-panel-active");
            }; //跳出登入視窗
        },
        doCollected2(index) {
            if (this.memberData[0].member)
                if (this.csActData[index].isCollect) {
                    // delete收藏資料;
                    this.deleteCollect(this.csActData[index].actId, 'act');
                    this.memberData[0].actCollect.splice(
                        this.memberData[0].actCollect.indexOf(parseInt(this.csActData[index].actId)), 1
                    );
                    this.csActData[index].isCollect = false;
                } else {
                    // insert收藏資料;
                    this.insertCollect(this.csActData[index].actId, 'act');
                    this.memberData[0].actCollect.push(parseInt(this.csActData[index].actId));
                    this.csActData[index].isCollect = true;
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
        doMessage(csNo) {
            axios.get('./php/checkLogin.php')
                .then((res) => {
                    if (res.data) {
                        axios.get('./php/insertMessageFromCsSelf.php', {
                            params: {
                                'csNo': csNo
                            }
                        }).then(() => {
                            window.location.assign('./meMain.html');
                        })
                    } else {
                        $("#signup_overlay").removeClass("signup_overlay-none");
                        $("#signup_overlay").fadeIn(300);
                        $("#container").removeClass("right-panel-active");
                    }
                })
        }
    },
    watch: {
        csData: function () {
            for (let i = 0; i < 5; i++)
                this.series[0].data[i] = this.csData.csType[i].csTypeNum;
            // this.$refs.newChart.updateSeries([{
            //     data: this.series[0].data
            // }], false, true)
        }
    },
})


// ===================================================================
// 輪播套件
// ===================================================================
// 文章卡片



// 活動卡片
// $('.slider').slick({
//     arrows: false,
//     dots: false,
//     vertical: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     verticalSwiping: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     centerMode: true,
//     swipeToSlide: true,
//     responsive: [{
//         breakpoint: 500,
//         settings: {
//             vertical: false,
//             verticalSwiping: false,
//             slidesToShow: 1,
//             autoplay: true,
//             swipeToSlide: true,
//             slidesToScroll: 1,
//             centerMode: true,
//         },
//     }]
// });