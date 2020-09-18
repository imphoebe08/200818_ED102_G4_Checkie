var i = 0;
$(function() {
    $(".atBanner-box_pic>img").css("transform", `translateY(-50px)`)

})

function move_box() {
    var atBox_top = $(".atBox").offset().top;
    var move_right = $(".atBox_Class>a").width(),
        win_scroll = $(window).scrollTop(),
        hWin = $(window).height(),
        atClassTitle_top = $(".atClassTitle").offset().top,
        banner = $(".atBanner").offset().top,
        banner_dis = win_scroll - banner;
    $(".atBanner-box_pic>img").css("transform", `translateY(${-50+banner_dis*-0.2}px)`)

    var move_right = $(".atBox_Class>a").width(),
        win_scroll = $(window).scrollTop(),
        hWin = $(window).height(),
        atClassTitle_top = $(".atClassTitle").offset().top;

    /*
    * when class atClassAfter_content display on window then show 
    var atCAC = $(".atClassAfter_content").offset().top;
    if (win_scroll+hWin > atCAC ) {
        console.log("fffffffffff~~~!!!")
    }*/

    if (win_scroll > atBox_top - 0.5 * hWin && i == 0) {
        $(".atBox").animate({ scrollLeft: move_right * 0.5 }, 1000)
        i++;
    };
    if (win_scroll > atClassTitle_top - 0.5 * hWin) {
        var dis = win_scroll - 0.2 * hWin - atClassTitle_top;
        $(".atClassTitle-content-pic_img").css("transform", `translateX(${dis*0.8}px)`);
        $(".atClassTitle-content-pic_ColorBlock").css("transform", `translateX(${dis*0.6}px)`);
    }
    $(".atClassTitle-content-pic_img").css("transform", `translate(${dis*0.8}px,${dis*0.2}px)`);
    $(".atClassTitle-content-pic_ColorBlock").css("transform", `translate(${dis*0.6}px,${dis*0.1}px)`);

    var CTB = $(".atClassAfter_content_block");
    CTB.each(function() {
        var this_top = $(this).offset().top;
        var abc = $(this)
        if (win_scroll > this_top - 0.5 * hWin) {
            abc.addClass("show_ani");
            // $(".atClassAfter-content_pic").css({
            // clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)"
            // });
            // $(".atClassAfter-content-block_blank").css("transform","translateX(0)")
            // setTimeout(function(){
            //     $(".atClassAfter-content_text").css("opacity","1")
            // },1000)
        }
    })

};

$(window).scroll(function() {
    move_box();
})
Vue.component("ever1", {
    props: ["in"],
    data() {
        return {
            each: this.in

        }
    },
    template: `
<a :href="gogo(each)">
    <article>
        <div class="atContent-left_pic">
            <img :src="each.artPic2" alt="">
        </div>
        <div class="atContent-left_detail">
            <div class="atContent-left-detail_pic"><img :src="each.cspic" alt=""></div>
            <div class="atContent-left-detail_text">
                <p>{{each.csName}}</p>
            </div>
            <div class="atContent-left-detail_title">
                <p>{{each.artdate.substring(0,10)}}</p>
            </div>
        </div>
        <div class="atContent-left_border1"></div>

        <div class="atContent-left_title">
            {{each.artTitle.substring(0,10)}}
        </div>
        <div class="atContent-left_partner">
            <p>
                {{each.artContent}}
            </p>
        </div>

    </article>
</a>
`,

    methods: {
        gogo(each) {
            return `./atSelf.html?artNo=${each.artNo}`
        },

    }
})

Vue.component("cam", {

    props: ["can"],
    data() {
        return {
            each: this.can
        }
    },
    template: `
     <a :href="can1(each)">
             <article>
                 <div class="atContent-conter_pic">
                     <img :src="each.artPic2" alt="">
                 </div>
                 <div class="atContent-conter_detail">
                     <div class="atContent-conter-detail_pic"><img :src="each.cspic" alt=""></div>
                     <div class="atContent-conter-detail_text">
                         <p>{{each.csName}}</p>
                     </div>
                     <div class="atContent-conter-detail_title">
                         <p>{{each.artdate.substring(0,10)}}</p>
                     </div>
                 </div>
                 <div class="atContent-conter_border1"></div>

                 <div class="atContent-conter_title">
                     {{each.artTitle.substring(0,10)}}
                 </div>
                 <div class="atContent-conter_partner">
                     <p>
                         {{each.artContent}}
                     </p>
                 </div>

            </article>
         </a>
 `,
    methods: {
        can1(each) {
            return `./atSelf.html?artNo=${each.artNo}`
        }
    }
})

Vue.component("ri", {
        data() {
            return {
                each: this.rit,
            }
        },
        props: ["rit"],
        template: `
<a :href="rit1(each)">
    <article>
        <div class="atContent_right_pic">
            <img :src="each.artPic2" alt="">
        </div>
        <div class="atContent-right_detail">
            <div class="atContent-right-detail_pic"><img :src="each.cspic" alt=""></div>
            <div class="atContent-right-detail_text">
                <p>{{each.csName}}</p>
            </div>
            <div class="atContent-right-detail_title">
                <p>{{each.artdate.substring(0,10)}}</p>
            </div>
        </div>
        <div class="atContent_right_border1"></div>
        <div class="atContent_right_title">
            {{each.artTitle}}
        </div>
        <div class="atContent_right_partner">
            <p>
                {{each.artContent}}
            </p>
        </div>
    </article>
</a>
`,
        methods: {
            rit1(each) {
                return `./atSelf.html?artNo=${each.artNo}`
            }
        }
    })
    // ----------------
