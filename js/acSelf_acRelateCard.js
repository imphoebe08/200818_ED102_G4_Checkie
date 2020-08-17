new Vue({
    el:"#acRelate",

    data: { 
        date: "",
    },
    methods: {
        
    },
    components:{
        "acRelateCard":{
            template: `
            <div class="acRelateCard">
                <a href="./ac_content.html">
                    <img src="./img/acSelf/acCard.jpg">
                </a>
            <!-- 卡片時間 -->
            <div class="acRelateCard_text">
                <img class="acRelateCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acRelateCard_time">2020-08-15（六）</p>
                <img class="acRelateCard-share_icon"src="./img/icon/share.png" alt="">
                <img class="acRelateCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
            </div>
            
            <!-- 卡片文字 -->
            <h6 class="acRelateCard_title"><a href="./ac_content.html">信念探索團：親密關係</a></h6>
            <p class="acRelateCard_category">#親密關係</p>
        </div>
            `,
        },
    },
})