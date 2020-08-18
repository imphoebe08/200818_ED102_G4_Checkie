//acMain_categorySelector-分類選單

new Vue({
    el:"#acMain",

    data:{
        title:["精選活動","講座","療癒","戶外","藝文"],
        now_title:"精選活動",
    },
    methods: {
        category_click(data){
            this.now_title=this.title[data];
        }
    },
})