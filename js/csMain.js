Vue.component("cscounselor-layout", {
	template: `<div class="swiper-slide">
                    <div class="csCounselor-card">
                        <div class="csCounselor-image" @click="openSelfPage">
                            <img class="img-responsive"
								src="https://www.hospital.fju.edu.tw/Media/DoctorPhoto/00186%20.jpg">
						</div>
						<p class="csC-doctor__name" @click="openSelfPage">吳醫師</p>
                        <p class="csC-type_title">醫師專長</p>
						<div class="csC-type_tag row">
                            <span class="col-4">家庭關係</span>
                            <span class="col-4">人際關係</span>
                        </div>
                        <div class="csC-doctor__info">
                            <ul class="csC-doctor__list">
                                <li>
                                    <p class="js-list-toggle">經歷</p>
									<ul class="csS-list js-item-toggle">				
                                        <li class="small"><i class="fas fa-circle"></i>新光醫院精神科病房主任</li>
                                        <li class="small"><i class="fas fa-circle"></i>新光醫院精神科主治醫師</li>
                                        <li class="small"><i class="fas fa-circle"></i>國家衛生研究院台灣成癮次專科醫師訓練</li>
                                        <li class="small"><i class="fas fa-circle"></i>新光醫院精神科臨床研究員醫師</li>
                                        <li class="small"><i class="fas fa-circle"></i>新光醫院精神科總醫師</li>
                                        <li class="small"><i class="fas fa-circle"></i>新光醫院精神科住院醫師</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`,
	methods: {
		openSelfPage() {
			window.open("./csSelf.html", "_self");
		}
	}
});

// template: `<div class="swiper-slide">
//                     <div class="csCounselor-card">
//                         <div class="csCounselor-image" @click="openSelfPage">
//                             <img class="img-responsive"
// 								src="https://www.hospital.fju.edu.tw/Media/DoctorPhoto/00186%20.jpg">
// // 	<img class="img-responsive" :src="csData.img">
// 						</div>
// 						<p class="csC-doctor__name" @click="openSelfPage">吳醫師</p>
// //	<p class="csC-doctor__name" @click="openSelfPage">{{csData.name}} 醫師</p>
//                         <p class="csC-type_title">醫師專長</p>
// 						<div class="csC-type_tag row">
// // <span v-for="item in csData.typeTop">{{item}}</span>
//                             <span class="col-4">家庭關係</span>
//                             <span class="col-4">人際關係</span>
//                         </div>
//                         <div class="csC-doctor__info">
//                             <ul class="csC-doctor__list">
//                                 <li>
//                                     <p class="js-list-toggle">經歷</p>
// 									<ul class="csS-list js-item-toggle">
// // <li v-for="item in csData.his"><i class="fas fa-circle">{{item}}</li>						
//                                         <li class="small"><i class="fas fa-circle"></i>新光醫院精神科病房主任</li>
//                                         <li class="small"><i class="fas fa-circle"></i>新光醫院精神科主治醫師</li>
//                                         <li class="small"><i class="fas fa-circle"></i>國家衛生研究院台灣成癮次專科醫師訓練</li>
//                                         <li class="small"><i class="fas fa-circle"></i>新光醫院精神科臨床研究員醫師</li>
//                                         <li class="small"><i class="fas fa-circle"></i>新光醫院精神科總醫師</li>
//                                         <li class="small"><i class="fas fa-circle"></i>新光醫院精神科住院醫師</li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>`,

let vm = new Vue({
	el: "#appCsMain",
	data: {
		screenWidth: window.innerWidth,
		csGender: [],
		csPosition: [],
		csProblem: [],
		slideBool: true,
		countCards: 10
	},
	mounted() {
		window.onresize = () => {
			this.screenWidth = window.innerWidth;
		};
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
	}
});



(function () {
	let jsList = document.getElementsByClassName("js-list-toggle");
	let jsItem = document.getElementsByClassName("js-item-toggle");
	for (let i = 0; i < jsList.length; i++) {
		jsList[i].addEventListener("click", function () {
			$(jsItem[i]).slideToggle();
		});
	}
})();

let swiper = new Swiper(".swiper-container", {
	spaceBetween: 100,
	centeredSlides: true,
	initialSlide: Math.ceil(vm.$data.countCards / 2),
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});