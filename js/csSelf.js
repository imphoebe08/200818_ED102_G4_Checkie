Vue.component('cssart-layout', {
    template: `<div class="csS-art__card">
                    <a href="./atSelf.html">
                        <img class="img-responsive"
                            src="https://image1.thenewslens.com/2018/12/n2gvdi810gmxufwkn726jbt5fypicc.jpg?auto=compress&h=648&q=80&w=1080">
                    </a>
                    <div class="card-Info">
                        <span class="card-Info__times small"><img src="img//icon//clock.png" alt="">2018/12/15</span>
                        <span class="card-Info__category small">| 蔡XX醫師</span>
                    </div>
                    <p @click="openArtPage">因感情問題來看診的年輕女性，有這四個共同特點</p>
                    <p class="small" @click="openArtPage">不管對男生、女生來說，失去身邊親愛的人絕對是很大的打擊，其實跟年紀也不一定有關係。我有一個50多歲的病人，陷入一場瘋狂的戀愛，所有的理智都沒用，憂鬱了好幾個月。</p>
                    <div class="row card-tag">
                        <a href="./atSelf.html" class="button2">More...</a>
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

Vue.component("csselfact-layout", {
    template: `
	<div class="csSelfAct-card row">
		<div class="card-image col-3" @click="openActPage">
			<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf428880911095.5d4add485923f.jpg" alt="">
		</div>
		<div class="card-info col-9">
			<h5 @click="openActPage">夏日玩水消暑--象鼻岩獨木舟</h5>
			<span>2020/09/30</span>
			<span>14:00~17:00</span>
			<div class="share-buttons">
                    <span>Share : </span>
                    <a href="" class="small"><img src="img//icon//facebook.png" alt=""></a>
                    <a href="" class="small"><img src="img//icon//share.png" alt=""></a>
                    <a href="" class="small"><img src="img//icon//bookmark.png" alt=""></a>
			</div>
			<p>象鼻岩是位於新北瑞芳的深澳岬角，有著高約30公尺的巨大海蝕洞，因為遠看就像是個巨大的象鼻而得名，周圍有大大小小的岩石群、垂直的峭壁，其實非常適合體驗刺激的獨木舟，感受不同角度被群岩環繞的的震撼感。</p>
		</div>
		
		<button class="joinBut button2" @click="openActPage">立即報名</button>
	</div>
`,
    methods: {
        openActPage() {
            window.open("./acSelf.html", "_self");
        },
    }
});

let vmcssart = new Vue({
    el: "#app",
    methods: {
        openOrderPage() {
            window.open("./coCheck.html", "_self");
        },
        openSelfPage() {
            window.open("./csSelf.html", "_self");
        }
    }
})


// $(".csSelfReco-card").mouseenter(cardInfoToggle);

// $(".csSelfReco-card").mouseleave(cardInfoToggle);

// $(window).resize(function () {
//     if (window.innerWidth > 800 || window.innerWidth < 576) {
//         $(".csSelfReco-card").find(".card__info").show();
//     } else {
//         $(".csSelfReco-card").find(".card__info").hide();
//     }
// });

// function cardInfoToggle(e) {
//     if (window.innerWidth < 800 && window.innerWidth > 576) {
//         $(this).find(".card__info").slideToggle();
//     }
// }

;
(function () {
    let ctx = document.getElementById("myChart").getContext("2d");
    let datas = {
        labels: ["家庭關係", "人際關係", "伴侶關係", "壓力創傷", "自我探索"],
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


;
(function () {
    let jsList = document.getElementsByClassName('js-list-toggle');
    let jsItem = document.getElementsByClassName('js-item-toggle');
    for (let i = 0; i < jsList.length; i++) {
        jsList[i].addEventListener('click', function () {
            console.log('hi');
            $(jsItem[i]).slideToggle();
        });
    }
})();