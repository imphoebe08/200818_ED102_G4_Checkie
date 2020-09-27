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
        //current: { type: Number, required: true },
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
    mounted() {
        //console.log(this.step, this.$parent.$parent.currentStep);
    },
    methods: {
        enter() {
            //console.log(1234)
        }
    }
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


// Vue.component('c-order', {
//     props: {
//         step: { type: Number, required: true },
//         //current: { type: Number, required: true },
//         //current: this.$parent.$parent.currentSte,
//     },
//     data() {
//         return {}
//     },
//     template: `
//     <div class="col-md-4 ao-block ao-block--border">
//         <div class="row">
//             <div class="col-12 ao-block_content">
//                 <div class="pic_content">
//                     <img src="./img/acOrder/工作區域 2.png" alt="" class="img-fluid">
//                 </div>
//                 <div class="intro_content">
//                     <div class="intro_title">
//                         <h6>Lorem ipsum dolor sit amet consectetur.</h6>
//                     </div>
//                     <div class="intro_info">
//                         <div class="intro_info-time">
//                             <span>2020/09/30</span>
//                             <span>19:00-20:00 (GTM+8)</span>
//                         </div>
//                         <div class="intro_info-location">
//                             <p>
//                                 320台灣桃園市中壢區福達路二段一巷56號
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div class="col-12 ao-block_content">
//                 <div class="row list_content">
//                     <div>
//                         <div>訂單資訊</div>
//                         <span>NT$</span>
//                         <span>100</span>
//                         <span>元</span>
//                     </div>
//                 </div>


//                 <div class="row ao-order_item list_content">
//                     <span>共計</span>
//                     <span>1500 <span>元</span></span>

//                 </div>
//             </div>
//         </div>

//     </div>
//     `,
//     // mounted() {
//     //     console.log(this.step, this.$parent.$parent.currentStep);
//     // },
//     // methods: {
//     //     enter() {
//     //         console.log(1234)
//     //     }
//     // }
// });





