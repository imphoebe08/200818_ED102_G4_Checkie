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
    props: ["love"],
    data() {
        return {}
    },
    template: `
 <div class="inAct_item">
    <!-- 帶資料 -->
    <a :href="'./acSelf.html?actNo=' + love.actNo">
        <img :src="love.actPic1" draggable="false">
    </a>
    <div class="inAct_text">

        <div class="inAct-top_text">
            <div class="inAct-left_date">
                <div class="inAct-date_icon"><i class="far fa-clock"></i></div>
                <!-- 帶資料 -->
                <div class="inAct-date_text">活動日期{{love.actStart}}</div>
            </div>
            <div class="inAct-icon_block">
                <a href="javascript:void(0)" class="inAct-icon_1" draggable="false"><i class="fa fa-share" :class="['icon','share-button']" @click="openShareDialog(love.actNo)"></i></a>

            </div>
        </div>
        <!-- 帶資料 -->
        <div class="inAct_title"><a href="javascript:void(0)" draggable="false">{{love.actName}}</a> </div>
        <div class="inAct-top_text">
            <div class="inAct-left_date">
                <div class="inAct-date_icon"><i class="far fa-clock"></i></div>
                <div class="inAct-date_text">報名日期{{love.actPstart}}</div>
            </div>

        </div>
    </div>
</div>
    `,
    methods: {

        openShareDialog(actNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `acSelf.html?actNo=${actNo}`);
        }

    },
});

//                <a href="javascript:void(0)" class="inAct-icon_2" draggable="false"><i class="fas fa-bookmark"></i></a>

// Vue.component('co_order', {
//     props: ["each"],
//     data() {
//         return {}
//     },
//     template: `
//     <div class="row justify-content-center delete">
//                                                     <div class="mem-order-each col-10">
//                                                         <div class="row">
//                                                             <div class="mem-order-left col-sm-4 col-12 mem-modify-padding">
//                                                                 <a href="">
//                                                                     <div class="mem-order-dcName">
//                                                                         {{each.csName}}
//                                                                     </div>
//                                                                     <div class="mem-order-img">
//                                                                         <img :src="each.csPic" alt="">
//                                                                     </div>
//                                                                 </a>

//                                                             </div>
//                                                             <div class="mem-order-right col-sm-8 col-12 mem-modify-padding">
//                                                                 <div class="row justify-content-end mem-modify--delete">
//                                                                     <div v-if="!orderShow" class=" order-justDele" @click="what(index, coData, 1)"><i class="far fa-edit memI"></i>刪除</div>
//                                                                 </div>
//                                                                 <div class="row justify-content-center">
//                                                                     <table class="mem-order-table">
//                                                                         <tr>
//                                                                             <th>地點</th>
//                                                                             <td data-title="地點">{{each.csPosName}}</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <th>時間</th>
//                                                                             <td data-title="時間">{{each.csODate}}</td>
//                                                                         </tr>
//                                                                         <tr>
//                                                                             <th>諮商時間</th>
//                                                                             <td data-title="諮商時間">1</td>
//                                                                         </tr>
//                                                                     </table>
//                                                                 </div>
//                                                                 <div class="row ">
//                                                                     <mem-driver></mem-driver>
//                                                                     <div class="col-12 col-sm-6 offset-sm-6 mem-coOrder-total">
//                                                                         <span>費⽤</span>
//                                                                         <span>{{each.csOCost}}</span>
//                                                                         <span>.NT</span>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="row ">
//                                                                     <div class="mem-coOrder-total--hide">
//                                                                         <span class="order-justDele memI" @click="orderMore($event)">查看更多<i class="fas fa-caret-down memI"></i></span>
//                                                                         <div class="meOrder_toggle">
//                                                                             <table class="mem-order-table">
//                                                                                 <tr>
//                                                                                     <th>訂單編號</th>
//                                                                                     <td data-title="訂單編號">{{each.csONo}}</td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <th>諮商方式</th>
//                                                                                     <td data-title="諮商方式">{{each.csModeName}}</td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <th>下訂時間</th>
//                                                                                     <td data-title="下訂時間">{{each.csOTime}}</td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <th>諮商期待</th>
//                                                                                     <td data-title="諮商期待">{{each.csOAnticipate}}</td>
//                                                                                 </tr>
//                                                                                 <tr>
//                                                                                     <th>諮商主題</th>
//                                                                                     <td data-title="諮商主題">{{each.csOTopic}}</td>
//                                                                                 </tr>

