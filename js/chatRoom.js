// 左側醫師區塊
Vue.component('doctors', {
    props: ['doctor'],
    template: `
    <div class="chatRoom_drChatbox">
    <div class="chatRoom_light"></div>
    <div class="chatRoom_drPic">
        <img src="./img/chatRoom/drPic.png" alt="">
    </div>
    <h5>{{doctor}}</h5><p>&nbsp諮商師</p>
    <div class="chatRoom_more">
        <img src="./img/icon/more.svg" alt="">
    </div>
    </div>`,
    methods: {
        
    },
});

// User對話框
Vue.component('user-chatbox', {
    props:['text'],
    template: `
    <div class="chatRoom_userConver">
    <div class="chatRoom_conver--more">
    <span>09:00:11</span>
    <img src="./img/icon/conver_more.svg" alt="">
    </div>
    <div class="chatRoom_conver--userText">{{text}}</div>
    <div class="chatRoom_conver--userPic"><img src="./img/chatRoom/userPic.png" alt=""></div>
    </div>`,
    methods: {
        
    },
});


// 醫師對話窗

Vue.component('doctor-chatbox', {
    props:['text'],
    template: `
    <div class="chatRoom_drConver">
    <div class="chatRoom_conver--drPic"><img src="./img/chatRoom/drPic.png" alt=""></div>
    <div class="chatRoom_conver--drText">{{text}}</div>
    <div class="chatRoom_conver--more">
    <span>09:00:11</span>
    <img src="./img/icon/conver_more.svg" alt="">
    </div>
    </div>`,
    methods: {
        
    },
});

// 呼叫Vue
new Vue({
    el:"#chatRoom",
    
    data:{
        date: "08/30",
        time: "11:11:11",
    },
})