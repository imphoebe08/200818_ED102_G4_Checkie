/*------test------*/
$(function() {
    $(".test_button").click(function() {
        $("#form").css("display", "block")
    })

    /*------導覽列------*/
    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("is-active");
        $(".navbar__menu").toggleClass("navbar__menu--active");
        $(".top").toggleClass("top--open");
    });

    $(window).on("resize", function() {
        if ($(window).width() > 768) {
            $(".navbar__menu").removeClass("navbar__menu--active");
        }
    });

    $("test_button").click(function() {
        $("#form").css("display", "block")
    })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();


        if (scroll >= 80) {
            $(".top").addClass("top--scrolling");
        } else {
            $(".top").removeClass("top--scrolling");

        }


    });


});







//------------signin&register------------//

Vue.component('signin-component', {
    template: `
    <div class="signup_overlay signup_overlay-none" id="signup_overlay">
                    <div class="container" id="container">
                        <span class="container_close" @click="close">&times;</span>
                        
                        <div class="form-container sign-up-container sign-up-container-for-media">
                            <form action="register.php" method="post" class="form" @submit.prevent="register(false,1)" v-if="form_show">
                                <h3>加入會員</h3>
                                <span>請填寫以下資訊完成註冊</span>
                                <input type="text" name="newMemName" id="newMemName" v-model.trim="newMemName" placeholder="姓名"  maxlength="10"  />
                                <input type="email" name="newMemId" id="newMemId" v-model.trim="newMemId" placeholder="Email"/>
                                <input type="password" name="newMemPsd" id="newMemPsd" v-model.trim="newMemPsd" placeholder="密碼" />
                                <input type="password" name="CnewMemPsd" id="CnewMemPsd" v-model.trim="CnewMemPsd" placeholder="確認密碼" />
                                <div class="error_text" id="error_text"></div>
                                <button name="register" >註冊</button>
                                <div class="moblie_switch" @click="signIn">登入會員</div>
                            </form>
                            <form method="POST" @submit.prevent="finish" v-if="!form_show">
                                <h1>會員認證</h1>
                                <input type="text" id="vCode_input" placeholder="會員認證碼" v-model.trim="vCode_input">
                                <a href="javascript:void:(0)" @click="register(false,2)">再次傳送驗證信</a>
                                <button class="finish_btn">會員確認</button>
                            </form>
                        </div>
                        <div class="form-container sign-in-container">
                            <form action="login.php" method="post" class="sign-in-form" @submit.prevent="login">
                                <h3>登入會員</h3>
                                <span>請輸入您的帳號密碼</span>
                                <input type="text" id="memId" name="memId" v-model.trim="memId" placeholder="Email" />
                                <input type="password" id="memPsd" name="memPsd" v-model.trim="memPsd" placeholder="密碼" />
                                <button id="login" >登入</button>
                                <div class="moblie_switch" @click="signUp">註冊會員</div>
                            </form>
                            <center><button class="forgetpwd" @click="forgetpwd">忘記密碼？</button></center>
                        </div>

                        <div class="overlay-container">
                            <div class="overlay">
                                <div class="overlay-panel overlay-left">
                                    <h3>歡迎回來！</h3>
                                    <p>登入會員享有更多服務</p>
                                    <button class="ghost" @click="signIn">登入會員</button>
                                </div>
                                <div class="overlay-panel overlay-right">
                                    <h3>歡迎加入Checkie！</h3>
                                    <p>為生命帶來一些新的可能，<br>只需簡單完成申請</p>
                                    <button class="ghost" @click="signUp">加入會員</button>
                                </div>
                            </div>
                        </div>
                        
                        <form action="#" @submit.prevent="forget">
                            <div class="forgetpwd_from forgetpwd_from-none" id="forgetpwd_from">
                                <span class="container_close" @click="forgetpwd_close">&times;</span>
                                <h2>忘記密碼？</h2>
                                <input class="forget" type="email" placeholder="Email" pattern=".+@gmail.com" v-model="forgetEmail" id="forgetEmail">
                                <p id="errorText">如無法登入或忘記密碼，請輸入Email重新設定密碼。</p>
                                <button>確認</button>
                            </div>
                        </form>
                        
                    </div>
    </div>`,
    data: function() {
        return {
            newMemId: "",
            newMemPsd: "",
            newMemName: "",
            CnewMemPsd: "",
            memId: "",
            memPsd: "",
            memName: "",
            numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            vCode: "",
            vCode_input: "",
            form_show: true,
            checkId: "",
            forgetEmail: "",

        }
    },
    mounted() {
        axios.get('./php/checkLogin.php')
            .then(res => {
                signin = document.getElementById("signin");
                if (!!res.data) {
                    signin.innerText = "登出";
                } else {
                    signin.innerText = "登入";
                }
            })
    },
    methods: {
        forget() {
            let data = `newMemId=${this.forgetEmail}`,
                url = "./php/checkMemId.php",
                errorText = document.getElementById("errorText");
            axios.post(url, data).then(res => {
                this.checkId = res.data;
            }).then(() => {
                // 清空錯誤訊息
                // 密碼與確認密碼需相同
                // Email 帳號錯誤
                if (this.forgetEmail.substr(-10).toLowerCase().indexOf("@gmail.com") == false && this.forgetEmail.length >= 16 && this.checkId == "已註冊會員") {
                    login.$children[0].error("#forgetEmail", false);
                    // 成功傳email
                    let href = location.href,

                        data = `forgetEmail=${this.forgetEmail}&href=${href}`,
                        url = "./php/forgetEmail.php";
                    this.ajaxPost(url, data);
                    alert("認證信件已寄出");
                    errorText.innerHTML = "認證信件已寄出";
                } else if (this.forgetEmail.length < 16 && this.forgetEmail.length > 10) {
                    errorText.innerHTML = "Email 帳號錯誤 ";
                    login.$children[0].error("#forgetEmail", true);
                } else if (this.checkId == "ok") {
                    login.$children[0].error("#forgetEmail", true);
                    errorText.innerHTML = "未註冊會員";
                } else {
                    errorText.innerHTML = "Email 需使用 @gmail.com 格式";
                    login.$children[0].error("#forgetEmail", true);

                };

            })
        },
        randArr(num, arr) {
            for (var i = 0; i < num; i++) {
                var iRand = parseInt(num * Math.random());
                var temp = arr[i];
                arr[i] = arr[iRand];
                arr[iRand] = temp;
            }
            return arr;
        },
        error(who, num) {
            if (num) {
                $(who).addClass("error_border");
                $(who).addClass("error");
                setTimeout(function() {
                    $(who).removeClass("error");
                }, 300)
            } else {
                $(who).removeClass("error_border");
            }
        },
        login() {
            //取回登入者暱稱&會員中心進入
            let xhr = new XMLHttpRequest(),
                signup = document.getElementById("signup"),
                signin = document.getElementById("signin"),
                signup_overlay = document.getElementById("signup_overlay");

            xhr.onload = function() {
                if (xhr.status == 200) {
                    let member = JSON.parse(xhr.responseText);
                    console.log(member)
                    if (member.memId === undefined) {
                        login.$children[0].error("#memId,#memPsd", true)
                    } else {
                        signup.innerText = member.memName;
                        signin.innerText = "登出";
                        signup_overlay.classList.add("signup_overlay-none");
                        // 垃圾功能
                        login.$children[0].$data.memId = "";
                        login.$children[0].$data.memPsd = "";
                        window.location.href = './meMain.html';
                    }
                } else {
                    alert(xhr.status);
                }
            }

            xhr.open("post", "./php/login.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info = `memId=${this.memId}&memPsd=${this.memPsd}`;
            xhr.send(data_info);

            axios.get('./php/checkLogin.php')
                .then(res => {
                    signin = document.getElementById("signin");
                    if (!!res.data) {
                        signin.innerText = "登出";
                    } else {
                        signin.innerText = "登入";
                    }
                })
        },

        /*----老師靠你了----*/
        register(aaa, num) {
            // 產生驗證碼
            this.randArr(this.numArr.length, this.numArr);
            this.vCode = `${this.numArr[0]}${this.numArr[1]}${this.numArr[2]}${this.numArr[3]}`;
            let error_text = document.getElementById("error_text"),
                i = 0,
                data = `newMemId=${this.newMemId}`,
                url = "./php/checkMemId.php";
            axios.post(url, data).then(res => {
                this.checkId = res.data;
            }).then(() => {
                // 清空錯誤訊息
                error_text.innerHTML = "";
                // 密碼與確認密碼需相同
                if (this.newMemPsd == this.CnewMemPsd && this.newMemPsd.length >= 6 && this.newMemPsd.length <= 18 && this.newMemPsd.match(/([0-9])/g) && this.newMemPsd.match(/([a-z]|[A-Z])/g)) {
                    login.$children[0].error("#CnewMemPsd,#newMemPsd", false);
                    i++;
                } else if (this.newMemPsd == "") {
                    login.$children[0].error("#CnewMemPsd,#newMemPsd", true);

                } else if (this.newMemPsd.length < 6 || this.newMemPsd.length > 18) {
                    login.$children[0].error("#CnewMemPsd,#newMemPsd", true);
                    error_text.innerHTML += "密碼長度需在6~18之間 <br>";
                } else if (this.newMemPsd != this.CnewMemPsd) {
                    login.$children[0].error("#CnewMemPsd,#newMemPsd", true);
                    error_text.innerHTML += "確認密碼與密碼不相符 <br>";
                } else {
                    login.$children[0].error("#CnewMemPsd,#newMemPsd", true);
                    error_text.innerHTML += "密碼需包含英文加數字 <br>";
                };
                // Email 帳號錯誤
                if (this.newMemId.substr(-10).toLowerCase().indexOf("@gmail.com") == false && this.newMemId.length >= 16 && this.checkId != "已註冊會員") {
                    login.$children[0].error("#newMemId", false);
                    i++
                } else if (this.newMemId.length < 16 && this.newMemId.length > 10) {
                    error_text.innerHTML += "Email 帳號錯誤 <br>";
                    login.$children[0].error("#newMemId", true);
                } else if (this.checkId == "已註冊會員") {
                    login.$children[0].error("#newMemId", true);
                    error_text.innerHTML += "已註冊會員 <br>";
                } else {
                    error_text.innerHTML += "Email 需使用 @gmail.com 格式 <br>";
                    login.$children[0].error("#newMemId", true);

                };
                // 姓名不可含有數字
                if (this.newMemName.match(/([0-9])/g)) {
                    login.$children[0].error("#newMemName", true);
                    error_text.innerHTML += "姓名不可含有數字 <br>";
                } else if (this.newMemName == "") {
                    login.$children[0].error("#newMemName", true);
                } else {
                    login.$children[0].error("#newMemName", false);
                    i++;
                };
                if (i == 3) {
                    let data = `newMemId=${this.newMemId}&vCode=${this.vCode}`,
                        url = "./php/email.php";
                    this.ajaxPost(url, data);
                    this.form_show = aaa;
                };
                if (num == 2) {
                    alert("email 發送成功");
                };


            })




        },
        ajaxPost(url, dataInfo) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);

                } else {
                    alert(xhr.responseText);
                }
            };
            xhr.open("post", url, true);
            xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
            xhr.send(dataInfo);
        },
        finish() {
            if (this.vCode_input == this.vCode) {
                let data = `newMemId=${this.newMemId}&newMemPsd=${this.newMemPsd}&newMemName=${this.newMemName}`,
                    url = "./php/register.php";
                this.ajaxPost(url, data);
                this.close();
                document.getElementById("signup").innerHTML = this.newMemName;
                document.getElementById("signin").innerHTML = '登出';
                this.newMemId = "";
                this.newMemPsd = "";
                this.newMemName = "";
                this.CnewMemPsd = "";
                this.vCode = "";
                this.vCode_input = "";
                this.form_show = true;
                // 跳轉
                location.href = "./home.html";
            } else {
                // 錯誤時表格跳動
                this.error("#vCode_input", true);
            }

        },
        signIn() {
            let container = document.getElementById('container');

            container.classList.remove("right-panel-active");

        },

        signUp() {
            let container = document.getElementById('container');

            container.classList.add("right-panel-active");

        },

        close() {
            let signup_overlay = document.getElementById("signup_overlay");

            signup_overlay.classList.add("signup_overlay-none");
        },

        forgetpwd() {
            let forgetpwd_from = document.getElementById("forgetpwd_from");
            forgetpwd_from.classList.remove("forgetpwd_from-none");
        },

        forgetpwd_close() {
            let forgetpwd_from = document.getElementById("forgetpwd_from");
            forgetpwd_from.classList.add("forgetpwd_from-none");

        },
    }

});



