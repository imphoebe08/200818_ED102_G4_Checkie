Vue.component('ask-content', {
    props: ['questions'],
    template: `
    <div class="askContent">
    <img src="" class="askPic" alt=""><p class="qsAsk">{{questions}}</p>
    </div>`,
    methods: {

    },
});

Vue.component('ans-content', {
    props: ['answers'],
    template: `
    <div class="ansContent">
    <p class="qsAns">{{answers}}</p><img src="" class="ansPic" alt="">
    </div>`,
    methods: {

    },
});

Vue.component('ans-buttons-grades', {
    template: `
    <div class="ansButtons-grades">
    <input class="qsQrades" type="button" value="1">
    <input class="qsQrades" type="button" value="2">
    <input class="qsQrades" type="button" value="3">
    <input class="qsQrades" type="button" value="4">
    <input class="qsQrades" type="button" value="5">
    </div>`,
    methods: {

    },
});

new Vue({
    el:"#qsBox",

})