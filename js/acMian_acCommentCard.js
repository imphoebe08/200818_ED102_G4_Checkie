// acMian_acCommentCard-活動好評
new Vue({
    el:"#acComment",

    data: { 
        date: "",
    },
    methods: {
        
    },
    components:{
        "acCommentList":{
            template: `
            <div class="acCommentList">
                <div class="acCommentList_img">
                    <img src="./img/acMain/acComment.jpg" alt="">
                </div>
                <div class="acCommentList-text">
                    <h6>陳立德 ｜ 醫師</h6>
                    <p >中國家長對課外活動並不陌生，很多人都從孩子很小的時候就投入大量時間和財力，發展他們各種才藝。但是如何在大學升學背景下看待高中課外活動，值得探討。美國高中教學形式非常豐富，講課、實驗、小組項目、上台演示、課堂討論等，讓孩子在生動的環境中掌握知識。但這一切不能全面預備孩子面向未來，各種課外活動可以彌補這些不足。</p>
                </div>
            </div>
            `,
        },
    },
})