let login = new Vue({
    el: '#header',
    mounted() {
        this.getLoginInfo();

    },

    data: {
        psd_block: false,
        forgetPsd: "",
        forgetCPsd: "",
    },

    methods: {
        psdUpdate() {
            // if (this.forgetPsd == this.forgetCPsd) {
            //     login.$children[0].error("#forgetPsd,#forgetCPsd", false);
            //     console.log("suss")

            // } else {
            //     console.log("fail")
            //     login.$children[0].error("#forgetPsd,#forgetCPsd", true);

            // }
            var forgetText = document.getElementById("forgetText");
            if (this.forgetPsd == this.forgetCPsd && this.forgetPsd.length >= 6 && this.forgetPsd.length <= 10 && this.forgetPsd.match(/([0-9])/g) && this.forgetPsd.match(/([a-z]|[A-Z])/g)) {
                login.$children[0].error("#forgetCPsd,#forgetPsd", false);
                this.psd_block = false;
                var infor = location.search.substr(1);

                axios.get(`./psdUpdate.php?memId=${infor}&forgetPsd=${this.forgetPsd}`).then(res => {
                    console.log(res);
                })
                alert("密碼更改成功");
            } else if (this.forgetPsd == "") {
                login.$children[0].error("#forgetCPsd,#forgetPsd", true);

            } else if (this.forgetPsd.length < 6 || this.forgetPsd.length > 10) {
                login.$children[0].error("#forgetCPsd,#forgetPsd", true);
                forgetText.innerHTML = "密碼長度需在6~10之間 <br>";
            } else if (this.forgetPsd != this.forgetCPsd) {
                login.$children[0].error("#forgetCPsd,#forgetPsd", true);
                forgetText.innerHTML = "確認密碼與密碼不相符 <br>";
            } else {
                login.$children[0].error("#forgetCPsd,#forgetPsd", true);
                forgetText.innerHTML = "密碼需包含英文加數字 <br>";
            };
        },
        psdUpdate_close() {
            $("#forgetForm").css("display", "none");

        },
        nav_login() {
            if (event.target.innerHTML == "登入" || event.target.innerHTML == "線上諮商") {
                $("#signup_overlay").removeClass("signup_overlay-none");
                $("#signup_overlay").fadeIn(300);
                $("#container").removeClass("right-panel-active");
            } else {
                //-----------------------------回Server端做登出
                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        document.getElementById("signup").innerHTML = '加入會員';
                        document.getElementById("signin").innerHTML = '登入';

                    } else {
                        alert(xhr.status);
                    }

                }
                xhr.open("get", "./php/logout.php", true);
                xhr.send(null);
            }
        },
        nav_register() {
            if (event.target.innerHTML == "加入會員") {
                $("#signup_overlay").removeClass("signup_overlay-none");
                $("#signup_overlay").fadeIn(300);
                $("#container").addClass("right-panel-active");
            } else {
                //location.href = "../home.html";
                location.href = "./meMain.html";
            }
        },
        getLoginInfo() {
            var infor = location.search;
            if (infor.length > 20) {
                $("#forgetForm").css("display", "block");
                // infor.substring(1);
            } else {

                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    member = JSON.parse(xhr.responseText);
                    console.log(member);
                    if (member.memId) {
                        signup.innerText = member.memName;
                        signin.innerText = "登出";
                    }
                }
                xhr.open("get", "./php/getLoginInfo.php", true);
                xhr.send(null);
            }
        },
    },

});
//------------test------------//

