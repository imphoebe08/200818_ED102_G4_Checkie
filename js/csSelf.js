// ===================================================================
// 文章元件
// ===================================================================
Vue.component('cssart-layout', {
    props: ['art-Data'],
    data() {
        return {
            csArtData: this.artData,
            csArtData2: [{
                    artId: 1,
                    artName: '因感情問題來看診的年輕女性，有這四個共同特點',
                    artAuthor: '蔡XX',
                    artContext: '不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。',
                    artImg: 'https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080',
                },
                {
                    artId: 2,
                    artName: '因感情問題來看診的年輕女性，有這四個共同特點',
                    artAuthor: '蔡XX',
                    artContext: '不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。',
                    artImg: 'https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080',
                },
                {
                    artId: 3,
                    artName: '因感情問題來看診的年輕女性，有這四個共同特點',
                    artAuthor: '蔡XX',
                    artContext: '不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。',
                    artImg: 'https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080',
                }
            ]
        }
    },
    template: `
    <div class="row csS-art">
        <div v-for="(item, index) in csArtData2" :key="item.artId" class="csS-art__card">
            <a href="./atSelf.html">
                <img class="img-responsive" :src="item.artImg">
            </a>
            <div class="card-Info">
                <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                <span class="card-Info__category small">| {{item.artAuthor}}醫師</span>
            </div>
            <p><a href="./atSelf.html">{{item.artName}}</a></p>
            <p class="small">
                <a href="./atSelf.html">{{item.artContext}}</a>
            </p>
            <div class="row card-tag">
                <a href="./atSelf.html" class="button2">More...</a>
            </div>
            <div class="card-share">
                <span>Share : </span>
                <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
            </div>
        </div>
    </div>`,
    methods: {},
    watch: {
        artData: function () {
            this.csArtData = this.artData;
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
            csActData2: [{
                actId: 1,
                actName: '夏日玩水消暑--象鼻岩獨木舟',
                actDate: '2020/09/30',
                actTime: '14:00~17:00',
                actContext: '象鼻岩是位於新北瑞芳的深澳岬角，有著高約30公尺的巨大海蝕洞，因為遠看就像是個巨大的象鼻而得名，周圍有大大小小的岩石群、垂直的峭壁，其實非常適合體驗刺激的獨木舟，感受不同角度被群岩環繞的的震撼感。',
                actImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf428880911095.5d4add485923f.jpg',
            }, {
                actId: 2,
                actName: '夏日玩水消暑--象鼻岩獨木舟',
                actDate: '2020/09/30',
                actTime: '14:00~17:00',
                actContext: '象鼻岩是位於新北瑞芳的深澳岬角，有著高約30公尺的巨大海蝕洞，因為遠看就像是個巨大的象鼻而得名，周圍有大大小小的岩石群、垂直的峭壁，其實非常適合體驗刺激的獨木舟，感受不同角度被群岩環繞的的震撼感。',
                actImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf428880911095.5d4add485923f.jpg',
            }, {
                actId: 3,
                actName: '夏日玩水消暑--象鼻岩獨木舟',
                actDate: '2020/09/30',
                actTime: '14:00~17:00',
                actContext: '象鼻岩是位於新北瑞芳的深澳岬角，有著高約30公尺的巨大海蝕洞，因為遠看就像是個巨大的象鼻而得名，周圍有大大小小的岩石群、垂直的峭壁，其實非常適合體驗刺激的獨木舟，感受不同角度被群岩環繞的的震撼感。',
                actImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf428880911095.5d4add485923f.jpg',
            }],
        }
    },
    template: `
    <div id="csSelfAct">
        <div v-for="(item,index) in csActData2" :key="item.actId" class="csSelfAct-card row">
            <div class="card-image col-3">
            <a href="./acSelf.html">
                <img :src="item.actImg" alt="">
            </a>
            </div>
            <div class="card-info col-9">
                <a href="./acSelf.html">
                    <h5>{{item.actName}}</h5>
                </a>
                <span>{{item.actDate}}</span>
                <span>{{item.actTime}}</span>
                <div class="share-buttons">
                        <span>Share : </span>
                        <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
                </div>
                <p>{{item.actContext}}</p>
            </div>

            <button class="joinBut button2"><a href="./acSelf.html">立即報名</a></button>
        </div>
    </div>
`,
    methods: {},
    watch: {
        actData: function () {
            this.csActData = this.actData;
        }
    }
});

// ===================================================================
// 推薦諮商師元件
// ===================================================================
Vue.component("csselfreco-layout", {
    props: ['reco-data'],
    data() {
        return {
            csRecoData: this.recoData,
            csRecoData2: [{
                recoId: 1,
                recoName: '勞樂程',
                recoContext: '國立臺灣師範大學教育心理與輔導學系 諮商組碩士班 在學,香港樹仁大學 輔導與心理學系 學士',
                recoImg: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1437388/517313_37962.jpg',
            }, {
                recoId: 2,
                recoName: '勞樂程',
                recoContext: '國立臺灣師範大學教育心理與輔導學系 諮商組碩士班 在學,香港樹仁大學 輔導與心理學系 學士',
                recoImg: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1437388/517313_37962.jpg',
            }, {
                recoId: 3,
                recoName: '勞樂程',
                recoContext: '國立臺灣師範大學教育心理與輔導學系 諮商組碩士班 在學,香港樹仁大學 輔導與心理學系 學士',
                recoImg: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1437388/517313_37962.jpg',
            }]
        }
    },
    template: `
    <div id="csSelfReco">
	    <div v-for="(item, index) in csRecoData2" :key="item.recoId" class="csSelfReco-card">
            <div class="card__image">
                <a href="./csSelf.html">
                    <img :src="item.recoImg" alt="">
                </a>
            </div>
            <div class="card__title">
                <h5><a href="./csSelf.html">{{ item.recoName }} 心理師</a></h5>
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
        csData: {},
        csArtData: {},
        csActData: {},
        csRecoData: {},
        series: [{
            name: 'Series 1',
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

    },
    mounted() {
        axios.get('../json/cs.json')
            .then((res) => {
                this.csData = res.data[0];
                for (let i = 0; i < 5; i++)
                    this.series[0].data[i] = this.csData.csType[i].csTypeNum;
            })
            .catch((error) => {
                console.log(error)
            });
        axios.get('../json/cs.json')
            .then((res) => {
                this.csArtData = res.data[0];
            })
            .catch((error) => {
                console.log(error)
            });
        axios.get('../json/cs.json')
            .then((res) => {
                this.csActData = res.data[0];
            })
            .catch((error) => {
                console.log(error)
            });
        axios.get('../json/cs.json')
            .then((res) => {
                this.csRecoData = res.data[0];
            })
            .catch((error) => {
                console.log(error)
            });
    },
    methods: {
        openOrderPage() {
            window.open("./coCalender.html", "_self");
        },
        openSelfPage() {
            window.open("./csSelf.html", "_self");
        },
        openCharRoomPage() {
            window.open("./chatRoom.html", "_self");
        }
    },
    watch: {
        csData: function () {
            for (let i = 0; i < 5; i++)
                this.series[0].data[i] = this.csData.csType[i].csTypeNum;
            this.$refs.newChart.updateSeries([{
                data: this.series[0].data
            }], false, true)
        }
    }
})


// ===================================================================
// 輪播套件
// ===================================================================
// 文章卡片
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


// 活動卡片
$('.slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 767,
        settings: {
            vertical: false,
            slidesToShow: 1,
            autoplay: true,
        },
    }]
});

// 推薦諮商師卡片
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