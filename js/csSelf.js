// ===================================================================
// 文章元件
// ===================================================================
Vue.component('cssart-layout', {
    props: ['art-Data'],
    data() {
        return {
            csArtData: this.artData
        }
    },
    template: `
    <div class="row csS-art">
        <div v-for="(item, index) in csArtData" :key="item.artId" class="csS-art__card">
            <a href="./atSelf.html">
                <img class="img-responsive" :src="item.artImg">
            </a>
            <div class="card-Info">
                <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                <span class="card-Info__category small">| {{item.artAuthor}}醫師</span>
            </div>
            <p><a href="./atSelf.html">{{item.artName}}</a></p>
            <p class="small">
                <a href="./atSelf.html">{{item.artContext | cutStringFilter}}</a>
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
            csActData: this.actData
        }
    },
    template: `
    <div id="csSelfAct">
        <div v-for="(item,index) in csActData" :key="item.actId" class="csSelfAct-card row">
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
                <p>{{item.actContext | ellipsisWords}}</p>
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
    },
    filters: {
        ellipsisWords: function (str) {
            // 加上 $ 字號
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
        let csNo;
        if (location.search && location.href.split('?')[1].split('=')[0] == 'csNo') {
            csNo = location.href.split('?')[1].split('=')[1];
        } else {
            location.replace("./csSelf.html?csNo=1");
        }
        axios.all([
                axios.get(`./php/csSelf.php?csNo=${csNo}`),
                axios.get(`./php/csSelfCards.php?csNo=${csNo}`)
            ])
            .then(axios.spread((res1, res2) => {
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


            }));
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