$(function() {
    // 出場
    $("#qsBox>div.askContent:nth-child(1)").css("display", "flex");
    setTimeout(function() {
        $("#qsBox>div.askContent:nth-child(2)").css("display", "flex");
        setTimeout(function() {
            $("#qsBox>div.ansButton--start").css("display", "block");

        }, 500)
    }, 500)

});

// Setp Indicator

Vue.component('steps', {
    props: ['num'],
    template: `
    <div class="step step2">
    <div class="step-icon">{{num}}</div>
    </div>`,
    methods: {

    },
});

Vue.component('lines', {
    template: `
    <div class="indicator-line"></div>`,
    methods: {

    },
});

Vue.component('ask-content', {
    props: ['questions'],
    template: `
    <div class="askContent" style="display: none;">
    <img src="" class="askPic" alt=""><p class="qsAsk">{{questions}}</p>
    </div>`,
    methods: {

    },
});

Vue.component('ans-content', {
    data() {
        return {

        }
    },
    props: ['answers'],
    template: `
    <div class="ansContent" style="display: none;" >
    <p class="qsAns">{{answers}}</p><img src="" class="ansPic" alt="">
    </div>`,

    methods: {

    },
    computed: {

    }
});

Vue.component('ans-buttons-grades', {
    props: ["name"],
    data() {
        return {
            now_Q: 2,
            sub_value: 0,
            id: [this.name + "-1", this.name + "-2", this.name + "-3", this.name + "-4", this.name + "-5"],
        };
    },
    template: `
    <div class="ansButtons-grades " style="display: none;">
    <label :for="id[0]" class="qsQrades">1</label>
    <label :for="id[1]" class="qsQrades">2</label>
    <label :for="id[2]" class="qsQrades">3</label>
    <label :for="id[3]" class="qsQrades">4</label>
    <label :for="id[4]" class="qsQrades">5</label>
    <input :name="name" :id="id[0]" type="radio"  value="1"  @click="submit">
    <input :name="name" :id="id[1]" type="radio"  value="2"  @click="submit">
    <input :name="name" :id="id[2]" type="radio"  value="3"  @click="submit">
    <input :name="name" :id="id[3]" type="radio"  value="4"  @click="submit">
    <input :name="name" :id="id[4]" type="radio"  value="5"  @click="submit">
    </div>`,
    methods: {
        // 函式先執行
        submit(event) {
            var scrollHeight = $('#body').prop("scrollHeight");
            event.target.parentNode.style.display = 'none';

            if (event.target.name == "q11") {
                event.target.parentNode.nextElementSibling.style.display = 'flex';
                document.getElementById("qsBox").scrollTop = document.getElementById("qsBox").scrollHeight;
                setTimeout(function() {
                    event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'block';
                    document.getElementById("qsBox").scrollTop = document.getElementById("qsBox").scrollHeight;
                }, 500)
            } else {
                event.target.parentNode.style.display = 'none';
                // console.log(event.target.parentNode.nextElementSibling );
                event.target.parentNode.nextElementSibling.style.display = 'flex';
                document.getElementById("qsBox").scrollTop = document.getElementById("qsBox").scrollHeight;
                setTimeout(function() {
                    event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
                    var form_H = $("#form>form").height();
                    var box_H = $("#qsBox").height();
                    if (box_H > form_H * 0.8) {
                        document.getElementById("qsBox");
                        qsBox.style.height = "100%";
                    };
                    document.getElementById("qsBox").scrollTop = document.getElementById("qsBox").scrollHeight;

                    // mark~



                    setTimeout(function() {
                        event.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
                        document.getElementById("qsBox").scrollTop = document.getElementById("qsBox").scrollHeight;

                    }, 500)
                }, 500)
            };

            this.sub_value = event.target.value;
            this.$emit('submit_value', this.sub_value, this.name);
        },
    },
});


