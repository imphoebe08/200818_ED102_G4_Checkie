Vue.component('cssart-layout', {
    props: ['art-Data'],
    data() {
        return {
            csArtData: this.artData,
        }
    },
    template: `<div class="row csS-art">
                    <div v-for="i in 3" class="csS-art__card">
                        <a href="./atSelf.html">
                            <img class="img-responsive"
                                src="https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080">
                        </a>
                        <div class="card-Info">
                            <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                            <span class="card-Info__category small">| 蔡XX醫師</span>
                        </div>
                        <p @click="openArtPage">因感情問題來看診的年輕女性，有這四個共同特點</p>
                        <p class="small" @click="openArtPage">不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。</p>
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
    methods: {
        openArtPage() {
            window.open("./atSelf.html", "_self");
        },
    },
    watch: {
        artData: function () {
            this.csArtData = this.artData;
        }
    }
})

Vue.component("csselfact-layout", {
    props: ['act-data'],
    data() {
        return {
            csActData: this.actData,
        }
    },
    template: `
    <div id="csSelfAct">
        <div v-for="i in 3" class="csSelfAct-card row">
            <div class="card-image col-3" @click="openActPage">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf428880911095.5d4add485923f.jpg" alt="">
            </div>
            <div class="card-info col-9">
                <h5 @click="openActPage">夏日玩水消暑--象鼻岩獨木舟</h5>
                <span>2020/09/30</span>
                <span>14:00~17:00</span>
                <div class="share-buttons">
                        <span>Share : </span>
                        <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
                </div>
                <p>象鼻岩是位於新北瑞芳的深澳岬角，有著高約30公尺的巨大海蝕洞，因為遠看就像是個巨大的象鼻而得名，周圍有大大小小的岩石群、垂直的峭壁，其實非常適合體驗刺激的獨木舟，感受不同角度被群岩環繞的的震撼感。</p>
            </div>
            
            <button class="joinBut button2" @click="openActPage">立即報名</button>
        </div>
    </div>
`,
    methods: {
        openActPage() {
            window.open("./acSelf.html", "_self");
        },
    },
    watch: {
        actData: function () {
            this.csActData = this.actData;
        }
    }
});

Vue.component("csselfreco-layout", {
    props: ['reco-data'],
    data() {
        return {
            csRecoData: this.recoData,
        }
    },
    template: `
                <div id="csSelfReco">
	                <div v-for="i in 3" class="csSelfReco-card">
                        <div class="card__image" @click="openSelfPage">
                            <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1437388/517313_37962.jpg"
                                alt="">
                        </div>
                        <div class="card__title">
                            <h5  @click="openSelfPage">勞樂程 實習心理師</h5>
                        </div>
                        <div class="card__info">
                            <p>
                                國立臺灣師範大學教育心理與輔導學系 諮商組碩士班 在學<br>
                                香港樹仁大學 輔導與心理學系 學士<br>
                            </p>
                        </div>
                    </div>
                </div>
`,
    methods: {
        openSelfPage() {
            window.open("./csSelf.html", "_self");
        },
    },
    watch: {
        recoData: function () {
            this.csRecoData = this.recoData;
        }
    }
});

// Vue.component('radar-chart', {
//     extends: VueChartJs.Radar,
//     props: ['radar-data'],
//     data() {
//         return {
//             csData: this.radarData,
//             dataNumbers: [],
//             data: {
//                 labels: ["家庭關係", "人際關係", "伴侶關係", "壓力創傷", "自我探索"],
//                 datasets: [{
//                     label: "分數",
//                     data: [0, 0, 0, 0, 0],
//                 }]
//             },
//             option: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 legend: {
//                     display: 0
//                 },
//                 tooltips: {},
//                 elements: {
//                     line: {
//                         backgroundColor: "rgba(255, 99, 160, 0.2)",
//                         borderColor: "rgba(255, 99, 160, 0.2)"
//                     },
//                     point: {
//                         backgroundColor: "rgba(255, 99, 132, 0.2)",
//                         hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
//                         radius: 5,
//                         pointStyle: "circle",
//                         hoverRadius: 8
//                     }
//                 },
//                 scale: {
//                     angleLines: {
//                         display: false
//                     },
//                     ticks: {
//                         suggestedMin: 0,
//                         suggestedMax: 100,
//                         stepSize: 20,
//                         display: false
//                     },
//                     pointLabels: {
//                         fontSize: 16,
//                         fontFamily: "微軟正黑體"
//                     }
//                 },
//             }
//         }
//     },
//     watch: {
//         radarData: function () {
//             this.csData = this.radarData;
//             for (let i = 0; i < 5; i++)
//                 this.data.datasets[0].data[i] = this.csData.csType[i].csTypeNum;
//         }
//     }
// })


let vmcssart = new Vue({
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

$('.owl-carousel2').owlCarousel({
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
        768: {
            items: 3,
        }
    }
});

$('.owl-carousel3').owlCarousel({
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