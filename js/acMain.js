// acMian_acCommentCard-活動好評
Vue.component('acCommentList', {
    props: { acComments: Array },
    template: `
    <div class="acComment container-sm container-md" id="acComment">
        <div class="acCommentList"  v-for="comment in acComments">
            <div class="acCommentList_img">
                <img src="./img/acMain/acComment.jpg" alt="">
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
    template: `
    <div id="acSelect" class="acSelect container-sm container-md">
        <div class="acSelectCard" v-for="acContent in acContents">
                <a href="./acSelf.html">
                    <img src="./img/acMain/acCard.jpg">
                </a>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a href="./acSelf.html">{{acContent.acName}}</a></h6>
            
            <!-- 卡片時間 -->
            <div class="acSelectCard_icon">
            <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
            <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
            </div>
            <div class="acSelectCard_text">
            <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
            <p class="acSelectCard_time">活動日期：<br>{{acContent.acStartDate}} ~ <br>{{acContent.acEndDate}}</p>
            </div>
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">報名截止日期：<br>{{acContent.acRedEndDate}}</p>
            </div>

            <div class="acSelectCard_bottomBlock">
            <p class="acSelectCard_person"> 剩餘名額：{{acContent.acMax - acContent.acMin}}</p>
            <input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register">
            </div>
        </div>
        <div class="acSelect-wrapper_btnMore col-12">
        <button class="acSelectMore" @click="acContents+=3">更多活動</button>
        </div>
    </div>

    `,

});

//Vue
new Vue({
    el: "#acMain",

    data: {
        title: ["精選活動", "講座", "療癒", "戶外", "藝文"],
        contents: [],
        comments: [],
    },
    methods: {

    },
    mounted() {
        axios.get('./json/acMain.json').then((data) => {
            this.contents = data.data
        })

        axios.get('./json/acMain_comments.json').then((data) => {
            this.comments = data.data
        })
    },
    computed: {
        addNum() {
            return this.contents;
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