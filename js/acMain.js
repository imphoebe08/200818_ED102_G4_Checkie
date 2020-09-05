// acMian_acCommentCard-活動好評
Vue.component('acCommentList', {
    props: ['doctor'],
    template: `
        <div class="acCommentList">
        <div class="acCommentList_img">
            <img src="./img/acMain/acComment.jpg" alt="">
        </div>
        <div class="acCommentList-text">
            <h6>{{doctor}} ｜ 醫師</h6>
            <p >中國家長對課外活動並不陌生，很多人都從孩子很小的時候就投入大量時間和財力，發展他們各種才藝。但是如何在大學升學背景下看待高中課外活動，值得探討。美國高中教學形式非常豐富，講課、實驗、小組項目、上台演示、課堂討論等，讓孩子在生動的環境中掌握知識。但這一切不能全面預備孩子面向未來，各種課外活動可以彌補這些不足。</p>
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
        <div class="acSelectCard" v-for="nums in acContents">
                <a href="./acSelf.html">
                    <img src="./img/acMain/acCard.jpg">
                </a>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a href="./acSelf.html">{{acContents.acName}}</a></h6>
            
            <!-- 卡片時間 -->
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">2020-08-15（六）<br> 14:00 - 16:00</p>
                <div class="acSelectCard_icon">
                <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
                <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
                </div>
            </div>

            <div class="acSelectCard_bottomBlock">
            <p class="acSelectCard_person"> 剩餘名額：{{acContents.acMax}}</p>
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
        nums: 6,
        title: ["精選活動", "講座", "療癒", "戶外", "藝文"],
        contents: [1, 2]
    },
    methods: {

    },
    mounted() {
        axios.get('./json/acMain.json').then((data) => {
            this.contents = data.data
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