//acMain-selectCard-分類小卡

new Vue({
    el:"#acSelect",

    data: { 
        nums:6,
    },
    methods: {
        
    },
    
    computed: {
        addNum(){
            return this.nums;
        }
    },
    components:{
        "acSelectCard":{
            template: `
        <div class="acSelectCard">
                <a href="./acSelf.html">
                    <img src="./img/acMain/acCard.jpg">
                </a>
            <!-- 卡片時間 -->
            <div class="acSelectCard_text">
                <img class="acSelectCard-time_icon"src="./img/icon/clock.png" alt="">
                <p class="acSelectCard_time">2020-08-15（六）<br> 14:00 - 16:00</p>
                <div class="acSelectCard_icon">
                <img class="acSelectCard-share_icon"src="./img/icon/share.png" alt="">
                <img class="acSelectCard-bookmark_icon"src="./img/icon/bookmark.png" alt="">
                </div>
            </div>
            
            <!-- 卡片文字 -->
            <h6 class="acSelectCard_title"><a href="./acSelf.html">信念探索團：親密關係</a></h6>

            <div class="acSelectCard_bottomBlock">
            <p class="acSelectCard_person"> 剩餘名額：10人<p>
            <input id="acSelectCard_register" type="button" value="立即報名" class="acSelectCard_register">
            </div>
        </div>
            `,
        },
    },
})