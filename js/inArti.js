// inArti
new Vue({
    el: "#inArti",
    data: {
        Arti: [{
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }, {
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }, {
            author: "溫在涵",
            date: "JUL 20,2020",
            category: "人際關係",
            title: "品格出眾的人，都懂得避開「巴納姆效應」",
            content: "有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

        }],

    },
    methods: {
        getInArti() {
            axios.post('./php/inArti.php').then(
                res => {
                    this.Arti = res.data
                    console.log(this.Arti);

                })


        },
    },

    mounted() {
        this.getInArti();
    },
    computed: {

    },

})