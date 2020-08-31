// 元件: 諮商師卡片
Vue.component("cscounselor-layout", {
	template: `
	<div class="swiper-container">
		<div class="csCounselor-gallery swiper-wrapper">
			<div class="swiper-slide"  v-for="(item,index) in slideInfo" :key="item.csId">
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
					<span class="col-4" v-for="(type, index) in 2">{{item.csType[index].csTypeName}}</span>
					</div>
					<div class="csC-doctor__info">
						<ul class="csC-doctor__list">
							<li>
								<p>經歷</p>
								<ul class="csS-list">
									<li class="small" v-for="item in 7"><i class="fas fa-circle"></i>新光醫院精神科病房主任</li>
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
	updated() {
		this.mySwiper.update();
	}
});




// 掛載new Vue
let vmCs = new Vue({
	el: "#appCsMain",
	data: {
		screenWidth: window.innerWidth,
		csGender: [],
		csPosition: [],
		csProblem: [],
		slideBool: true,
		csData: []
	},
	mounted() {
		window.onresize = () => {
			this.screenWidth = window.innerWidth;
		};

		axios.get('../json/cs.json')
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
		slideResult() {
			if (this.csGender.length + this.csPosition.length + this.csProblem.length == 0) {
				return this.csData;
			} else {
				return this.csData.filter(item => {
					return (this.csGender.indexOf(item.csGender) > -1 || this.csGender.length == 0) &&
						(this.csPosition.indexOf(item.csPosition) > -1 || this.csPosition.length == 0) &&
						(this.csProblem.indexOf(item.csProblem) > -1 || this.csProblem.length == 0);
				})
			}
		},
	},
});