
Vue.component('doctors', {
    props: ['doctor'],
    template: `
    <div class="chatRoom_drChatbox">
    <div class="chatRoom_light"></div>
    <div class="chatRoom_drPic">
        <img src="./img/chatRoom/drPic.png" alt="">
    </div>
    <h5>{{doctor}}</h5>
    <div class="chatRoom_more">
        <img src="./img/icon/more.svg" alt="">
    </div>
    </div>`,
    methods: {
        
    },
});

new Vue({
    el:"#chatRoom",
})