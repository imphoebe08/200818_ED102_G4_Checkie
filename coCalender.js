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
        {{ active ? "收合訂單明細" : "打開訂單明細" }} 
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





new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        listDataHide: false,
        currentStep: 1,
        errors: [],
        memName: '',
        memGender: '',
        memBD: '',
        memAdd: '',
        memOcc: '',
        memTel: {
            countryCode: '',
            mobile: '',
        },
        memEmail: {
            value: '',
            valid: true,
        },
        memTopic: '',
        memStatus: '',
        memAnticipate: '',
        ////////////
        showModal: false,
        //go: true,
        ////////////
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
    }),
    methods: {

        checkForm() {
            this.errors = [];
            if (this.memName && this.memGender && this.memBD && this.memAdd && this.memOcc && this.memTel.mobile && this.memEmail.value) {
                this.update(this.currentStep + 1);
            } else {
                this.showModal = true;
            };
            if (!this.memName) this.errors.splice(1, 0, "姓名");
            if (!this.memGender) this.errors.splice(2, 0, "性別");
            if (!this.memBD) this.errors.splice(3, 0, "年齡");
            if (!this.memAdd) this.errors.splice(4, 0, "住址");
            if (!this.memOcc) this.errors.splice(5, 0, "職業");
            if (!this.memTel.mobile) this.errors.splice(6, 0, "電話");
            if (!this.memEmail.value) this.errors.splice(7, 0, "信箱");
        },
        parentOpen(data) {
            this.listDataHide = data;
        },
        enter() {
            console.log(abc);
        },


        update(val) {
            // if (val < 1 || val > 5) {
            //     return val;
            // }
            this.currentStep = val;
            console.log(this.currentStep);
        },




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
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    },
    mounted() {
        this.$refs.calendar.checkChange();
    },

});