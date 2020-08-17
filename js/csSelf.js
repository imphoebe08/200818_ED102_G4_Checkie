(function () {
    let ctx = document.getElementById("myChart").getContext("2d");
    let datas = {
        labels: ["Coding", "Swimming", "Eating", "Cycling", "Sleeping"],
        datasets: [{
            label: "分數",
            data: [60, 40, 50, 52, 75],
        }]
    };

    let option = {
        legend: {
            display: 0,
            labels: {
                fontColor: "rgb(255, 99, 132)"
            }
        },
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    };
    let myChart = new Chart(ctx, {
        type: "radar",
        data: datas,
        options: option,
    });
})();

(function () {
    let jsList = document.getElementsByClassName('js-list-toggle');
    let jsItem = document.getElementsByClassName('js-item-toggle');
    for (let i = 0; i < jsList.length; i++) {
        jsList[i].addEventListener('click', function () {
            $(jsItem[i]).slideToggle();
        });
    }
})();

Vue.component('cssart-layout', {
    template: `<div class="csS-art__card">
                    <a href="./atSelf.html">
                        <img class="img-responsive"
                            src="https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080">
                    </a>
                    <div class="card-Info">
                        <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                        <span class="card-Info__category small">| 精神科醫師的異想世界</span>
                    </div>
                    <p @click="openArtPage">因感情問題來看診的年輕女性，有這四個共同特點</p>
                    <p class="small" @click="openArtPage">不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。</p>
                    <div class="row justify-content-center card-tag">
                        <a href="" class="button3-1">精神科</a>
                        <a href="" class="button3-1">失戀</a>
                        <a href="" class="button3-1">More..</a>
                    </div>
                    <div class="card-share">
                        <span>Share : </span>
                        <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                        <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
                    </div>
                </div>`,
    methods: {
        openArtPage() {
            window.open("./atSelf.html", "_self");
        },
    }
})



let vm = new Vue({
    el: "#app",
    methods: {
        openOrderPage() {
            window.open("./coCheck.html", "_self");
        }
    }
})