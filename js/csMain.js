// 元件: 諮商師卡片
Vue.component("cscounselor-layout", {
    template: `
	<div class="swiper-container">
		<div class="csCounselor-gallery swiper-wrapper">
			<div class="swiper-slide"  v-for="(item,index) in mySlide" :key="item.csId">
				<div class="csCounselor-card">
					<div class="csCounselor-image">
					<a href="./csSelf.html">
						<img class="img-responsive" src="https://www.hospital.fju.edu.tw/Media/DoctorPhoto/00186%20.jpg">
					</a>
					</div>
					<a href="./csSelf.html">
						<p class="csC-doctor__name">{{item.csName}}醫師</p>
					</a>
					<p class="csC-type_title">醫師專長</p>
					<div class="csC-type_tag row">
					<span class="col-4" v-for="(type, index) in 2">{{item.csType[index]}}</span>
					</div>
					<div class="csC-doctor__info">
						<ul class="csC-doctor__list">
							<li>
								<p>經歷</p>
								<ul class="csS-list">
									<li class="small" v-for="his in strToArray(index)"><i class="fas fa-circle"></i>{{his}}</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>`,
    props: ['slide-info'],
    data() {
        return {
            mySwiper: '',
            mySlide: this.slideInfo
        }
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            spaceBetween: 100,
            direction: 'horizontal',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    },
    watch: {
        slideInfo: function() {
            this.mySlide = this.slideInfo;
        }
    },
    updated() {
        this.mySwiper.update();
    },
    methods: {
        strToArray(index) {
            return this.mySlide[index].csHis.split(",");
        }
    }
});




// 掛載new Vue
let vmCs = new Vue({
    el: "#appCsMain",
    data: {
        screenWidth: window.innerWidth,
        csGender: [],
        csPosition: [],
        csType: [],
        slideBool: true,
        csData: [],
    },
    mounted() {
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };

        axios.get('../json/csMain.json')
            .then((res) => {
                this.csData = res.data;
            })
            .catch((error) => {
                console.log(error)
            });
    },
    methods: {
        // 開關縮小視窗後的選單用
        slideToggle() {
            let csMain = document.getElementById("csMain");
            csMain.classList.toggle("slideIn");
            csMain.classList.toggle("slideOut");
            this.slideBool = !this.slideBool;
        },

        // 關閉縮小視窗後的選單用
        clickWhite(e) {
            let csMain = document.getElementById("csMain");
            if (e.target !== (csMain) && !csMain.contains(e.target)) {
                csMain.classList.remove("slideIn");
                csMain.classList.add("slideOut");
                this.slideBool = true;
            }
        }
    },
    computed: {
        // 回傳篩選後的結果
        // 篩選器的結果為一陣列，如果篩選器陣列中的任一元素 == 諮商師條件，就顯示那位諮商師的資料。
        slideResult() {
            // 如果都不選，就全部回傳
            if (this.csGender.length + this.csPosition.length + this.csType.length == 0) {
                return this.csData;
            } else {
                return this.csData.filter(item => {
                    return (this.csGender.indexOf(item.csGender) > -1 || this.csGender.length == 0) &&
                        (this.csPosition.indexOf(item.csPosition) > -1 || this.csPosition.length == 0) &&
                        (this.csType.indexOf(item.csType[0]) > -1 || this.csType.indexOf(item.csType[1]) > -1 || this.csType.length == 0);
                })
            }
        },
    },
});