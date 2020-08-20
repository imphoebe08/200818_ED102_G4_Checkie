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
        console.log(this.step, this.$parent.$parent.currentStep);
    },
    methods: {
        enter() {
            console.log(1234)
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

})





let vm = new Vue({
    el: '#app',
    data: () => ({
        listDataHide: false,
        currentStep: 1,
        errors: [],
        memName: '',
        memGender: '',
        memBD: '',
        memTel: {
            countryCode: '',
            mobile: '',
        },
        memEmail: {
            value: '',
            valid: true,
        },
        checkbox: '',

        ////////////
        showModal: false,
        //go: true,
        ////////////
    }),

    methods: {

        //this.memName&& this.memGender && this.memBD && this.memTel.mobile && this.memEmail.value && this.checkbox == "yes"
        checkForm() {
            this.errors = [];
            if (this.checkbox == "yes") {
                this.update(this.currentStep + 1);
            } else {
                this.showModal = true;
            };
            //if (!this.memName) this.errors.splice(1, 0, "姓名");
            //if (!this.memGender) this.errors.splice(2, 0, "性別");
            //if (!this.memBD) this.errors.splice(3, 0, "年齡");
            //if (!this.memTel.mobile) this.errors.splice(6, 0, "電話");
            //if (!this.memEmail.value) this.errors.splice(7, 0, "信箱");
        },
        parentOpen(data) {
            this.listDataHide = data;
        },

        update(val) {
            if (val < 1 || val > 5) {
                return val;
            }
            this.currentStep = val;
            console.log(this.currentStep);
        },
        // qrCode() {
        //     creatQrCode();
        // },
        qrCode() {
            const qrCode_name = document.getElementById("qrCode")
            console.log(qrCode_name)
                // var qrCode = new QRCode(qrCode_name);
                // var str = this.memTel.mobile.toString();
                // console.log(str);
                //qrCode.makeCode(str);
        }
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