let vm = new Vue({
    el: '#app',
    data: () => ({
        //keyword: '',
        orderNum: [],
        acPayment: '',
        paymentMethod: [],
        total: '',
        aoMember: {
            memAdd: '',
            memBD: '',
            memEmail: '',
            memGender: '男',
            memName: '',
            memNo: 0,
            memOccupation: '',
            memTel: {
                countryCode: '',
                mobile: '',
            },
        },
        orderData: [],
        listDataHide: false,
        currentStep: 1,
        errors: [],

        checkbox: '',

        ////////////
        showModal: false,
        ticket: 1,
        ////////////
    }),

    methods: {

        checkForm() {
            this.errors = [];
            if (this.aoMember.memName && this.aoMember.memGender && this.aoMember.memBD && this.aoMember.memTel.mobile && this.aoMember.memEmail && this.checkbox == "yes" && this.aoMember.memTel.countryCode) {
                // if (this.checkbox == "yes") {
                this.update(this.currentStep + 1);
            } else {
                this.showModal = true;
            };
            if (!this.aoMember.memName) this.errors.splice(1, 0, "姓名");
            if (!this.aoMember.memGender) this.errors.splice(2, 0, "性別");
            if (!this.aoMember.memBD) this.errors.splice(3, 0, "年齡");
            if (!this.aoMember.memTel.mobile) this.errors.splice(4, 0, "電話");
            if (!this.aoMember.memTel.countryCode) this.errors.splice(5, 0, "地區號碼");
            if (!this.aoMember.memEmail) this.errors.splice(6, 0, "信箱");
            if (!this.checkbox) this.errors.splice(7, 0, "完整資訊包含勾選確認");
        },
        parentOpen(data) {
            this.listDataHide = data;
        },

        update(val) {
            if (val < 1 || val > 5) {
                return val;

            };

            this.currentStep = val;
            //console.log(this.currentStep);
        },
        // qrCode() {
        //     creatQrCode();
        // },
        qrCode() {
            //this.keyword = this.aoMember.memNo + this.orderData.actNo;
            //console.log(this.keyword);
            setTimeout(function() {
                var qrCode = new QRCode("qrCode");
                // 待確認
                qrCode.makeCode('http://140.115.236.71/demo-projects/ED102/ED102G4/acSelf.html?actNo=' + vm.$data.orderData.actNo);
            }, 400);
        },

        saveQrCode() {
            const img = document.getElementById("qrCode").firstChild.nextElementSibling;
            const link = document.querySelector('#saveQrCode');

            if (img && link) {
                var src = img.getAttribute('src');
                var href = link.getAttribute('href');
                // console.log("oldhref=" + href);
                // console.log("img=" + img);
                // console.log("src=" + src);
                link.setAttribute("href", src);
                // console.log("nowhref=" + href);
            }
        },
        add() {
            if (this.ticket < 4) {
                this.ticket += 1;
                //console.log(this.ticket);
            } else {
                this.ticket = 4;
            }
        },
        minus() {
            if (this.ticket > 1) {
                this.ticket -= 1;
                //console.log(this.ticket);
            } else {
                this.ticket = 1;
            }
        },

        payment(e, i) {
            var l = document.querySelectorAll('div.co-billing_method');
            //console.log(l.length);
            for (let i = 0; i < l.length; i++) {
                l[i].classList.remove('paymentIWant');
            }
            //l.classList.$remove('paymentIWant');
            e.currentTarget.classList.toggle('paymentIWant');
            this.acPayment = i;

        },
        checkOut() {
            console.log("aaa");
            //送出會員訂單
            var formData = new FormData();
            formData.append("memNo", this.aoMember.memNo);
            formData.append("acName", this.aoMember.memName);
            formData.append("acGender", this.aoMember.memGender);
            formData.append("acBD", this.aoMember.memBD);
            formData.append("acEmail", this.aoMember.memEmail);
            formData.append("acTelA", this.aoMember.memTel.countryCode);
            formData.append("acTelB", this.aoMember.memTel.mobile);
            formData.append("actNo", this.orderData.actNo);
            formData.append("acTicket", this.ticket);
            formData.append("acPrice", this.total);
            formData.append("acPayment", this.acPayment);
            axios.post('./php/aoStepper.php', formData).then(
                res => {
                    //console.log('hi')
                    console.log(res.data);
                }).then(() => {
                //回傳訂單編號
                var formData2 = new FormData();
                formData2.append("memNo", this.aoMember.memNo);
                axios.post('./php/acOrderNumber.php', formData2).then(
                    res => {
                        //console.log(res.data);
                        this.orderNum = res.data;
                        //console.log(this.orderNum.actONo);
                    });

            });

        },

        logIn() {
            $("#signup_overlay").removeClass("signup_overlay-none");
            $("#signup_overlay").fadeIn(300);
            $("#container").removeClass("right-panel-active");
        },
    },
    updated() {


    },
    computed: {
        price() {
            // console.log(this.ticket);
            // console.log(this.ticketPrice);
            this.total = this.ticket * this.orderData.actCost;
            return this.total;
        },
        when() {
            console.log(this.orderData.actStartAll);
            //var day = new Date(this.orderData.actStartAll);
            var day = this.orderData.actStartAll;
            var hourNow = parseInt(day.split(' ')[1].split(':')[0])
            console.log(hourNow);
            //var hourNow = day.getHours();
            //sconsole.log(hourNow);
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
        }
    },
    mounted() {

        let acOrderActNo = location.search.split('=')[1];
        // console.log(acOrderActNo);
        // .split('?')[1].split('&')[0].split('=')[1]

        //活動

        axios.get('./php/aoOrder.php', { params: { 'acOrderActNo': acOrderActNo } })
            .then(response => {
                this.orderData = response.data;
                // console.log(response);
                // console.log(this.orderData);
            });
        //付費方式
        axios.get('./php/paymentMethod.php')
            .then(res => {
                this.paymentMethod = res.data;
                // console.log(this.paymentMethod);
            });
        //會員資料
        axios.get('./php/aoMember.php')
            .then(res => {
                console.log(res.data);
                if (res.data != "0") {
                    this.aoMember = res.data;
                    //console.log(this.aoMember);

                    let telArray = res.data.memTel.split(',');
                    this.aoMember.memTel = {
                        'countryCode': telArray[0],
                        'mobile': telArray[1],
                    };

                    //alert(this.aoMember.memTel.countryCode);
                    //算年紀
                    //console.log(this.aoMember.memBD);
                    var bir = res.data.memBD;
                    bir = Date.parse(bir.replace('/-/g', "/"));
                    //console.log(bir);
                    if (bir) {
                        var year = 1000 * 60 * 60 * 24 * 365;
                        var now = new Date();
                        var birthday = new Date(bir);
                        var age = parseInt((now - birthday) / year);
                        this.aoMember.memBD = age;
                    }
                }
            });
    },
});



// function creatQrCode() {
//     var countryCode = vm.$data.memTel.countryCode;
//     var mobile = vm.$data.memTel.mobile;
//     var strB = mobile.toString();
//     var strC = countryCode.toString();
//     var qrCode = new QRCode("qrCode");;
//     qrCode.makeCode(strB + strC);
// }
// $(function() {

//     var qrCode = new QRCode("qrCode");;
//     var str = vm.memTel.countryCode + this.memTel.mobile;
//     qrCode.makeCode(str);
//     console.log(v);
// });