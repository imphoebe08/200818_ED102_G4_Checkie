$(function(){
    // 出場
    $("#qsBox>div.askContent:nth-child(1)").css("display","flex");
    setTimeout(function(){
        $("#qsBox>div.askContent:nth-child(2)").css("display","flex");
        setTimeout(function(){
        $("#qsBox>div.ansButton--start").css("display","block");

        },500)
    },500)

})
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
    computed:{

    }
});

Vue.component('ans-buttons-grades', {
    props:["name"],
    data(){
        return {
            sub_value:0,
            id:[this.name+"-1",this.name+"-2",this.name+"-3",this.name+"-4",this.name+"-5"],
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
        submit(event){
            var scrollHeight = $('#body').prop("scrollHeight");
            event.target.parentNode.style.display = 'none';

            if(event.target.name=="q11"){
            event.target.parentNode.nextElementSibling.style.display = 'flex';
            document.getElementById("qsBox").scrollTop=document.getElementById ("qsBox").scrollHeight;
            setTimeout(function(){
                event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'block';
                document.getElementById("qsBox").scrollTop=document.getElementById ("qsBox").scrollHeight;
                },500)
            }else{
                event.target.parentNode.style.display = 'none';
                // console.log(event.target.parentNode.nextElementSibling );
            event.target.parentNode.nextElementSibling.style.display = 'flex';
            document.getElementById("qsBox").scrollTop=document.getElementById ("qsBox").scrollHeight;
            setTimeout(function(){
            event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
            var form_H = $("#form>form").height();
            var box_H = $("#qsBox").height();
            if(box_H > form_H){
                document.getElementById("qsBox");
                qsBox.style.height="100%";
            };
            document.getElementById("qsBox").scrollTop=document.getElementById ("qsBox").scrollHeight;

            // mark~



                setTimeout(function(){
                    event.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
                    document.getElementById("qsBox").scrollTop=document.getElementById ("qsBox").scrollHeight;

                    },500)
            },500)
            };
            
            this.sub_value=event.target.value;
            this.$emit('submit_value',this.sub_value,this.name);
        },
    },
});


let vm0 = new Vue({
    el:"#form",
    data:{
        display:false,
        count:0,
        finish:false,
        a1:{content:""},
        a2:{content:""},
        a3:{content:""},
        a4:{content:""},
        a5:{content:""},
        a6:{content:""},
        a7:{content:""},
        a8:{content:""},
        a9:{content:""},
        a10:{content:""},
        a11:{content:""},
        
        
    },
    methods:{
        form_start(){
            var scrollHeight = $('#body').prop("scrollHeight");
            event.target.style.display = 'none';
            event.target.parentNode.nextElementSibling.style.display = 'flex';
            var e = event.target;
            setTimeout(function(){
                e.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
                setTimeout(function(){
                    e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'flex';
                    setTimeout(function(){
                        e.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
                        
                    },500)
                },500)
            },500)

        },
        changeA(data,name){
            
            switch(name){
                case "q1":
                    this.a1.content=data;
                    
                    break;
                case "q2":
                    this.a2.content=data;
                    
                    break;
                case "q3":
                    this.a3.content=data;
                   
                    break;
                case "q4":
                    this.a4.content=data;
                    break;
                case "q5":
                    this.a5.content=data;
                    break;
                case "q6":
                    this.a6.content=data;
                    break;
                case "q7":
                    this.a7.content=data;
                    break;
                case "q8":
                    this.a8.content=data;
                    break;
                case "q9":
                    this.a9.content=data;
                    break;
                case "q10":
                    this.a10.content=data;
                    break;
                case "q11":
                this.a11.content=data;
                break;
                

            }

            


        },
        
        skip(){
            $("#form").css("display","none");
        },
        finish_form(){
            $("#form").css("display","none");
        }
    },
    computed:{
        
    },
    created() {
        var qsBox = document.getElementById("qsBox");
            qsBox.scrollTop = qsBox.scrollHeight;
        
    },
})