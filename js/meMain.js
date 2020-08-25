Vue.component('me-head', {
    template: `
        <div class="me-head row">
        <slot></slot>
        </div>
    `,

});





Vue.component('me-select_item', {
    props: {
        selected: { type: Boolean, default: false },
        item: { type: Number, required: true },
        //item: [1, 2, 3, 4],
    },
    data() {
        return {}
    },
    template: `
            <div :class="'me-select_item--'+footPrint" class="me-select_item col-2 col-md-12"><slot></slot></div> 
    `,

    computed: {
        footPrint() {
            if (this.selected) {
                return "selected"
            }
        }
    },
});



Vue.component('select-page-content', {
    template: `
        <div class="select-page-content row">
        <slot></slot>
        </div>
    `,
    // mounted() {
    //     console.log(this.currentStep);
    // },

});


Vue.component('mem-driver', {
    template: `
        <hr class="mem-driver col-12">
    `,

});


Vue.component('select-page', {
    // props: {
    //     step: { type: Number, required: true },
    // },
    // data() {
    //     return {}
    // },
    template: `
        <div class="select-page col-12">
            <div class="row">
                <slot></slot>
            </div>
        </div>
    `,
    // mounted() {
    //     console.log(this.step, this.$parent.$parent.currentStep);
    // },
    // methods: {
    //     enter() {
    //         console.log(1234)
    //     }
    // }
});




Vue.component('back-btn', {
    template: `
        <div class="button2" @click="callback($event)">
            <slot></slot>
        </div>
    `,
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    },
});




Vue.component('chart', {
    template: `
    <div class="row">
        <div class="col-12">
            <div class="mem-radarChart-container">
                <canvas class="ccChartOnly"></canvas>
            </div>
        </div>
        <div class="col-12">
            <div class="mem-barChart-container">
                <canvas class="bbChartOnly"></canvas>
            </div>
        </div>   
    </div>
    `,
});


Vue.component('co-order', {
    template: `
    <div class="row justify-content-center">
        <div class="mem-order-each col-10">
            <div class="row">
                <div class="mem-order-left col-4 mem-modify-padding">
                    <div class="mem-order-dcName">
                        <slot name="title"></slot>
                    </div>
                    <div class="mem-order-img">
                        <slot name="img"></slot>
                    </div>
                </div>
                <div class="mem-order-right col-8 mem-modify-padding">
                    <div class="row justify-content-end">
                        <slot name="delete"></slot>
                    </div>
                    <div class="row justify-content-center">
                        <table class="mem-order-table">
                            <tr>
                                <th>地點:</th>
                                <td>台北checkie諮商室</td>
                            </tr>
                            <tr>
                                <th>時間:</th>
                                <td>2020/08/24 上午10:00</td>
                            </tr>
                            <tr>
                                <th>諮商時間:</th>
                                <td>1⼩時</td>
                            </tr>
                        </table>
                    </div>
                    <div class="row ">
                        <mem-driver></mem-driver>
                        <div class="col-6 offset-6 mem-coOrder-total">
                            <span>費⽤：</span>
                            <span>2000</span>
                            <span>.NT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
});






let vm = new Vue({
    el: '#app',
    data: () => {
        return {
            coData: [{}],
            coPastData: [{}],
            aoData: [{}],
            aoPastData: [{}],
            currentPage: '',
            errors: [],
            memName: 'cc',
            memGender: 'female',
            memBD: '1999/99/99',
            memAdd: 'hahahahahaha',
            memOcc: 'makeup artist',
            memTel: {
                countryCode: '886',
                mobile: '0921132409',
            },
            memEmail: {
                value: 'misvamda@gmail.com',
                valid: true,
            },
            // checkbox: '',

            orderShow: false,
            ////////////
            //showModal: false,
            //go: true,
            ////////////
            titles: {
                z: '會員總攬',
                a: '會員資料',
                b: '諮商預約',
                c: '活動報名',
                d: '心理評估',
            },
            memTitle: {
                name: '姓名',
                gender: '性別',
                bDay: '出生日期',
                occ: '職業',
                email: '電子信箱',
            },
            coOrder: {
                a: '已預約',
                b: '預約記錄',
            },

        }
    },

    methods: {
        selectIt(v) {
            //console.log(typeof(v))
            this.currentPage = v;
            // console.log(this.currentPage);
            //console.log(123)
        },
        pageChange(a) {
            this.currentPage = a;
        },
        backToIndex(c) {
            this.currentPage = c;
        },


        chart() {
            var cerise = document.querySelector('.ccChartOnly');
            myChart = new Chart(cerise, {
                type: 'radar',
                data: {
                    labels: ['自我探索', '家庭關係', '人際關係', '伴侶關係', '壓力創傷'],
                    datasets: [{
                        data: [60, 70, 94, 82, 61]
                    }],

                },
                options: {
                    scale: {
                        angleLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 100
                        }
                    }
                }
            });
            var ctx = $('.bbChartOnly');
            myBarChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: ['自我探索', '家庭關係', '人際關係', '伴侶關係', '壓力創傷'],
                    datasets: [{
                        label: "Test",
                        data: [90, 75, 80, 60, 55],
                        backgroundColor: '#91D0EB',
                        hoverBackgroundColor: '#FFA492',
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: 50,
                                max: 100,
                            }
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        }

    },
    mounted() {
        axios.get('./json/test.json')
            .then(response => {
                this.coData = response.data;

                console.log(response.data);
            });
        axios.get('./json/test2.json')
            .then(response => {
                this.coPastData = response.data;
            });

        axios.get('./json/test3.json')
            .then(response => {
                this.aoData = response.data;
            });
        axios.get('./json/test4.json')
            .then(response => {
                this.aoPastData = response.data;
            });


        this.chart();
        window.onresize = () => {
            this.chart();
        };


    },
    updated() {
        if (this.currentPage == this.titles.z || this.currentPage == this.titles.d) {
            this.chart();
        }

    },

    created() {
        this.currentPage = this.titles.z;
    },


});