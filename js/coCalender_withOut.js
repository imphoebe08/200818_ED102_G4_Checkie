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
        //@@@
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Month',
            week: 'Week',
            day: 'Day',
            '4day': '4 Days',
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        //@@@
    }),
    methods: {
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


        //@@@
        viewDay({
            date
        }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor(event) {
            return event.color
        },
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        showEvent({
            nativeEvent,
            event
        }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => this.selectedOpen = true, 10)
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        updateRange({
            start,
            end
        }) {
            const events = []

            const min = new Date(`${start.date}T00:00:00`)
            const max = new Date(`${end.date}T23:59:59`)
            const days = (max.getTime() - min.getTime()) / 86400000
            const eventCount = this.rnd(days, days + 20)

            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0
                const firstTimestamp = this.rnd(min.getTime(), max.getTime())
                const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
                const second = new Date(first.getTime() + secondTimestamp)

                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                })
            }

            this.events = events
        },
        // 產生 b~a的整數 （含）
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        logIn() {
            $("#signup_overlay").removeClass("signup_overlay-none");
            $("#signup_overlay").fadeIn(300);
            $("#container").removeClass("right-panel-active");
        },
        //@@@
    },
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
        console.log(this.$refs.calendar)
            // console.log("name" + this.names);
            // console.log("focus" + this.focus);
        console.log("event" + this.events[0]);
        console.log(this.focus)
            //@@@
        this.$refs.calendar.checkChange();
        // console.log(this.$refs.calendar.checkChange())
        //@@@
    },
    computed: {

        // //返回月份
        // monthSelect() {
        //     return `${new Date(this.today).getMonth() + 1}月`;
        // },
        // //返回年份
        // yearSelect() {
        //     return `${new Date(this.today).getFullYear()}年`;
        // },
        price() {
            this.csOCost = this.costEach * this.csHour;
            return this.csOCost;
        },
        when() {
            var day = new Date(this.csOTime.date + " " + this.csOTime.time);
            //console.log(day);
            var hourNow = day.getHours();
            //console.log(hourNow);
            if (hourNow < 12) {
                return "上午";
            } else if (hourNow > 12 && hourNow < 18) {
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
            var hour = d.getHours() + ':00:00';
            //console.log(hour);
            return hour;

        }
    },

});