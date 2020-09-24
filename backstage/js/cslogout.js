 new Vue({
     el: '#csbackheader',
     mounted() {
         this.getcsLoginInfo();

     },

     data: {
         csPic: "",
     },

     methods: {

         cs_logout() {
             if (event.target.innerHTML == "登出") {
                 $("#signup_overlay").addClass("signup_overlay-none");

             } else {
                 //-----------------------------回Server端做登出
                 let xhr = new XMLHttpRequest();
                 xhr.onload = function() {
                     if (xhr.status == 200) {
                         location.href = "../index.html";

                     } else {
                         alert(xhr.status);
                     }

                 }
                 xhr.open("get", "./php/cslogout.php", true);
                 xhr.send(null);
             }
         },

         getcsLoginInfo() {

             let xhr = new XMLHttpRequest();
             csName = document.getElementById("csName"),
                 //csPic = document.getElementById("csPic"),
                 xhr.onload = function() {
                     counselor = JSON.parse(xhr.responseText);
                     console.log(counselor);
                     if (counselor.csId) {
                         csName.innerText = counselor.csName;
                         //csPic.src = counselor.csPic;
                     }
                 }
             xhr.open("get", "./php/csgetLoginInfo.php", true);
             xhr.send(null);

         },


     },
 });