// let vm0 = new Vue({
//     el: "#form",
//     data: {
//         now_Q: 0,
//         display: false,
//         count: 0,
//         finish: false,
//         a1: {
//             content: ""
//         },
//         a2: {
//             content: ""
//         },
//         a3: {
//             content: ""
//         },
//         a4: {
//             content: ""
//         },
//         a5: {
//             content: ""
//         },
//         a6: {
//             content: ""
//         },
//         a7: {
//             content: ""
//         },
//         a8: {
//             content: ""
//         },
//         a9: {
//             content: ""
//         },
//         a10: {
//             content: ""
//         },
//         a11: {
//             content: ""
//         },


//     },
//     methods: {
//         change_line() {
//             $(".step-icon").eq(this.now_Q).css("background", "#FFA492");
//             if (this.now_Q == 0) {

//             } else {
//                 $(".indicator-line").eq(this.now_Q - 1).css("background", "#FFA492");
//             }
//         },
//         form_start() {
//             this.change_line();
//             this.now_Q++;
//             var scrollHeight = $('#body').prop("scrollHeight");
//             event.target.style.display = 'none';
//             event.target.parentNode.nextElementSibling.style.display = 'flex';
//             var e = event.target;
//             setTimeout(function () {
//                 e.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
//                 setTimeout(function () {
//                     e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'flex';
//                     setTimeout(function () {
//                         e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';

