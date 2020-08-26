Vue.component('me-head', {
    template: `
        <div class="me-head row justify-content-start">
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
            <div :class="'me-select_item--'+footPrint" class="me-select_item col-3 col-md-12"><slot></slot></div> 
    `,

    computed: {
        footPrint() {
            if (this.selected) {
                return "selected"
            } else {
                return "unselected"
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
                <canvas class="ccChartOnly" width="500" height="500"></canvas>
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


var option = {
    legend: {
        display: 0
    },
    tooltips: {},
    elements: {
        line: {
            backgroundColor: "rgba(255, 99, 160, 0.2)",
            borderColor: "rgba(255, 99, 160, 0.2)"
        },
        point: {
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
            radius: 5,
            pointStyle: "circle",
            hoverRadius: 8
        }
    },
    scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 20,
            display: false
        },
        pointLabels: {
            fontSize: 18,
            fontFamily: "微軟正黑體"
        }
    },
    // layout: {
    //     padding: {
    //         left: 20,
    //         right: 20,
    //         top: 10,
    //         bottom: 10
    //     }
    // }
};





let vm = new Vue({
    el: '#app',
    data: () => {
        return {
            option: option,
            coData: [{}],
            coPastData: [{}],
            aoData: [{}],
            aoPastData: [{}],
            step: '',
            currentPage: '',
            iWantModify: false,
            errors: [],
            member: {
                memName: 'cc',
                memGender: '女',
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
                memAdd: '台北市南港區南港路一段四號之一',
            },

            // checkbox: '',

            orderShow: false,
            ////////////
            //showModal: false,
            //go: true,
            ////////////
            momentModify: {
                memName: 'cc',
                memGender: '女',
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
                memAdd: '台北市南港區南港路一段四號之一',
            },
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
                bDay: '生日',
                occ: '職業',
                email: '電子信箱',
                tel: '電話',
                add: '地址',
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
        goModify(d) {
            this.iWantModify = d;
        },
        giveUpModify(f) {
            this.iWantModify = f;
            // vm.momentModify = Object.assign({}, vm.momentModify, {
            //         memName: '',
            //         memGender: '',
            //         memBD: '',
            //         memAdd: '',
            //         memOcc: '',
            //         memTel: {
            //             countryCode: '',
            //             mobile: '',
            //         },
            //         memEmail: {
            //             value: '',
            //             valid: true,
            //         },
            //         memAdd: '',
            //     })
            vm.momentModify = Object.assign({}, vm.momentModify, vm.member);
        },
        confirmModify(k) {
            vm.member = Object.assign({}, vm.member, vm.momentModify);
            this.iWantModify = k;
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
                options: this.option,
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