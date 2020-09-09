let vm = new Vue({
    el: '#fullpage',
    data: {
        cards: [{
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }, {
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }, {
            cardPic: "",
            cardTitle: "",
            cardContent: ""
        }],
        // 打亂陣列
        cardsBack: ["./img/oracleCard/card_cover//cover_angel.png", "./img/oracleCard/card_cover/cover_heaven.png", "./img/oracleCard/card_cover/cover_illustration.png"],
        deckNo: "",
    },
    beforeMount() {
        this.randArr(this.cardsBack.length, this.cardsBack);

    },
    mounted() {
        axios.get('./json/card.json')
            .then((res) => {
                // this.cards = res.data;
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    methods: {
        // 陣列亂數好用喔
        randArr(num, data) {
            for (var i = 0; i < num; i++) {
                var iRand = parseInt(num * Math.random());
                var temp = data[i];
                data[i] = data[iRand];
                data[iRand] = temp;
            }
            return data;
        },

        cardChangeData(data) {
            //產生XMLHttpRequest物件
            // console.log(123)
            let aaa = data;
            setTimeout(function() {
                for (let index = 0; index < 3; index++) {
                    vm.$set(vm.$data.cardsBack, index, aaa)
                }
            }, 2500);
            switch (data) {
                case "./img/oracleCard/card_cover//cover_angel.png":
                    this.deckNo = 1;
                    break;
                case "./img/oracleCard/card_cover/cover_heaven.png":
                    this.deckNo = 2;
                    break;
                case "./img/oracleCard/card_cover/cover_illustration.png":
                    this.deckNo = 3;
                    break;
            }
            var xhr = new XMLHttpRequest();

            //註冊callback function
            xhr.onload = function() {
                    // if (xhr.readyState == XMLHttpRequest.DONE) { //server端已處理完畢
                    if (xhr.status == 200) { //success
                        cardData = JSON.parse(xhr.responseText);
                        vm.randArr(cardData.length, cardData);
                        for (let i = 0; i < 3; i++) {
                            vm.$data.cards[i].cardPic = cardData[i].cardPic
                            vm.$data.cards[i].cardTitle = cardData[i].cardTitle
                            vm.$data.cards[i].cardContent = cardData[i].cardContent
                        }
                    } else {
                        console.log(xhr.status);
                    }
                }
                // }

            //設定好所要連結的程式
            // 改路徑
            let url = "./js/oracleCard.php?deckNo=" + this.deckNo;
            console.log(url)
            xhr.open("get", url, true); //--------------
            //送出資料
            xhr.send(null);

        },
    },
    computed: {

    },
});