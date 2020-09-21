Vue.component("first-layout", {
    props: ["cs-datas"],
    data() {
        return {
            csData: [],
        }
    },
    template: `<li>
            <a href="./csSelf.html"><img :src="csData.csPic"></a>
            <h1><a :href="'./csSelf.html?csNo=' + csData.csNo">{{csData.csName}}</a></h1>
               <button><a :href="'./csSelf.html?csNo=' + csData.csNo">立即預約</a></button>
       </li>`,
    watch: {
        csDatas: function () {
            this.csData = this.csDatas;
        }
    },
});

Vue.component("second-layout", {
    props: ["cs-datas"],
    template: `<li class="class">
            <h5>認識諮商師</h5>
            <p>{{csData.csHis | cutStringFilter}}</p>
            <h5>治療專業</h5>
            <div class="inConselor__chart">
                <div id="chart">
                <apexchart ref="newChart" type="radar" width="100%" height="300" :options="chartOptions"
                    :series="series"></apexchart>
            </div>
            </div>
        </li>`,
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            csData: this.csDatas,
            screenWidth: window.innerWidth,
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
        }

    },
    watch: {
        csDatas: function () {
            this.csData = this.csDatas;
            for (let i = 0; i < 5; i++)
                this.series[0].data[i] = this.csData.csType[i].csTypeNum;
            this.$refs.newChart.updateSeries([{
                data: this.series[0].data
            }], false, true)
        }
    },
    filters: {
        cutStringFilter: function (str) {
            return str.substring(0, 100).concat('...')
        }
    }
});

Vue.component("third-layout", {
    props: ["cs-datas"],
    components: {
        apexchart: VueApexCharts,
    },
    template: ` <li class="inCs-slide__item swiper-slide">
                    <img :src="csData.csPic" @click="openSelfPage(csData.csNo)">
                    <h3 @click="openSelfPage(csData.csNo)">{{csData.csName}}</h3>
                    <div class="inConselor__chart">
                        <div id="chart">
                        <apexchart ref="newChart" type="radar" width="100%" height="300" :options="chartOptions"
                            :series="series"></apexchart>
                    </div>
                    </div>
                    <button @click="openSelfPage(csData.csNo)">立即預約</button>
                </li>`,
    methods: {
        openSelfPage(csNo) {
            window.open(`./csSelf.html?csNo=${csNo}`, "_self");
        },
    },
    data() {
        return {
            csData: this.csDatas,
            screenWidth: window.innerWidth,
            series: [{
                name: 'Series 1',
                data: [50, 50, 50, 50, 50],
            }],
            chartOptions: {
                chart: {
                    height: '50%',
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
        }

    },
    mounted() {},
    watch: {
        csDatas: function () {
            this.csData = this.csDatas;
            for (let i = 0; i < 5; i++)
                this.series[0].data[i] = this.csData.csType[i].csTypeNum;
            this.$refs.newChart.updateSeries([{
                data: this.series[0].data
            }], false, true)
        }
    }
});

new Vue({
    el: "#inCsGroup",
    components: {
        apexchart: VueApexCharts,
    },
    data: {
        screenWidth: window.innerWidth,
        csData: [],
    },
    mounted() {
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };
        axios.get('./php/inCs.php')
            .then((res) => {
                this.csData = res.data;
            })
            .catch((error) => {
                console.log(error)
            });
    }
});

// ========================================
// slider
// ========================================

function move() {
    if (
        window.innerWidth >= 576 &&
        document.querySelector(".activeNow").nextElementSibling == null
    ) {
        $("li.point").removeClass("activeNow");
        $("li.point:nth-child(1)").addClass("activeNow");
        $("li.leftLi").removeClass("move");
        $("li.rightLi").removeClass("move");
        $("li.leftLi:nth-child(1)").addClass("move");
        $("li.rightLi:nth-child(1)").addClass("move");
    } else if (window.innerWidth >= 576) {
        $(".activeNow").next().addClass("activeNow");
        $(".activeNow").prev().removeClass("activeNow");
        $(".move").next().addClass("move");
        $(".move").prev().removeClass("move");
    } else {}
}

function clickChange(e) {
    $("li.point").removeClass("activeNow");
    $(this).addClass("activeNow");
    $("li.leftLi").removeClass("move");
    $("li.rightLi").removeClass("move");

    let index = $("li.activeNow").attr("id").split("point")[1];
    $(`li.leftLi:nth-child(${index})`).addClass("move");
    $(`li.rightLi:nth-child(${index})`).addClass("move");
}

function startSlider() {
    let point = $("li.point");
    for (let i = 0; i < point.length; i++) {
        point[i].addEventListener("click", clickChange);
    }
    setInterval(move, 5000);
}

startSlider();

// ========================================
// swiper
// ========================================
let swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});