//                     }, 500)
//                 }, 500)
//             }, 500)

//         },
//         changeA(data, name) {
//             this.change_line();
//             this.now_Q++
//             switch (name) {
//                 case "q1":
//                     this.a1.content = data;

//                     break;
//                 case "q2":
//                     this.a2.content = data;

//                     break;
//                 case "q3":
//                     this.a3.content = data;

//                     break;
//                 case "q4":
//                     this.a4.content = data;
//                     break;
//                 case "q5":
//                     this.a5.content = data;
//                     break;
//                 case "q6":
//                     this.a6.content = data;
//                     break;
//                 case "q7":
//                     this.a7.content = data;
//                     break;
//                 case "q8":
//                     this.a8.content = data;
//                     break;
//                 case "q9":
//                     this.a9.content = data;
//                     break;
//                 case "q10":
//                     this.a10.content = data;
//                     break;
//                 case "q11":
//                     this.a11.content = data;
//                     break;


//             }




//         },

//         skip() {
//             $("#form").css("display", "none");
//         },
//         finish_form() {
//             $("#form").css("display", "none");
//         }
//     },
//     computed: {

//     },
//     created() {
//         var qsBox = document.getElementById("qsBox");
//         qsBox.scrollTop = qsBox.scrollHeight;

//     },
// })

