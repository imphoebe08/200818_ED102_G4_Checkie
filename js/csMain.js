Vue.component("cscounselor-layout", {
	template: `
	<div class="swiper-container">
		<div class="csCounselor-gallery swiper-wrapper">
			<div class="swiper-slide"  v-for="(item,index) in slideInfo" :key="item.csId">
				<div class="csCounselor-card">
					<div class="csCounselor-image" @click="openSelfPage">
						<img class="img-responsive" src="https://www.hospital.fju.edu.tw/Media/DoctorPhoto/00186%20.jpg">
					</div>
					<p class="csC-doctor__name" @click="openSelfPage">{{item.csName}}醫師</p>
					<p class="csC-type_title">醫師專長</p>
					<div class="csC-type_tag row">
					<span class="col-4" v-for="(type, index2) in 2">{{item.csType[index2].csTypeName}}</span>
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
	methods: {
		openSelfPage() {
			window.open("./csSelf.html", "_self");
		},
	},
	props: ['slide-info'],
	data() {
		return {
			mySwiper: '',
		};
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
		cleanSelect() {
			this.csGender = [];
			this.csPosition = [];
			this.csProblem = [];
		},
		slideToggle() {
			let csMain = document.getElementById("csMain");
			if (this.slideBool) {
				csMain.classList.add("slideIn");
				csMain.classList.remove("slideOut");
				this.slideBool = !this.slideBool;
			} else {
				csMain.classList.remove("slideIn");
				csMain.classList.add("slideOut");
				this.slideBool = !this.slideBool;
			}
		},
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
		slideResult() {
			if (this.csGender.length == 0 && this.csPosition.length == 0 && this.csProblem.length == 0) {
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