Vue.component("boxclass", {
        props: ["dis", "init"],
        data() {
            return {
                each: this.dis,
                index: this.init + 1,
            }
        },
        template: `
                 <a href="javascript:void(0)" @click="change">
                     <div class="atBox-Class_content">
                         <div class="atBox-Class-content_pic">
                             <img :src="each.img" alt="">
                         </div>
                         <div class="atBox-Class-content_text">
                             <div class="atBox-Class-content-text_title">
                                 <h2>{{each.class}}</h2>
                             </div>
                         </div>
                     </div>
                 </a>
    `,
        methods: {
            change() {
                this.$emit("change-it", this.index);
            },
        },
    })
    // -------------
Vue.component('duli', {
    props: ["dul"],
    data() {
        return {

            each: this.dul,
        }
    },

    template: `
        <div class="atClassAfter_content_block">
                    <div class="atClassAfter-content-block_blank"></div>
                    <!-- 1200 -->
                    <div class="atClassAfter_content">
                        <!-- flex-end -->
                        <div class="atClassAfter-content_pic">
                            <img :src="dul.artPic2" alt="">
                        </div>
                        <div class="atClassAfter-content_text">
                            <div class="atClassAfter-content-text_title">
                                <h2>{{dul.artTitle.substring(0,16)}}</h2>
                            </div>
                            <div class="atClassAfter-content-text_detail">
                                <p>
                                    {{dul.artContent.substring(0,250)}}
                                </p>
                            </div>
                            <a :href="out(dul)">
                                <div class="atClassAfter-content_button">
                                    <input type="submit" class="test_submit" value=延伸閱讀>
                                </div>
                            </a>
                        </div>


                </div>
            </div>
    `,
    methods: {
        out(dul) {
            return `./atSelf.html?artNO=${dul.artNo}`
        }
    }

})
Vue.component('duri', {
    props: ["dul"],
    data() {
        return {
            each: this.dul,
        }
    },
    template: `
    <div class="atClassAfter_content_block">
                <div class="atClassAfter-content-block_blank"></div>
                <!-- 1200 -->
                <div class="atClassAfter_content">
                    <!-- flex-end -->
                    <div class="atClassAfter-content_text">
                        <div class="atClassAfter-content-text_title">
                            <h2>{{dul.artTitle.substring(0,16)}}</h2>
                        </div>
                        <div class="atClassAfter-content-text_detail">
                            <p>
                            {{dul.artContent.substring(0,250)}}

                            </p>
                        </div>
                        <a :href="gogo(dul)">
                            <div class="atClassAfter-content_button">
                                <input type="submit" class="test_submit" value=延伸閱讀>
                            </div>
                        </a>
                    </div>
                    <div class="atClassAfter-content_pic">
                        <img :src="dul.artPic2" alt="">
                    </div>
                </div>
            </div>
    `,
    methods: {
        gogo(dul) {
            return `./atSelf.html?artNo=${dul.artNo}`;
        }
    }
})
let vm = new Vue({
    el: "#atcontent",
    data: {
        aaa: "",
    },
    methods: {
        topArticle() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                // console.log(xhr.responseText)
                let article = JSON.parse(xhr.responseText);
                vm.$data.aaa = article;
                console.log(article)
            }

            xhr.open("get", "./php/atMain.php", true);
            xhr.send(null);
        },
    },
    mounted() {
        this.topArticle();

    },
    computed: {
        articleLeft() {
            return this.aaa.slice(0, 4);

        },
        articleCenter() {
            return this.aaa.slice(4, 8);
        },
        articleRight() {
            return this.aaa.slice(8, 9);
        },
    },


})
let vm1 = new Vue({
    el: "#atBox",
    data: {
        box: [{
            img: "./img/atMain/ta.png",
            class: "家庭關係"
        }, {
            img: "./img/atMain/ta.png",
            class: "人際關係"
        }, {
            img: "./img/atMain/ta.png",
            class: "壓力失落創傷"
        }, {
            img: "./img/atMain/ta.png",
            class: "自我探索"
        }, {
            img: "./img/atMain/ta.png",
            class: "伴侶感情"
        }],
    },
    methods: {
        aaa(data) {
            vm3.$data.artType = data;

        },
    },
    mounted() {},
})

let vm3 = new Vue({
    el: "#atClassTitle",
    data: {
        bArticle: [],
        artType: "2",
    },
    methods: {
        bottomArticle() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                let article = JSON.parse(xhr.responseText);
                vm3.$data.bArticle = article;
                console.log(vm3.$data.bArticle)
            }

            xhr.open("get", "./php/atMain_one.php", true);
            xhr.send(null);
        },


        comIs(index) {
            return index % 2 == 0 ? 'duri' : 'duri'
        },

        filters() {
            return this.bArticle.filter(item => item.artTypeNO == this.artType)
        },

    },
    beforeMount() {
        this.bottomArticle();
    },
    computed: {

    },
    mounted() {},
})