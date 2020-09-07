Vue.component('me-head', {
    template: `
        <div class="me-head row justify-content-center">
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
            <div  class="col-8  offset-2 col-md-12  me-select_item--padding "><div class="me-select_item" :class="'me-select_item--'+footPrint"><slot></slot></div></div> 
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
            <div class="row select-page-hide">
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


Vue.component('inact-item', {
    template: `
        <div class="inAct_item">
            <!-- 帶資料 -->
            <a href="javascript:void(0)" draggable="false">
                <img src="./img/index/inAct/image_1.jpg" draggable="false">
            </a>
            <div class="inAct_text">
                <div class="inAct-top_text">
                    <div class="inAct-left_date">
                        <div class="inAct-date_icon"></div>
                        <!-- 帶資料 -->
                        <div class="inAct-date_text">2020-08-14(五)</div>
                    </div>
                    <div class="inAct-icon_block">
                        <a href="javascript:void(0)" class="inAct-icon_1" draggable="false"></a>
                        <a href="javascript:void(0)" class="inAct-icon_2" draggable="false" s></a>
                    </div>
                </div>
                <!-- 帶資料 -->
                <div class="inAct_title"><a href="javascript:void(0)" draggable="false">從陌生人到貴人，打造職涯路上的黃金人脈法則</a> </div>

                <div class="inAct_location">
                    <div class="inAct-location_icon"></div>
                    <!-- 帶資料 -->
                    <div class="inAct-location_text">台灣文創教育中心</div>
                </div>
            </div>
        </div>
    `,
});



Vue.component('cssart-layout', {
    template: `
    <div class="csS-art__card">
                    <a href="./atSelf.html">
                        <img class="img-responsive"
                            src="https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080">
                    </a>
                    <div class="card-Info">
                        <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                        <span class="card-Info__category small">| 蔡XX醫師</span>
                    </div>
                    <p @click="openArtPage">因感情問題來看診的年輕女性，有這四個共同特點</p>

                    <div class="row card-tag">
                        <a href="./atSelf.html" class="button2">More...</a>
                    </div>
                    <div class="card-share">
                        <span>Share : </span>
                        <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
                    </div>
                </div>`,
    methods: {
        openArtPage() {
            window.open("./atSelf.html", "_self");
        },
    }
})









let vm = new Vue({
    el: '#app',
    data: () => {
        return {
            errorText: false,
            mePswFinalizeConfirm: true,
            memPswModel: "",
            textMemPsw: '',
            bigShake: false,
            showNewMemPsw: false,
            myMemPsw: false,
            otherInfo: false,
            newPic: './img/chatRoom/userPic.png',
            ccOrder: true,
            acOrder: true,
            selectNav: true,
            coData: [],
            coPastData: [{}],
            aoData: [{}],
            aoPastData: [{}],
            windowSize: '',
            pageShow: false,
            step: '',
            currentPage: '',
            iWantModify: false,
            errors: [],
            member: {
                memName: '閻掬容',
                memPetName: 'CC',
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
                memPsw: 'cerise0324',
            },

            // checkbox: '',

            orderShow: false,
            ////////////
            //showModal: false,
            //go: true,
            ////////////
            momentModify: {
                memName: '閻掬容',
                memPetName: 'CC',
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
                memPsw: 'cerise0324',
            },
            titles: {
                z: '會員總覽',
                a: '會員資料',
                b: '諮商預約',
                c: '活動報名',
                d: '心理評估',
                e: '我的收藏',
                f: '線上諮商',
            },
            memTitle: {
                petName: '暱稱',
                name: '姓名',
                gender: '性別',
                bDay: '生日',
                occ: '職業',
                email: '電子信箱',
                tel: '電話',
                add: '地址',
                password: '密碼',
            },
            coOrder: {
                a: '已預約',
                b: '預約記錄',
            },
            mentalTitles: {
                a: '測驗歷史紀錄',
                b: '⾃我評估',
                c: '推薦專欄',
                d: '推薦活動',
            }

        }
    },

    methods: {
        selectIt(v) {
            var v = v;
            setTimeout(function() {
                vm.$data.currentPage = v;

            }, 400);
            this.selectNav = false
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
            vm.member = Object.assign({}, vm.momentModify, vm.member);
            vm.momentModify = Object.assign({}, vm.momentModify, vm.member)
        },
        confirmModify(k) {
            vm.member = Object.assign({}, vm.member, vm.momentModify);

            this.iWantModify = k;
        },
        onResize() {
            this.windowSize = window.innerWidth;
        },
        backToSelect() {
            this.currentPage = '';
            setTimeout(function() {
                vm.$data.selectNav = true;
            }, 400);
        },
        ocg(g) {
            this.ccOrder = g;
        },
        oag(m) {
            this.acOrder = m;
        },
        changePic() {
            let pic = event.target.files[0];
            let reader = new FileReader();
            reader.onload = function() {
                vm.$data.newPic = reader.result;
            }
            reader.readAsDataURL(pic);
        },
        // changeSize() {
        //     if (this.windowSize > 768) {
        //         this.pageShow = true;
        //     };
        // },
        deleteOrder(a, e) {
            a.splice(e, 1);
        },
        toggleOtherInfo(OwO) {
            this.otherInfo = OwO;
        },
        modifyMemPsw(QAQ) {
            this.myMemPsw = QAQ;
            this.showNewMemPsw = !QAQ;
        },
        giveUpMemPsw(OuO) {
            this.myMemPsw = OuO;
            this.showNewMemPsw = OuO;
            this.memPswModel = "";
            this.textMemPsw = "";
        },
        confirmMemPsw(BwB) {
            if (this.memPswModel == this.momentModify.memPsw) {
                this.showNewMemPsw = BwB;
                this.memPswModel = "";
                $('.memPswLabel>input').css('border', '#e0ddd8 solid 1px');

            } else {
                this.bigShake = BwB;
                $('.memPswLabel>input').css('border', 'tomato solid 1px');
                setTimeout(function() {
                    vm.$data.bigShake = false;
                }, 350);
            }
        },
        finalizeMemPsw(sexyFox) {
            if (this.textMemPsw == this.memPswModel) {
                // this.$set(this.member, 'memPsw', this.textMemPsw)
                this.momentModify.memPsw = this.memPswModel;
                this.memPswModel = "";
                this.textMemPsw = "";
                this.mePswFinalizeConfirm = sexyFox;
                $('.memPswLabel>input').css('border', '#e0ddd8 solid 1px');
                this.errorText = false;
            } else {
                this.bigShake = true;
                $('.memPswLabel>input').css('border', 'tomato solid 1px');
                setTimeout(function() {
                    vm.$data.bigShake = false;
                }, 350);
                this.errorText = true;
            }
        },
        iKnowIChangeMemPsw(littleFox) {
            this.myMemPsw = littleFox;
        },

    },
    mounted() {
        this.show_len = this.member.memPsw.length
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
        this.windowSize = window.innerWidth;
        this.currentPage = this.titles.z;
    },
    updated() {},

    created() {
        //this.currentPage = this.titles.z;
        window.addEventListener('resize', this.onResize);
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    computed: {

        memPswLength: function() {
            return this.momentModify.memPsw.length;
        },
        memPsw_length: function() {
            var y = this.momentModify.memPsw.length;
            var u = '*';
            return u.repeat(y);
        },
    },

});