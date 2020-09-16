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
        <div class="acSelectCard" v-for="acContent in aaa(num)">
                <a :href="'./acSelf.html?actNo=' + acContent.actNo">
                    <img :src="acContent.actpic1">
                </a>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a :href="'./acSelf.html?actNo=' + acContent.actNo">{{acContent.actName}}</a></h6>
            
            <!-- 卡片時間 -->
            <div class="acSelectCard_icon">
            <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
            <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
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
            <input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register">
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
        }
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
    },
    methods: {
        category_click(value) {
            this.index = value;
        }
    },
    mounted() {

        axios.get('../php/acMain.php').then((res) => {
            this.contents = res.data
            console.log(res.data);
        })

        axios.get('./json/acMain_comments.json').then((data) => {
            this.comments = data.data
        })

    },
    computed: {
        addNum() {
            return this.contents;
        },
        result() {
            if (this.index == 0) {
                return this.contents;
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