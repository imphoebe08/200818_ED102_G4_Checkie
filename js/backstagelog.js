$(function() {
    $("#signup_overlay").hide();

    $("#signin").click(function() {
        $("#signup_overlay").removeClass("signup_overlay-none");
        $("#signup_overlay").fadeIn(300);
        container.classList.remove("right-panel-active");
    });
});


Vue.component('backlog-component', {
    template: `
            <div class="signup_overlay signup_overlay-none" id="signup_overlay">
                            <div class="container" id="container">
                                <span class="container_close" @click="close">&times;</span>
                                
                                <div class="form-container sign-up-container sign-up-container-for-media">
                                    <form action="" method="post" class="sign-in-form" @submit.prevent="adminlogin">
                                        <h3>管理者登入</h3>
                                        <span>請輸入您的帳號密碼</span>
                                        <input type="text" id="admId" name="admId" v-model.trim="admId" placeholder="帳號" />
                                        <input type="password" name="admPsn" id="admPsn" v-model.trim="admPsn" placeholder="密碼" />
                                        <div class="error_text" id="error_text"></div>
                                        <button id="adminlogin">登入</button>
                                        <div class="moblie_switch" @click="signIn">切換至諮商師登入</div>
                                    </form>
                                </div>
                                <div class="form-container sign-in-container">
                                    <form action="backlogin.php" method="post" class="sign-in-form" @submit.prevent="cslogin">
                                        <h3>諮商師登入</h3>
                                        <span>請輸入您的帳號密碼</span>
                                        <input type="text" id="csId" name="csId" v-model.trim="csId" placeholder="帳號" />
                                        <input type="password" id="csPsd" name="csPsd" v-model.trim="csPsd" placeholder="密碼" />
                                        <button id="cslogin" >登入</button>
                                        <div class="moblie_switch" @click="signUp">切換至管理者登入</div>
                                        
                                    </form>
                                   
                                </div>

                                <div class="overlay-container">
                                    <div class="overlay">
                                        <div class="overlay-panel overlay-left">
                                            <h3>切換至諮商師</h3>
                                            <button class="ghost" @click="signIn">諮商師登入</button>
                                        </div>
                                        <div class="overlay-panel overlay-right">
                                            <h3>切換至管理者</h3>
                                            <button class="ghost" @click="signUp">管理者登入</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
            </div>`,
    data: function() {
        return {
            admId: "",
            admPsn: "",
            admName: "",
            csId: "",
            csPsd: "",
            csName: "",
        }
    },
    methods: {


        signIn() {
            let container = document.getElementById('container');
            container.classList.remove("right-panel-active");

        },

        signUp() {
            let container = document.getElementById('container');

            container.classList.add("right-panel-active");
            container.classList.add("sign-up-container-for-media");

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


        adminlogin() {
            //取回管理者資料
            let xhr = new XMLHttpRequest(),
                signup_overlay = document.getElementById("signup_overlay");

            xhr.onload = function() {
                if (xhr.status == 200) {
                    let admin = JSON.parse(xhr.responseText);
                    console.log(admin)
                    if (admin.admId === undefined) {
                        admin.$children[0].error("#admId,#admPsn", true)
                    } else {
                        location.href = "./backstage/bgHome.html";
                        signup_overlay.classList.add("signup_overlay-none");
                        admin.$children[0].$data.admId = "";
                        admin.$children[0].$data.admPsn = "";

                    }
                } else {
                    alert(xhr.status);
                }
            }

            xhr.open("post", "./php/backlogin.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info = `admId=${this.admId}&admPsn=${this.admPsn}`;
            xhr.send(data_info);

        },

        cslogin() {
            //取回諮商師資料
            let xhr = new XMLHttpRequest(),
                signup_overlay = document.getElementById("signup_overlay");

            xhr.onload = function() {
                if (xhr.status == 200) {
                    let counselor = JSON.parse(xhr.responseText);
                    console.log(counselor)
                    if (counselor.csId === undefined) {
                        counselor.$children[0].error("#csId,#csPsd", true)
                    } else {
                        //跳轉到諮商師頁面(待改)
                        location.href = "./backstage/csHome.html";
                        signup_overlay.classList.add("signup_overlay-none");
                        counselor.$children[0].$data.csId = "";
                        counselor.$children[0].$data.csPsd = "";

                    }
                } else {
                    alert(xhr.status);
                }
            }

            xhr.open("post", "./php/cslogin.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info = `csId=${this.csId}&csPsd=${this.csPsd}`;
            xhr.send(data_info);

        },
    }

});

new Vue({
    el: '#welcome',
    mounted() {
        this.getbackLoginInfo();
        this.getcsLoginInfo();

    },

    data: {

    },

    methods: {

        getbackLoginInfo() {

            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                admin = JSON.parse(xhr.responseText);
                console.log(admin);
                if (admin.admId) {
                    location.href = "./backstage/bgHome.html";
                }
            }
            xhr.open("get", "./php/backgetLoginInfo.php", true);
            xhr.send(null);

        },

        getcsLoginInfo() {

            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                counselor = JSON.parse(xhr.responseText);
                console.log(counselor);
                if (counselor.csId) {
                    location.href = "./backstage/csHome.html";
                }
            }
            xhr.open("get", "./php/csgetLoginInfo.php", true);
            xhr.send(null);

        },
    }
});