Vue.component('step-head', {
    props: {},
    data() {
        return {

        }
    },
    template: `
        <div class="step-head row">
        <slot></slot>
        </div>
    `,

});





Vue.component('step-head-step', {
    props: {
        complete: { type: Boolean, default: false },
        step: { type: Number, required: true },
    },
    data() {
        return {}
    },
    template: `
        <div class="step-head-step">
            <span :class="'step-head-step--'+currentColor" class="step-head-step_item">{{step}}</span> 
            <div class="step-head-step_text"><slot></slot></div>
        </div>
    `,

    computed: {
        currentColor() {
            if (this.complete) {
                return "complete"
            } else {
                return "incomplete"
            }
        }
    },
});



Vue.component('stepper-content', {
    template: `
        <div class="stepper-content">
        <slot></slot>
        </div>
    `,
    // mounted() {
    //     console.log(this.currentStep);
    // },

});


Vue.component('c-driver', {
    template: `
        <hr class="c-driver">
    `,

});


Vue.component('c-stepper', {
    props: {
        step: { type: Number, required: true },
        // current: { type: Number, required: true },
        //current: this.$parent.$parent.currentSte,
    },
    data() {
        return {}
    },
    template: `
    
        <div class="c-stepper">
        <slot></slot>
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




Vue.component('c-btn', {
    template: `
        <div class="button4" @click="callback($event)">
            <slot></slot>
        </div>
    `,
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    },
});



Vue.component('toggle_button', {
    template: `
        <button :class="{ active : active }" @click="toggleClick"> 
        {{ active ? "打開訂單明細" : "收合訂單明細" }} 
        </button>`,
    data: function() {
        return {
            //text: '打開訂單明細',
            active: true,
            text: true,
        }
    },
    methods: {
        toggleClick: function() {
            this.active = !this.active;
            this.$emit("childopen", this.text);
            this.text = !this.text;
            //this.text = this.active ? '收合訂單明細' : '打開訂單明細';
            //console.log(button.default);
        }
    },

});

Vue.component('cs-template', {
    props: ['csData', 'csOTime', 'csHour', 'price'],
    template: `
<div class="cos-counselor col-md-3 col-sm-12">
    <div class="row">
        <div class=" col-md-12 col-4 co-counselor-pic">
            <div class="co-counselor-content">
                <img :src="csData.csPic" alt="John">
            </div>
        </div>
        <div class="col-md-12 col-8 co-counselor-text">

            <div class="row align-items-center ">
                <div class="col-md-12 col-6 ">諮商心理師</div>
                <div class="col-md-12 col-6 ">{{csData.csName}}</div>
            </div>
        </div>


        <div class="col-12 co-counselor-order ">
            <div class="row justify-content-between ">
                <div class=" col-md-12 col-6 ">
                    <div>預約時段</div>
                    <span>{{csOTime.date}}</span>
                    <span>{{csOTime.time}}</span>
                </div>
                <div class=" col-md-12 col-6 ">
                    <div>預約時數</div>
                    <span>{{csHour}}小時</span>
                </div>
            </div>




            <div class="co-counselor-order_item ">
                <span>共計</span>
                <span>123元</span>
            </div>
        </div>
    </div>

</div>

    `,
    methods: {

    },
    mounted() {
        console.log(this.csOTime)
    }
});





let vm = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        alert: true,
        coOrderModeType: '',
        orderNum: '',
        csModeNo: 1,
        csPayment: '',
        csOCost: "",
        costEach: 1500,
        csOTime: {
            date: "2020-09-28",
            time: '09:00:00',
        },
        csHour: 1,
        csData: [],
        coMember: {
            memAdd: '',
            memBD: '',
            memEmail: '',
            memGender: '',
            memName: '',
            memNo: 0,
            memOccupation: '',
            memTel: {
                countryCode: '',
                mobile: '',
            },
        },
        paymentMethod: [],
        ////////////////////////
        listDataHide: false,
        currentStep: 1,
        errors: [],
        memTopic: '',
        memStatus: '',
        memAnticipate: '',
        ////////////
        showModal: false,
        //go: true,
        ////////////
        today: new Date(),
        events: [{
                title: "08:00-12:00",
                date: "2020-09-20",
                time1: "1",
                time2: "1",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-20",
                time1: "2",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-20",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-21",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-21",
                time1: "1",
                time2: "0",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-21",
                time1: "1",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-22",
                time1: "0",
                time2: "1",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-22",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-22",
                time1: "2",
                time2: "2",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-23",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-23",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-23",
                time1: "2",
                time2: "2",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-24",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-24",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-24",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-25",
                time1: "2",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-25",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-25",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-26",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-26",
                time1: "2",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-26",
                time1: "1",
                time2: "2",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-27",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-27",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-27",
                time1: "1",
                time2: "0",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-28",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-28",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-28",
                time1: "0",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-29",
                time1: "0",
                time2: "2",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-29",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-29",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-09-30",
                time1: "1",
                time2: "1",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-09-30",
                time1: "1",
                time2: "1",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-09-30",
                time1: "1",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-10-01",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-10-01",
                time1: "0",
                time2: "1",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-10-01",
                time1: "0",
                time2: "1",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-10-02",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-10-02",
                time1: "2",
                time2: "1",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-10-02",
                time1: "1",
                time2: "0",
                open: false
            },
            {
                title: "08:00-12:00",
                date: "2020-10-03",
                time1: "0",
                time2: "0",
                open: false
            },
            {
                title: "13:00-17:00",
                date: "2020-10-03",
                time1: "1",
                time2: "0",
                open: false
            },
            {
                title: "18:00-22:00",
                date: "2020-10-03",
                time1: "0",
                time2: "1",
                open: false
            }
        ],
        tempTime: "",

    }),
    mounted() {
        this.currentStep = 1;

        let coOrderCsNo = location.href.split('?')[1].split('&')[0].split('=')[1];
        let coOrderModeType = location.href.split('?')[1].split('&')[1].split('=')[1];
        // console.log(coOrderCsNo);
        // console.log(coOrderModeType);
        //諮商方是
        axios.get('./php/coOrderModeType.php', { params: { 'coOrderModeType': coOrderModeType } })
            .then(res => {
                this.coOrderModeType = res.data;
                console.log(this.coOrderModeType);
            });
        //諮商師
        axios.get('./php/csCounselor.php', { params: { 'coOrderCsNo': coOrderCsNo } })
            .then(res => {
                this.csData = res.data;
                console.log(this.csData);
            });
        //付費方式
        axios.get('./php/paymentMethod.php')
            .then(res => {
                this.paymentMethod = res.data;
                // console.log(this.paymentMethod);
            });
        //會員資料
        axios.get('./php/coMember.php')
            .then(res => {
                if (res.data != "0") {
                    this.coMember = res.data;
                    console.log(this.coMember);

                    let telArray = res.data.memTel.split(',');
                    this.coMember.memTel = {
                        'countryCode': telArray[0],
                        'mobile': telArray[1],
                    };

                    //alert(this.coMember.memTel.countryCode);
                    //算年紀
                    //console.log(this.coMember.memBD);
                    var bir = res.data.memBD;
                    bir = Date.parse(bir.replace('/-/g', "/"));
                    //console.log(bir);
                    if (bir) {
                        var year = 1000 * 60 * 60 * 24 * 365;
                        var now = new Date();
                        var birthday = new Date(bir);
                        var age = parseInt((now - birthday) / year);
                        this.coMember.memBD = age;
                    }
                }
            });
        //月曆
        axios.get('./php/getCalender.php', { params: { 'csNo': coOrderCsNo } })
            .then(res => {
                this.event = res.data;
                // console.log(this.paymentMethod);
            });
    },
    methods: {
        // day(i) {

        //     console.log(i);
        // },
        memberCenter() {
            window.open('./meMain.html', "_self");
        },

        checkForm() {
            this.errors = [];
            if (this.coMember.memName && this.coMember.memGender && this.coMember.memBD && this.coMember.memAdd && this.coMember.memOccupation && this.coMember.memTel.mobile && this.coMember.memEmail && this.csHour && this.coMember.memTel.countryCode) {
                this.update(this.currentStep + 1);
            } else {
                this.showModal = true;
            };
            if (!this.coMember.memName) this.errors.splice(1, 0, "姓名");
            if (!this.coMember.memGender) this.errors.splice(2, 0, "性別");
            if (!this.coMember.memBD) this.errors.splice(3, 0, "年齡");
            if (!this.coMember.memAdd) this.errors.splice(4, 0, "住址");
            if (!this.coMember.memOccupation) this.errors.splice(5, 0, "職業");
            if (!this.coMember.memTel.mobile) this.errors.splice(6, 0, "電話");
            if (!this.coMember.memTel.countryCode) this.errors.splice(6, 0, "區域代碼");
            if (!this.coMember.memEmail) this.errors.splice(7, 0, "信箱");
            if (!this.csHour) this.errors.splice(8, 0, "時數");
        },
        parentOpen(data) {
            this.listDataHide = data;
        },

        update(val) {
            if (val < 1 || val > 5) {
                return val;
            }
            this.currentStep = val;
            //console.log(this.currentStep);
        },
        payment(e, i) {
            var l = document.querySelectorAll('div.co-billing_method');
            //console.log(l.length);
            for (let i = 0; i < l.length; i++) {
                l[i].classList.remove('paymentIWant');
            }
            //l.classList.$remove('paymentIWant');
            e.currentTarget.classList.toggle('paymentIWant');
            this.csPayment = i;

        },
        checkOut() {
            //console.log("aaa");
            //送出會員資料
            var formData = new FormData();
            var date = this.csOTime.date + " " + this.csOTime.time;
            console.log(date);
            formData.append("memNo", this.coMember.memNo);
            formData.append("csName", this.coMember.memName);
            formData.append("csGender", this.coMember.memGender);
            formData.append("csBD", this.coMember.memBD);
            formData.append("csAdd", this.coMember.memAdd);
            formData.append("csOcc", this.coMember.memOccupation);
            formData.append("csEmail", this.coMember.memEmail);
            formData.append("csTelA", this.coMember.memTel.countryCode);
            formData.append("csTelB", this.coMember.memTel.mobile);

            formData.append("csHour", this.csHour);
            formData.append("csPayment", this.csPayment);

            formData.append("csNo", this.csData.csNo);

            formData.append("csODate", date);
            formData.append("csModeNo", this.csModeNo);
            formData.append("csPosNo", this.csData.csPosNo);
            formData.append("csOCost", this.csOCost);

            formData.append("csOAnticipate", this.memAnticipate);
            formData.append("csOTopic", this.memTopic);
            formData.append("csOTalk", this.memStatus);
            axios.post('./php/coCalender.php', formData).then(
                res => {
                    console.log(res.data);
                }).then(() => {
                var formData2 = new FormData();
                formData2.append("memNo", this.coMember.memNo);
                axios.post('./php/csOrderNumber.php', formData2).then(
                    res => {
                        //console.log(res.data);
                        this.orderNum = res.data;

                    });
            });

        },




        prev() {
            this.today = this.today.setMonth(this.today.getMonth() - 1)
            this.today = new Date(this.today);

        },
        next() {
            this.today = this.today.setMonth(this.today.getMonth() + 1)
            this.today = new Date(this.today);
        },

        logIn() {
            $("#signup_overlay").removeClass("signup_overlay-none");
            $("#signup_overlay").fadeIn(300);
            $("#container").removeClass("right-panel-active");
        },
        colorChange(time) {
            if (time == 0) {
                return "teal lighten-2";
            } else {
                return "red lighten-3";
            }
        },
        aaa(data, num) {
            this.tempTime = data;
            if (num == 1) {
                if (data == "08:00-12:00") {
                    return "08:00-10:00";
                } else if (data == "13:00-17:00") {
                    return "13:00-15:00";
                } else {
                    return "18:00-20:00";
                }

            } else {
                if (data == "08:00-12:00") {
                    return "10:00-12:00";
                } else if (data == "13:00-17:00") {
                    return "15:00-17:00";
                } else {
                    return "20:00-22:00";
                }
            }
        },
        alertMyTitle(event, time, num) {
            if (time == 0) {
                if (num == 1) {
                    if (event.title == "08:00-12:00") {
                        alert(`已選擇${event.date} 08:00-10:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "08:00";

                    } else if (event.title == "13:00-17:00") {
                        alert(`已選擇${event.date}13:00-15:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "13:00";

                    } else {
                        alert(`已選擇${event.date}18:00-22:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "18:00";
                    }

                } else {
                    if (event.title == "13:00-17:00") {
                        alert(`已選擇${event.date} 15:00-17:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "15:00";


                    } else if (event.title == "08:00-12:00") {
                        alert(`已選擇${event.date}10:00-12:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "10:00";

                    } else {
                        alert(`已選擇${event.date}20:00-22:00`);
                        this.csOTime.date = event.date;
                        this.csOTime.time = "20:00";
                    }
                }
                this.currentStep = 2;
                // 送出訂單網址之類的
            } else {
                alert(
                    "無法預約"
                );
            }
        },
    },

    computed: {

        eventsMap() {
            // 產生同時間點的物件 key 是時間 value 是 array
            const map = {};
            this.events.forEach((e) => (map[e.date] = map[e.date] || []).push(e));
            return map;

        },
        monthSelect() {
            return `${this.today.getFullYear()}年
					${this.today.getMonth() + 1}月`;
        },
        price() {
            this.csOCost = this.costEach * this.csHour;
            return this.csOCost;
        },
        when() {
            var day = new Date(this.csOTime.date + " " + this.csOTime.time);
            //console.log(day);
            var hourNow = day.getHours();
            //console.log(hourNow);
            if (hourNow <= 12) {
                return "上午";
            } else if (hourNow > 12 && hourNow <= 18) {
                return "下午";
            } else if (hourNow > 18) {
                return "晚間";
            }
        },
        now() {
            var k = new Date().toLocaleDateString();
            return k;
        },
        endTime() {
            var h = Number(this.csHour);
            //console.log(h);
            //console.log(this.csOTime.date + " " + this.csOTime.time);
            var k = new Date(this.csOTime.date + " " + this.csOTime.time);
            var f = k.setHours(k.getHours() + h);
            //console.log(f);
            var d = new Date(f)
                //console.log(d);
            var hour = d.getHours() + ':00';
            //console.log(hour);
            return hour;

        }
    },
    created() {
        // console.log(this.eventsMap)
    },

});