//                                                                             </table>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>

//     `,
//     methods: {
//         orderMore(event) {
//             event.currentTarget.nextElementSibling.classList.toggle('meOrderOpen');
//         },
//     },

// });




Vue.component('cssart-layout', {
    props: ["love"],
    data() {
        return {}
    },
    template: `
        <div class="csS-art__card">
            <a :href="'./atSelf.html?artNo=' + love.artNo">
                <img class="img-responsive" :src="love.artPic1">
            </a>
            <div class="card-Info">
                <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">{{love.artDate}}</span>
                <span class="card-Info__category small">{{love.csName}}</span>
            </div>
            <div class="csS-art-title">
                {{love.artTitle}}
            </div>
            <p>{{love.artContent}}</p>

            <div class="row card-tag">
                <a href="./atSelf.html" class="button2">More...</a>
            </div>
            <div class="card-share">
                <a href="javascript:void(0)" class="inAct-icon_1" draggable="false" class="small"><i class="fa fa-share" :class="['icon','share-button']" @click="openShareDialog(love.artNo)"></i></a>

            </div>
        </div>`,
    methods: {

        openShareDialog(artNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `atSelf.html?artNo=${artNo}`);
        }

    },
});

//<a href="javascript:void(0)" class="inAct-icon_1" draggable="false" class="small"><i class="fas fa-bookmark"></i></a>



// jiand start()
Vue.component('chat-person-each', {
    props: ["init", "index", "bell"],
    data() {
        return {}
    },
    template: `
    <div class="meChatPeople-each" @click="sendCsNo">
        <div class="meChatPeople">
            <div class="meChatOnline"><i :class="bellF" ></i></div>
            <div class="meChatPeople-pic"><img :src="init.csPic"></div>
            <div class="meChatPeople-name">{{init.csName}}</div>
            <!-- <div class="meChatPeople-title">諮商師</div> -->
        </div>
    </div>

    `,
    computed: {
        bellF() {
            // 改 sass
            return (this.bell[this.index].memRead == "0") ? "fas fa-bell" : "fas fa-bell alert";
        },
    },
    methods: {
        // jiang start()
        sendCsNo() {
            this.$emit("change", this.init.csNo);
        }
        // jiang end()
    },

});
// jiang end()
// jiang start()

//<div class="meChatDelete"><i class="fas fa-trash-alt"></i></div>
Vue.component('me-chat-an', {
    props: ["init"],
    data() {
        return {
            text1: "meChatAn-text",
            text2: "meChatAn-text meChatAnUser-text",
            other1: "meChatAn-other",
            other2: "meChatAn-other meChatAnUser",
        }
    },
    template: `
    <div :class="{meChatAn : true,meChatAnUser:init.mesFrom==0}">
        <div class="meChatAn-pic"><img :src="[init.mesFrom==0? vm.$data.member.memPic  : init.csPic]" alt=""></div>
        <div :class="[init.mesFrom==0? text2 : text1]" >{{init.mesContent}}</div>
        <div :class="[init.mesFrom==0? other2 : other1]">
            <div class="meChatAn-time">{{init.mesTime.substring(0,5)}}</div>

        </div>
    </div>
    `,
    computed: {

    },
    methods: {},
});
//<div class="meChatAn-select"><i class="fas fa-ellipsis-h"></i></div>
// jiang end()






