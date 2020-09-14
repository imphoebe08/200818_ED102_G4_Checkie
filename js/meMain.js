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
                        <div class="inAct-date_icon"><i class="far fa-clock"></i></div>
                        <!-- 帶資料 -->
                        <div class="inAct-date_text">2020-08-14(五)</div>
                    </div>
                    <div class="inAct-icon_block">
                        <a href="javascript:void(0)" class="inAct-icon_1" draggable="false"><i class="fas fa-share-alt"></i></a>
                        <a href="javascript:void(0)" class="inAct-icon_2" draggable="false"><i class="fas fa-bookmark"></i></a>
                    </div>
                </div>
                <!-- 帶資料 -->
                <div class="inAct_title"><a href="javascript:void(0)" draggable="false">從陌生人到貴人，打造職涯路上的黃金人脈法則</a> </div>

                <div class="inAct_location">
                    <div class="inAct-location_icon">
                    
                    </div>
                    <!-- 帶資料 -->
                    <div class="inAct-location_text">台灣文創教育中心</div>
                </div>
            </div>
        </div>
    `,
});



Vue.component('cssart-layout', {
    props: ["love"],
    data() {
        return {}
    },
    template: `
        <div class="csS-art__card">
            <a href="./atSelf.html">
                <img class="img-responsive" :src="love.artPicContent">
            </a>
            <div class="card-Info">
                <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">{{love.artDate}}</span>
                <span class="card-Info__category small">{{love.csName}}</span>
            </div>
            <div class="csS-art-title">
                {{love.artTitle}}
            </div>
            <p @click="openArtPage">{{love.artContent}}</p>

            <div class="row card-tag">
                <a href="./atSelf.html" class="button2">More...</a>
            </div>
            <div class="card-share">
                <span>Share : </span>
                <a href="" class="small"><i class="fab fa-facebook-square"></i></a>
                <a href="" class="small"><i class="fas fa-share-alt"></i></a>
                <a href="" class="small"><i class="fas fa-bookmark"></i></a>
            </div>
        </div>`,
    methods: {
        openArtPage() {
            window.open("./atSelf.html", "_self");
        },
    },
});

Vue.component('chat-person-each', {
    props: ["init"],
    data() {
        return {
            each: this.init,
        }
    },
    template: `
    <div class="meChatPeople-each" @click="sendCsNo">
        <div class="meChatPeople">
            <div class="meChatOnline"><i class="fas fa-bell" ></i></div>
            <div class="meChatPeople-pic"><img :src="each.csPic" alt=""></div>
            <div class="meChatPeople-name">{{each.csName}}</div>
            <!-- <div class="meChatPeople-title">諮商師</div> -->
        </div>
        <div class="meChatDelete"><i class="fas fa-trash-alt"></i></div>
    </div>

    `,
    methods: {
        sendCsNo() {
            this.$emit("change", this.each.csNo)
        }
    },

});

Vue.component('me-chat-an', {
    props: ["init"],
    data() {
        return {
            each: this.init,
            text1: "meChatAn-text",
            text2: "meChatAn-text meChatAnUser-text",
            other1: "meChatAn-other",
            other2: "meChatAn-other meChatAnUser",
        }
    },
    template: `
    <div :class="{meChatAn : true,meChatAnUser:each.mesFrom==0}">
        <div class="meChatAn-pic"><img :src="[each.mesFrom==0? each.memPic : each.csPic]" alt=""></div>
        <div :class="[each.mesFrom==0? text2 : text1]" >{{each.mesContent}}</div>
        <div :class="[each.mesFrom==0? other2 : other1]">
            <div class="meChatAn-time">{{each.mesTime}}</div>
            <div class="meChatAn-select"><i class="fas fa-ellipsis-h"></i></div>
        </div>
    </div>
    `,
    methods: {},
});






let vm = new Vue({
    el: '#app',
    data: () => {
        return {
            memActRec: '',
            memArtRec: '',
            //aoAll: '',
            tempData: '',
            tempIndex: '',
            tempONo: '',
            oCost: '',
            overlayConfirm: false,
            orderShow: false,
            chatBox: "",
            meChatAn: "",
            chatPersonEach: "",
            errorText: false,
            mePswFinalizeConfirm: true,
            memPsdModel: "",
            textMemPsd: '',
            bigShake: false,
            showNewMemPsd: false,
            myMemPsd: false,
            otherInfo: false,
            newPic: './img/chatRoom/userPic.png',
            ccOrder: true,
            acOrder: true,
            selectNav: true,
            coData: [],
            coPastData: [],
            aoData: [],
            aoPastData: [],
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
                    // countryCode: '886',
                    // mobile: '0921132409',
                },
                memEmail: {
                    // value: 'misvamda@gmail.com',
                    // valid: true,
                },
                memAdd: '台北市南港區南港路一段四號之一',
                memPsd: 'cerise0324',
            },


            orderShow: false,

            momentModify: {
                memName: '閻掬容',
                memPetName: 'CC',
                memGender: '女',
                memBD: '1999/99/99',
                memAdd: 'hahahahahaha',
                memOcc: 'makeup artist',
                memTel: {
                    // countryCode: '886',
                    // mobile: '0921132409',
                },
                memEmail: {
                    // value: 'misvamda@gmail.com',
                    // valid: true,
                },
                memAdd: '台北市南港區南港路一段四號之一',
                memPsd: 'cerise0324',
            },
            titles: [
                '會員總覽',
                '會員資料',
                '諮商預約',
                '活動報名',
                '心理評估',
                '我的收藏',
                '線上諮商',
            ],
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
        deleteOrder(d, i) {
            //memActOrderDele
            if (d == this.coData) {
                console.log(d);
                var formData2 = new FormData();
                formData2.append('csONo', d[i].csONo);
                axios.post('./php/memCsOrderDele.php', formData2).then(
                        res => {
                            console.log(res)
                        }

                    )
                    //console.log(d[e].csONo);
                d.splice(i, 1);
            } else if (d == this.aoData) {
                var formData3 = new FormData();
                formData3.append('actONo', d[i].actONo);
                axios.post('./php/memActOrderDele.php', formData3).then(
                        res => {
                            console.log(res)
                        }
                    )
                    //console.log(d[e].actONo);
                d.splice(i, 1);
            }

            dataClear();
        },
        //暫存資料清淨機<3
        dataClear() {
            this.tempData = "";
            this.tempIndex = "";
            this.tempONo = '';
            this.oCost = '';
        },
        what(i, c, n) {

            if (n == 1) {
                this.tempData = c;
                this.tempIndex = i;
                this.tempONo = c[i].csONo;
                this.oCost = c[i].csOCost;
                console.log(c, this.tempONo, this.oCost);
            } else if (n == 2) {
                this.tempData = c;
                this.tempIndex = i;
                this.tempONo = c[i].actONo;
                this.oCost = c[i].actCost;
                console.log(c[i], this.tempONo, this.oCost);
            }

            //console.log(this.tempData[this.tempIndex].csONo);
            // console.log(this.tempData);
        },
        toggleOtherInfo(OwO) {
            this.otherInfo = OwO;
        },
        modifyMemPsd(QAQ) {
            this.myMemPsd = QAQ;
            this.showNewMemPsd = !QAQ;
        },
        giveUpMemPsd(OuO) {
            this.myMemPsd = OuO;
            this.showNewMemPsd = OuO;
            this.memPsdModel = "";
            this.textMemPsd = "";
        },
        confirmMemPsd(BwB) {
            if (this.memPsdModel == this.momentModify.memPsd) {
                this.showNewMemPsd = BwB;
                this.memPsdModel = "";
                $('.memPsdLabel>input').css('border', '#e0ddd8 solid 1px');

            } else {
                this.bigShake = BwB;
                $('.memPsdLabel>input').css('border', 'tomato solid 1px');
                setTimeout(function() {
                    vm.$data.bigShake = false;
                }, 350);
            }
        },
        finalizeMemPsd(sexyFox) {
            if (this.textMemPsd == this.memPsdModel) {
                // this.$set(this.member, 'memPsd', this.textMemPsd)
                this.momentModify.memPsd = this.memPsdModel;
                this.memPsdModel = "";
                this.textMemPsd = "";
                this.mePswFinalizeConfirm = sexyFox;
                $('.memPsdLabel>input').css('border', '#e0ddd8 solid 1px');
                this.errorText = false;
            } else {
                this.bigShake = true;
                $('.memPsdLabel>input').css('border', 'tomato solid 1px');
                setTimeout(function() {
                    vm.$data.bigShake = false;
                }, 350);
                this.errorText = true;
            }
        },
        iKnowIChangeMemPsd(littleFox) {
            this.myMemPsd = littleFox;
        },
        check() {
            //送出會員修改資料
            var formData = new FormData();
            formData.append('memName', this.member.memName);
            formData.append('memPetName', this.member.memPetName);
            formData.append('memGender', this.member.memGender);
            formData.append('memBD', this.member.memBD);
            formData.append('memAdd', this.member.memAdd);
            formData.append('memOccupation', this.member.memOccupation);
            formData.append('memTelA', this.member.memTel.countryCode);
            formData.append('memTelB', this.member.memTel.mobile);
            formData.append('memAdd', this.member.memAdd);
            formData.append('memPsd', this.member.memPsd);
            axios.post('./php/memInfoModify.php', formData).then(
                res => {
                    console.log(res);
                }

            )
        },

        ajaxPost(dataUrl, data, num) {
            let xhr = new XMLHttpRequest();
            let numTest = num;
            xhr.onload = function() {
                if (xhr.status == 200) {
                    let json = JSON.parse(xhr.responseText);
                    if (numTest == 1) {
                        vm.$data.chatPersonEach = json;
                    } else if (numTest == 2) {
                        vm.$data.meChatAn = json;
                    }
                } else {
                    // alert(xhr.status);
                }
            }

            let url = dataUrl;
            xhr.open("post", url, true);

            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
        },
        submitMes() {
            let data_info = `chatBox=${this.chatBox}&csNo=${this.meChatAn[0].csNo}`;
            this.ajaxPost("./php/sendMes.php", data_info, 0);
            this.chatBox = "";
        },
        changeCs(csNo) {
            let data_info = `csNo=${csNo}`;
            vm.ajaxPost("./php/changeCs.php", data_info, 1);

        },
        //打開訂單更多
        orderMore(event) {
            event.currentTarget.nextElementSibling.classList.toggle('meOrderOpen');
        },




    },

    mounted() {

        // setInterval(function() {
        //     vm.ajaxPost("./php/csMe.php", null, 1);
        //     // vm.ajaxPost("firstChat.php", null, 2);
        // }, 1000);
        this.ajaxPost("csMe.php", null, 1);
        this.ajaxPost("./php/firstChat.php", null, 2);
        //會員資料辣ＱＱＱＱＱ
        axios.get('./php/memberInfo.php').then(
            res => {
                this.member = res.data;
                this.momentModify = res.data;

                let telArray = res.data.memTel.split(',');
                this.member.memTel = {
                    'countryCode': telArray[0],
                    'mobile': telArray[1],
                };

                this.member.memEmail = {
                    'value': res.data.memEmail,
                };
                this.momentModify.memTel = {
                    'countryCode': telArray[0],
                    'mobile': telArray[1],
                };
                this.momentModify.memEmail = {
                    'value': res.data.memEmail.value,
                };
            }
        ).catch(
            err => {
                console.log(err.status);
                //this.msg = err.status;
            }
        );
        //掛載諮商訂單
        axios.get('./php/memCsOrder.php')
            .then(res => {
                //console.log(res.data[1].csODate);
                for (let i = 0; i < res.data.length; i++) {
                    if (new Date(res.data[i].csODate) > Date.now()) {

                        this.coData.push(res.data[i]);
                    } else {

                        this.coPastData.push(res.data[i]);
                    };
                };

            });

        axios.get('./php/memActOrder.php')
            .then(response => {
                console.log(response.data);
                for (let i = 0; i < response.data.length; i++) {
                    if (new Date(response.data[i].actStart) > Date.now()) {
                        this.aoData.push(response.data[i]);
                    } else {

                        this.aoPastData.push(response.data[i]);
                    };
                };
            });
        axios.get('./php/memArtRec.php')
            .then(response => {
                this.memArtRec = response.data;
                //console.log(this.memArtRec);
            });

        axios.get('./php/memActRec.php')
            .then(response => {
                this.memActRec = response.data;
                console.log(this.memActRec);
            });


        this.windowSize = window.innerWidth;
        this.currentPage = this.titles[0];
    },
    updated() {

    },

    created() {
        window.addEventListener('resize', this.onResize);
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    computed: {
        // ao() {
        //     var k = new Date().toLocaleDateString(), //2020/09/10
        //         a = (Date.parse(k)).valueOf(); //讓他變成可以比較的數字型態
        //     return this.acOrder ? this.aoAll.filter(item => (Date.parse(item.actStart)).valueOf() > a) : this.aoAll.filter(item => (Date.parse(item.actStart)).valueOf() < a)
        // },

        memPsdCountLength: function() {
            return this.momentModify.memPsd.length;
        },
        memPsdLength: function() {
            var y = this.momentModify.memPsd.length;
            var u = '*';
            return u.repeat(y);
        },
    },
    watch: {
        windowSize: function() {
            if (this.windowSize < 768 && this.currentPage == this.titles[0]) {
                this.currentPage = '';
            }
        },

    },

});