let vm0 = new Vue({
    el: "#form",
    data: {
        testStart: true,
        testOver: false,
        now_Q: 0,
        display: false,
        count: 0,
        finish: false,
        member: false,
        a1: {
            content: ""
        },
        a2: {
            content: ""
        },
        a3: {
            content: ""
        },
        a4: {
            content: ""
        },
        a5: {
            content: ""
        },
        a6: {
            content: ""
        },
        a7: {
            content: ""
        },
        a8: {
            content: ""
        },
        a9: {
            content: ""
        },
        a10: {
            content: ""
        },
    },
    methods: {
        change_line() {
            $(".step-icon").eq(this.now_Q).css("background", "#FFA492");
            if (this.now_Q == 0) {

            } else {
                $(".indicator-line").eq(this.now_Q - 1).css("background", "#FFA492");
            }
        },
        form_start() {
            this.change_line();
            this.now_Q++;
            var scrollHeight = $('#body').prop("scrollHeight");
            event.target.style.display = 'none';
            event.target.parentNode.nextElementSibling.style.display = 'flex';
            var e = event.target;
            setTimeout(function() {
                e.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
                setTimeout(function() {
                    e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'flex';
                    setTimeout(function() {
                        e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';

                    }, 500)
                }, 500)
            }, 500)

        },
        changeA(data, name) {
            this.change_line();
            this.now_Q++
                switch (name) {
                    case "q1":
                        this.a1.content = data;
                        break;
                    case "q2":
                        this.a2.content = data;

                        break;
                    case "q3":
                        this.a3.content = data;
                        break;
                    case "q4":
                        this.a4.content = data;
                        break;
                    case "q5":
                        this.a5.content = data;
                        break;
                    case "q6":
                        this.a6.content = data;
                        break;
                    case "q7":
                        this.a7.content = data;
                        break;
                    case "q8":
                        this.a8.content = data;
                        break;
                    case "q9":
                        this.a9.content = data;
                        break;
                    case "q10":
                        this.a10.content = data;
                        break;
                }
        },

        skip() {
            $("#form").css("display", "none");
            this.testStart = true;
            this.testOver = false;
        },
        finish_form() {
            // $("#form").css("display", "none");
            this.testStart = false;
            this.testOver = true;
            let num = parseInt(this.a1.content) + parseInt(this.a2.content) + parseInt(this.a3.content) +
                parseInt(this.a4.content) + parseInt(this.a5.content) + parseInt(this.a6.content) + parseInt(this.a7.content) + parseInt(this.a8.content) + parseInt(this.a9.content) + parseInt(this.a10.content);
            $('.count').text(100 - num * 2);
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            axios.get('./php/insertTestResult.php', {
                params: {
                    'num1': parseInt(this.a1.content) + parseInt(this.a2.content),
                    'num2': parseInt(this.a3.content) + parseInt(this.a4.content),
                    'num3': parseInt(this.a5.content) + parseInt(this.a6.content),
                    'num4': parseInt(this.a7.content) + parseInt(this.a8.content),
                    'num5': parseInt(this.a9.content) + parseInt(this.a10.content)
                }
            }).then((res) => {
                console.log(res.data);
            })

        },
        closeTestResult() {
            $("#form").css("display", "none");
            this.testStart = true;
            this.testOver = false;
        },
        closeTestSignIn() {
            $("#form").css("display", "none");
            this.testStart = true;
            this.testOver = false;
            $("#signup_overlay").removeClass("signup_overlay-none");
            $("#signup_overlay").fadeIn(300);
            $("#container").removeClass("right-panel-active");
        }
    },
    computed: {},
    created() {
        var qsBox = document.getElementById("qsBox");
        qsBox.scrollTop = qsBox.scrollHeight;
        axios.get('./php/checkLogin.php')
            .then(res => this.member = !!res.data)
    },
    updated() {
        axios.get('./php/checkLogin.php')
            .then(res => this.member = !!res.data)
    },
    mounted() {
        axios.get('./php/checkLogin.php')
            .then(res => this.member = !!res.data)
    }
})