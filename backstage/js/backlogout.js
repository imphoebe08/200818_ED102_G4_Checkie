 new Vue({
     el: '#backheader',
     mounted() {
         this.getbackLoginInfo();

     },

     data: {

     },

     methods: {

         back_logout() {
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
                 xhr.open("get", "./php/backlogout.php", true);
                 xhr.send(null);
             }
         },

         getbackLoginInfo() {

             let xhr = new XMLHttpRequest();
             admName = document.getElementById("admName"),
                 xhr.onload = function() {
                     admin = JSON.parse(xhr.responseText);
                     console.log(admin);
                     if (admin.admId) {
                         admName.innerText = admin.admName;
                     }
                 }
             xhr.open("get", "./php/backgetLoginInfo.php", true);
             xhr.send(null);

         },


     },
 });