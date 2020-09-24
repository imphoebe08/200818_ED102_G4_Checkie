// acMian_acCommentCard-活動好評
Vue.component('acCommentList', {
    props: { acComments: Array },
    template: `
    <div class="acComment container-sm container-md" id="acComment">
        <div class="acCommentList"  v-for="comment in acComments">
            <div class="acCommentList_img">
                <img :src="comment.commenterPic" alt="">
            </div>
            <div class="acCommentList-text">
                <h6>{{comment.commenter}} ｜ {{comment.job}}</h6>
                <p>{{comment.comment}}</p>
            </div>
        </div>
    </div>
    `,
    methods: {

    },
});

//acMain-selectCard-分類小卡
Vue.component('acSelectCard', {
    props: { acContents: Array },
    data() {
        return {
            num: 3,
        }
    },
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
        <div class="acSelectCard" v-for="(acContent,index) in aaa(num)">
                <a :href="'./acSelf.html?actNo=' + acContent.actNo">
                    <img :src="acContent.actpic1">
                </a>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a :href="'./acSelf.html?actNo=' + acContent.actNo">{{acContent.actName}}</a></h6>
            
            <!-- 卡片時間 -->
            <div class="acSelectCard_icon">
            <i class="fas fa-share-alt acSelectCard-share_icon share-button" style="font-size:20px"  @click="openShareDialog(acContent.actNo)"></i>
            <i class="fas fa-bookmark acSelectCard-bookmark_icon" style="font-size:20px" :class="[{ colorful: acContent.isCollect }, 'icon']" @click="doCollected(index)"></i>
            </div>
            <div class="acSelectCard_text">
            <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
            <p class="acSelectCard_time">活動日期：<br>{{acContent.actStart}} ~ <br>{{acContent.actEnd}}</p>
            </div>
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">報名截止日期：<br>{{acContent.actPend}}</p>
            </div>

            <div class="acSelectCard_bottomBlock">
            <p class="acSelectCard_person"> 剩餘名額：{{acContent.actMax - acContent.actCount}}</p>
            <a :href="'./aoStepper.html?actNo=' + acContent.actNo"><input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register"></a>
            </div>
        </div>
        <div class="acSelect-wrapper_btnMore col-12">
        <button class="acSelectMore" @click="num+=3">更多活動</button>
        </div>
    </div>

    `,
    methods: {
        aaa(data) {
            return this.acContents.slice(0, data);
        },
        openShareDialog(actNo) {
            console.log('hi');
            this.$emit('open-share-dialog', `actNo=${actNo}`);
        },
        doCollected(index) {
            this.$emit('do-collected', index);
        },

    },
    computed: {

    }

});

//Vue
let vm = new Vue({
    el: "#acMain",

    data: {

        num: 3,
        title: ["精選活動", "講座", "療癒", "戶外", "藝文"],
        contents: [],
        comments: [],
        isActive: true,
        index: 0,
        shareUrl: "http://140.115.236.71/demo-projects/ED102/ED102G4/acMain.html?", //傳送的文章或活動主連結
        shareNo: '', //傳送的文章或活動編號，我預設為0
        memberData: [{
            member: true,
            memNo: 1,
            artCollect: [1, 2, 4, 7], //每個會員要有自己的收藏編號陣列
            actCollect: [1, 2, 4, 7] //每個會員要有自己的收藏編號陣列
        }],
    },
    methods: {
        category_click(value) {
            this.index = value;
        },
        openShareDialog(str) {
            console.log(str);
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
        //收藏功能
        firstChecked2() {
            if (this.memberData[0].member)
                this.result.forEach((v, i) => {
                    let a = this.memberData[0].actCollect.indexOf(parseInt(v.actNo));
                    if (a > -1) this.result[i].isCollect = true;
                    else this.result[i].isCollect = false;
                });
            else {
                this.result.forEach((v, i) => {
                    this.result[i].isCollect = false;
                });
            }
        },
        doCollected2(index) {
            if (this.memberData[0].member)
                if (this.result[index].isCollect) {
                    // delete收藏資料;
                    this.deleteCollect(this.result[index].actNo, 'act');
                    this.memberData[0].actCollect.splice(
                        this.memberData[0].actCollect.indexOf(parseInt(this.result[index].actNo)), 1
                    );
                    this.result[index].isCollect = false;
                } else {
                    // insert收藏資料;
                    this.insertCollect(this.result[index].actNo, 'act');
                    this.memberData[0].actCollect.push(parseInt(this.result[index].actNo));
                    this.result[index].isCollect = true;
                }
            else {
                $("#signup_overlay").removeClass("signup_overlay-none");
                $("#signup_overlay").fadeIn(300);
                $("#container").removeClass("right-panel-active");
            }; //跳出登入視窗
        },
        deleteCollect(number, type) {
            let actNo, artNo;
            if (type == 'art') {
                actNo = 0;
                artNo = number;
            } else {
                artNo = 0;
                actNo = number;
            }
            axios.get('./php/deleteCollect.php', {
                params: {
                    "artNo": artNo,
                    "actNo": actNo,
                }
            }).then((res) => {
                console.log(res.data);
            });
        },
        insertCollect(number, type) {
            let actNo, artNo;
            if (type == 'art') {
                actNo = 0;
                artNo = number;
            } else {
                artNo = 0;
                actNo = number;
            }
            axios.get('./php/insertCollect.php', {
                params: {
                    "artNo": artNo,
                    "actNo": actNo,
                }
            }).then((res) => {
                console.log(res.data);
            });
        },
    },
    mounted() {

        axios.get('./php/acMain_nolimit.php').then((res) => {
            this.contents = res.data
            console.log(res.data);
            this.firstChecked2();
            $("#category0").focus();
        })

        axios.get('./json/acMain_comments.json').then((data) => {
            this.comments = data.data
        })

        axios.get(`./php/csSelfCollect.php`).then((res3) => {
            this.memberData[0].member = res3.data.member; //會員判定
            this.memberData[0].memNo = res3.data.memNo;
            this.memberData[0].artCollect = res3.data.artCollect.map(i => parseInt(i));
            this.memberData[0].actCollect = res3.data.actCollect.map(i => parseInt(i));
            this.firstChecked2();
        })

    },
    updated() {
        this.firstChecked2();
    },
    computed: {
        addNum() {
            return this.contents;
        },
        result() {
            if (this.index == 0) {
                // return this.contents;
                return this.contents.filter(item => new Date(item.actEnd) > new Date());
            } else {
                this.$children[0].$data.num = 3;
                return this.contents.filter(item => item.actTypeNo == this.index || item.actTypeNo2 == this.index);
            }
        }
    },
})



// 活動Title變更（取消使用）
// new Vue({
//     el:"#acMain",

//     data:{
//         title:["精選活動","講座","療癒","戶外","藝文"],
//         now_title:"精選活動",
//     },
//     methods: {
//         category_click(data){
//             this.now_title=this.title[data];
//         }
//     },
// })