let vm = new Vue({
    el: '#app',
    components: {
        apexchart: VueApexCharts
    },
    data: {
        showChatRoom: false,
        // jiang start()
        mesNo: "",
        chatCsNo: "",
        bell: "",
        // jiang end()
        // 分享加這個
        shareUrl: `http://140.115.236.71/demo-projects/ED102/ED102G4/`, //傳送的文章或活動主連結
        shareNo: '', //傳送的文章或活動編號，我預設為0
        nothing: false,
        allData: [],
        finalCoResult: [],
        finalAoResult: [],
        searchThing: '',
        placeHolder: '請輸入搜尋指令',
        tempHeartTitle: '',
        tempHeartData: '',
        tempHeartIndex: '',
        chartOpacity: false,
        artCol: [],
        actCol: [],
        heart: true,
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
        meChatAn: [],
        chatPersonEach: "",
        errorText: false,
        mePswFinalizeConfirm: true,
        memPsdModel: "",
        textMemPsd: '',
        bigShake: false,
        showNewMemPsd: false,
        myMemPsd: false,
        otherInfo: false,
        //newPic: './img/chatRoom/userPic.png',
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
            // memName: '閻掬容',
            // memNickname: 'CC',
            // memGender: '女',
            // memBD: '1999/99/99',
            // memAdd: 'hahahahahaha',
            // memOcc: 'makeup artist',
            // memTel: {
            //     // countryCode: '886',
            //     // mobile: '0921132409',
            // },
            // memEmail: {
            //     // value: 'misvamda@gmail.com',
            //     // valid: true,
            // },
            // memAdd: '台北市南港區南港路一段四號之一',
            // memPsd: 'cerise0324',
        },


        orderShow: false,

        momentModify: {
            // memName: '閻掬容',
            // memNickname: 'CC',
            // memGender: '女',
            // memBD: '1999/99/99',
            // memAdd: 'hahahahahaha',
            // memOcc: 'makeup artist',
            // memTel: {
            //     // countryCode: '886',
            //     // mobile: '0921132409',
            // },
            // memEmail: {
            //     // value: 'misvamda@gmail.com',
            //     // valid: true,
            // },
            // memAdd: '台北市南港區南港路一段四號之一',
            // memPsd: 'cerise0324',
        },
        titles: [
            '會員總覽',
            '會員資料',
            '諮商預約',
            '活動報名',
            '心理評估',
            '我的收藏',
            '線上諮商',
            '搜尋結果',
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
        },
        csReData: [],
        series: [
            //apexchart預設資料
            {
                name: "分數",
                data: [50, 50, 50, 50, 50]
            }
        ],
        chartOptions: {
            //apexchart設定
            chart: {
                height: 250,
                type: "radar"
            },
            xaxis: {
                categories: ["家庭關係", "人際關係", "伴侶關係", "壓力創傷", "自我探索"],
                labels: {
                    style: {
                        colors: ["#666", "#666", "#666", "#666", "#666"],
                        fontSize: "12px",
                        fontFamily: "微軟正黑體,Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label"
                    }
                },
                range: 100
            },
            yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4
            },
            fill: {
                colors: ["#e05891"]
            },
            colors: ["pink"],
            chart: {
                toolbar: {
                    show: false
                }
            }
        }

    },


    methods: {
        //jiang start()
        firstChat() {
            // 跟我聊天的人
            axios.post("./php/firstChat.php").then(res => {
                let data = res.data;
                //console.log(data)
                this.mesNo = res.data[0].mesNo;
                this.chatCsNo = res.data[0].csNo;
                for (let i = data.length - 1; i >= 0; i--) {
                    this.meChatAn.push(data[i]);
                }

            });
        },
        csMe() {
            // 聊天對象欄
            axios.post("./php/csMe.php").then(res => {
                //console.log(res.data)
                this.chatPersonEach = res.data;
            })
        },
        bellAlert() {
            // 聊天對象欄
            axios.post("./php/bellAlert.php").then(res => {
                //console.log(res.data)
                this.bell = res.data;
                console.log(this.bell)
            })
        },



        submitMes() {
            if (this.chatBox != "") {
                let data_info = `chatBox=${this.chatBox}&csNo=${this.meChatAn[0].csNo}`;
                axios.post("./php/sendMes.php", data_info);
                this.chatBox = "";

            }

        },
        changeCs(csNo) {
            console.log(csNo)
            let data_info = `csNo=${csNo}`;
            axios.post("./php/changeCs.php", data_info).then(res => {
                this.meChatAn = [];
                let data = res.data;
                this.mesNo = res.data[0].mesNo;
                this.chatCsNo = res.data[0].csNo;
                for (let i = data.length - 1; i >= 0; i--) {
                    this.meChatAn.push(data[i]);
                }
                setTimeout(() => {
                    var meChatMainRoom = document.getElementById("meChatMainRoom");
                    meChatMainRoom.scrollTop = meChatMainRoom.scrollHeight;
                }, 1)

            })


        },

        // jiang end()
        search() {
            //console.log(this.coData);
            this.currentPage = this.titles[7];
            // console.log(this.coData.length);
            // for (let i = 0; i < vm.$data.coData.length; i++) {
            //     this.allData.push(vm.$data.coData[i]);
            //     console.log(this.allData);
            // };
            // for (let i = 0; i < vm.$data.aoData.length; i++) {
            //     this.allData.push(vm.$data.aoData[i]);
            //     console.log(this.allData);
            // };
            // console.log(this.allData);
            let mySearchWord = this.searchThing;
            let myCoSearchResult = this.coData.filter(function(el) {
                return (el.csName.indexOf(mySearchWord) != -1 || el.csPosName.indexOf(mySearchWord) != -1 || el.csODate.indexOf(mySearchWord) != -1);
            });
            this.finalCoResult = myCoSearchResult;

            let myAoSearchResult = this.aoData.filter(function(el) {
                return (el.actName.indexOf(mySearchWord) != -1 || el.actAddress.indexOf(mySearchWord) != -1 || el.actStart.indexOf(mySearchWord) != -1 || el.actHost.indexOf(mySearchWord) != -1);
            });
            this.finalAoResult = myAoSearchResult;

            var num = this.finalAoResult.length + this.finalCoResult.length;
            console.log(num);
            if (num == 0) {
                this.nothing = true;
            } else {
                this.nothing = false;
            };


            //console.log(this.finalAolResult);
            // for (let i = 0; i < myAoSearchResult.length; i++) {
            //     this.allData.push(myAoSearchResult[i]);
            // };
            // for (let i = 0; i < myCoSearchResult.length; i++) {
            //     this.allData.push(myCoSearchResult[i]);
            // };
            //this.searchAmount();

            // console.log(this.allData);
            //this.finalResult = myAoSearchResult;
            //console.log(this.finalResult);
        },
        selectIt(v) {
            var v = v;
            setTimeout(function() {
                vm.$data.currentPage = v;
                // jiang start()
                setTimeout(function() {
                    if (vm.$data.currentPage == "線上諮商") {
                        var meChatMainRoom = document.getElementById("meChatMainRoom");
                        meChatMainRoom.scrollTop = meChatMainRoom.scrollHeight;

                    }
                }, 200)

                //jiang end()
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
        hag(p) {
            this.heart = p;
        },
        changePic() {
            //console.log(123)
            let pic = event.target.files[0];
            let reader = new FileReader();
            reader.onload = function() {
                vm.$data.member.memPic = reader.result;

                // vm.$data.member.memPic = vm.$data.newPic;
                var formData7 = new FormData();
                formData7.append('memPic', pic);
                formData7.append('memNo', vm.$data.member.memNo);
                axios.post('./php/memPicUpLoad.php', formData7).then(
                    res => {
                        console.log(res);
                    }
                )
            }
            reader.readAsDataURL(pic);

            // var formData7 = new FormData();



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
                this.finalCoResult.splice(i, 1);
                this.dataClear();

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
                this.finalAoResult.splice(i, 1);
                this.dataClear();
            }
        },
        heartDele(d, i) {
            if (d == this.artCol) {
                console.log(d);
                var formData6 = new FormData();
                formData6.append('artNo', d[i].artNo);
                formData6.append('memNo', this.member.memNo);
                axios.post('./php/memArtCollectDele.php', formData6).then(
                        res => {
                            console.log(res)
                        }

                    )
                    //console.log(d[e].csONo);
                d.splice(i, 1);
                this.dataClear();

            } else if (d == this.actCol) {
                console.log(d);
                var formData5 = new FormData();
                formData5.append('actNo', d[i].actNo);
                formData5.append('memNo', this.member.memNo);
                axios.post('./php/memActCollectDele.php', formData5).then(
                        res => {
                            console.log(res)
                        }
                    )
                    //console.log(d[e].actONo);
                d.splice(i, 1);
                this.dataClear();
            }
        },
        //暫存資料清淨機<3
        dataClear() {
            //活動或諮商預約
            this.tempData = "";
            this.tempIndex = "";
            this.tempONo = '';
            this.oCost = '';
            //收藏
            this.tempHeartData = "";
            this.tempHeartIndex = '';
            this.tempHeartTitle = '';
        },
        what(i, c, n) {
            //console.log(i, c);
            if (n == 1) {
                this.tempData = c;
                this.tempIndex = i;
                this.tempONo = c[i].csONo;
                this.oCost = c[i].csOCost;
                //console.log(c, this.tempONo, this.oCost);
            } else if (n == 2) {
                this.tempData = c;
                this.tempIndex = i;
                this.tempONo = c[i].actONo;
                this.oCost = c[i].actCost;
                // console.log(c[i], this.tempONo, this.oCost);
            }

            //console.log(this.tempData[this.tempIndex].csONo);
            // console.log(this.tempData);
        },
        which(i, d, n) {
            //console.log(i, d);
            if (n == 1) {
                this.tempHeartData = d;
                this.tempHeartIndex = i;
                this.tempHeartTitle = d[i].actName;

                //console.log(this.tempHeartIndex, this.tempHeartData, this.tempHeartTitle);
            } else if (n == 2) {
                this.tempHeartData = d;
                this.tempHeartIndex = i;
                this.tempHeartTitle = d[i].artTitle;

                // console.log(c[i], this.tempONo, this.oCost);
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
            formData.append('memNo', this.member.memNo);
            formData.append('memNickname', this.member.memNickname);
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


        //打開訂單更多
        orderMore(event) {
            event.currentTarget.nextElementSibling.classList.toggle('meOrderOpen');
        },
        chartOpen() {
            this.chartOpacity = true;
        },
        openShareDialog(str) {
            let shareButton = document.querySelector(".share-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.add("is-open");
            this.shareNo = str;
        },
        copyWord() {
            let copyWord = document.querySelector(".pen-url");
            copyWord.select();
            let copyStatus = document.execCommand("copy");
        },
        closeShereDialog() {
            let closeButton = document.querySelector(".close-button");
            let shareDialog = document.querySelector(".share-dialog");
            shareDialog.classList.remove("is-open");
        },
        backToWho() {
            if (this.windowSize < 576) {
                this.showChatRoom = !this.showChatRoom;
            }
        },

    },


    mounted() {


        // jiang start()
        this.firstChat();
        this.csMe();
        this.bellAlert()
        setInterval(() => {
            // 聊天欄
            axios.post("./php/csMe.php").then(res => {
                // console.log(res.data)
                this.chatPersonEach = res.data;
            });
            axios.post("./php/bellAlert.php").then(res => {
                this.bell = res.data;
                //console.log(this.bell)
            })
            let data = `mesNo=${this.mesNo}&csNo=${this.chatCsNo}`;
            axios.post("./php/keepMes.php", data).then(res => {
                // console.log(res.data);
                if (res.data != "0") {
                    let data = res.data;
                    this.mesNo = res.data[0].mesNo;
                    this.chatCsNo = res.data[0].csNo;
                    for (let i = data.length - 1; i >= 0; i--) {
                        this.meChatAn.push(data[i]);
                        setTimeout(() => {
                            var meChatMainRoom = document.getElementById("meChatMainRoom");
                            meChatMainRoom.scrollTop = meChatMainRoom.scrollHeight;
                        }, 0.1)
                    }
                }
            });
        }, 500)



        // jiang end()

        // //掛載心理測驗分數
        axios.get('./php/memTestR.php')
            .then(response => {
                if (response.data != 'no') {
                    //console.log(response.data);
                    this.csReData = response.data;
                    for (let i = 0; i < 5; i++) {
                        // console.log(this.csReData[i].testResultValue);
                        //console.log(this.series[0].data[i]);
                        this.series[0].data[i] = this.csReData[i].testResultValue;
                        // console.log(this.series[0].data[i]);
                    }
                } else {
                    console.log('haha');
                }

            });




        //會員資料辣ＱＱＱＱＱ

        //
        axios.get('./php/memberInfo.php').then(
            res => {
                if (res.data != "no") {
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
                    console.log(this.member);
                } else {
                    console.log(res.data);
                    location.replace('./home.html');
                }


            }
        ).catch(
            err => {
                console.log(err.status);
                //this.msg = err.status;
            }
        );
        //

        //掛載諮商訂單
        axios.get('./php/memCsOrder.php')
            .then(res => {
                if (res.data == '沒有訂單內容') {
                    this.coData = [];
                    this.coPastData = [];
                    //console.log(this.coPastData);
                } else {
                    //console.log(res.data[1].csODate);
                    for (let i = 0; i < res.data.length; i++) {
                        if (new Date(res.data[i].csODate) > Date.now()) {

                            this.coData.push(res.data[i]);
                        } else {
                            this.coPastData.push(res.data[i]);
                        };
                    };
                }
            });

        //掛載活動訂單
        axios.post('./php/memActOrder.php')
            .then(response => {
                if (response.data == '沒有訂單內容') {
                    this.aoData = [];
                    this.aoPastData = [];

                } else {
                    //console.log(response)
                    //console.log(response.data);
                    for (let i = 0; i < response.data.length; i++) {
                        if (new Date(response.data[i].actStart) > Date.now()) {
                            this.aoData.push(response.data[i]);
                        } else {

                            this.aoPastData.push(response.data[i]);
                        };
                    };
                }

            });
        // //掛載文章推薦
        axios.get('./php/memArtRec.php')
            .then(response => {
                if (response.data == "沒有推薦內容") {
                    this.memArtRec = [];
                } else {
                    this.memArtRec = response.data;
                }

                //console.log(this.memArtRec);
            });
        // //掛載活動推薦
        axios.get('./php/memActRec.php')
            .then(response => {
                if (response.data == "沒有推薦內容") {
                    this.memActRec = [];
                } else {
                    this.memActRec = response.data;
                }

                //console.log(this.memActRec);
            });
        // //掛載活動收藏
        axios.get('./php/memActCollect.php')
            .then(response => {
                if (response.data == '沒有推薦內容') {
                    this.actCol = [];
                } else {
                    this.actCol = response.data;
                    //console.log(this.actCol);
                }

            });
        // //掛載文章收藏
        axios.get('./php/memArtCollect.php')
            .then(response => {
                if (response.data == '沒有推薦內容') {
                    this.artCol = [];
                } else {
                    this.artCol = response.data;
                    //console.log(this.actCol);
                }
                //console.log(this.artCol);
            });


        this.windowSize = window.innerWidth;
        this.currentPage = this.titles[0];
    },
    updated() {

    },

    created() {
        window.addEventListener('resize', this.onResize);

    },
    beforeCreate() {

    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    computed: {
        searchNum() {

            //console.log(this.finalAoResult.length);
            var num = this.finalAoResult.length + this.finalCoResult.length;
            return num;
        },
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
            if (this.windowSize < 768) {
                if (this.currentPage == this.titles[0]) {
                    this.currentPage = '';
                }
            }
        },
        // this.currentPage = this.titles[0];
        // csReData: function() {
        //     for (let i = 0; i < 5; i++)
        //         this.series.data[i] = this.csReData[i].testResultValue;
        //     //console.log(this.csReData[i].testResultValue);
        //     this.$refs.newChart.updateSeries(
        //         [{
        //             data: this.series.data
        //         }],
        //         false,
        //         true
        //     );
        // },

    },


});