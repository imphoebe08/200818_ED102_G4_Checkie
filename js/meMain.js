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
            <div :class="'me-select_item--'+footPrint" class="me-select_item col-3 col-md-12"><slot></slot></div> 
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
        <div class="button" @click="callback($event)">
            <slot></slot>
        </div>
    `,
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    },
});








let vm = new Vue({
    el: '#app',
    data: () => ({
        step: [1, 2, 3, 4],
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
            value: '',
            valid: true,
        },
        // checkbox: '',

        ////////////
        //showModal: false,
        //go: true,
        ////////////
        titles: {
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
            add: '住址',
        },
    }),

    methods: {
        select(v) {
            this.currentPage = v;
            console.log(this.currentPage);
            console.log(123)
        },
        pageChange(a) {
            this.currentPage = a;
        },
        backToIndex(c) {
            this.currentPage = c;
        },

        // update(val) {
        //     if (val < 1 || val > 5) {
        //         return val;

        //     };

        //     this.currentStep = val;
        //     console.log(this.currentStep);
        // },

    },

});