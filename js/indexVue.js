    // vue
        
        // 關於我們
        new Vue({
            el:"#inAbout",
            
            data:{
                imgUrl:"./img/index/inAbout/rock.jpg",
                select: false,
                about_nowNum:0,
                about_Num2:1,
                about_Num3:2,
                about:[
                {area: '北', place: '臺北市大安區忠孝東路三段5樓之2',Weekdays:"星期一-星期五 10AM-10PM",Weekend:"星期六-星期日 10AM-9PM",tel:"02-1109-8885"},
                {area: '中', place: '台中',Weekdays:"星期二-星期五 11AM-10PM",Weekend:"星期六 10AM-9PM",tel:"04-1109-8885"},
                {area: '南', place: '高雄',Weekdays:"星期一-星期五 11AM-10PM",Weekend:"星期六-星期日 10AM-9PM",tel:"07-1109-8885"},
            ],
                    
                    
                
            },
            components:{
                "inabout-grid-line":{
                    template:`
                    <div class="inAbout-grid_line">
                        <div class="inAbout-line_1"></div>
                        <div class="inAbout-line_2"></div>
                    </div>
                    `,

                },
                "inabout-slide-grid":{
                    template:`
                    <div class="inAbout-slide_grid">
                    <a href="javascipr:void(0)" class="inAbout-grid_block">
                        <img src="./img/index/inAbout/rock.jpg" class="inAbout-grid_pic_1">
                    </a>
                    </div>
                    `,
                },
            },
            methods:{
                list(){
                    this.select=true;
                },
                changeAboutNum2(){
                    let nowNum = this.about_nowNum;
                    this.about_nowNum = this.about_Num2;
                    this.about_Num2 = nowNum;
                    this.select=false;
                },
                changeAboutNum3(){
                    let nowNum = this.about_nowNum;
                    this.about_nowNum = this.about_Num3;
                    this.about_Num3 = nowNum;
                    this.select=false;
                },
            }
        })
        // 活動
        new Vue({
            el:"#inAct",

            data: { 
                date: "",
            },
            methods: {
                
            },
            components:{
                "inact-item":{
                    template: `
                    <div class="inAct_item">
                                    <!-- 帶資料 -->
                        <a href="javascript:void(0)">
                            <img src="./img/index/inAct/image_1.jpg">
                        </a>
                        <div class="inAct_text">
                            <div class="inAct-top_text">
                                <div class="inAct-left_date">
                                    <div class="inAct-date_icon"></div>
                                    <!-- 帶資料 -->
                                    <div class="inAct-date_text">2020-08-14(五) ~ 2020-08-16(日)</div>  
                                </div>
                                <div class="inAct-icon_block">
                                    <a href="javascript:void(0)" class="inAct-icon_1"></a>
                                    <a href="javascript:void(0)" class="inAct-icon_2"></a>
                                </div>
                            </div>
                                    <!-- 帶資料 -->
                            <div class="inAct_title"><a href="javascript:void(0)">從陌生人到貴人，打造職涯路上的黃金人脈法則</a> </div>
    
                            <div class="inAct_location">
                                <div class="inAct-location_icon"></div>
                                    <!-- 帶資料 -->
                                <div class="inAct-location_text">台灣文創教育中心</div>
                            </div>
                        </div>
                    </div>
                         `,
                },
            },
        })
        // 專欄
        new Vue({
            el:"#inArti",
            data:{
                Arti:{
                    author:"溫在涵",
                    date:"JUL 20,2020",
                    category:"人際關係",
                    title:"品格出眾的人，都懂得避開「巴納姆效應」",
                    content:"有一個朋友，什麼感情上的疑難雜症全都依賴星座命盤去分析，還常常對我們其他朋友說，「我以前也沒那麼信星座，但有時候真的很準。」The post 品格出眾的人，都懂得避開「巴納姆效應」心理陷阱 appeared first on A Day Magazine....",

                }
            },
            methods:{

            },
        });
        // Banner
        new Vue({
            el:"#inBanner",
            data:{
                inBanner:{
                    text:"為美好的世界獻上祝福<3",
                    
                }
            },

        });
        // inArti
        new Vue({
            el:"#inArti",
            date:{

            },
            components:{
                "inarti-item":{
                    // 要有一個主標籤
                    template:`
            <a href="javascript:void(0)">
                <article>
                    <div class="inArti-left_pic1">
                        <img src="#" alt="">
                    </div>
                    <div class="inArti-left_detail">
                        <div class="inArti-left-detail_block">
                            <div class="inArti-left-detail_pic"><img src="#" ></div>
                            <div class="inArti-left-detail_text">留佩萱醫師</div>

                        </div>
                        <div class="inArti-left-detail_title">家庭關係</div>
                    </div>
                    <div class="inArti-left_border1"></div>
                    <div class="inArti-left_title">
                        <h2>受傷的童年，受創的大腦</h2>
                    </div>
                    <div class="inArti-left_partner">
                        ACE研究是在1990年左右由美國醫師等人所做的研究，當時研究了17,000多個對象，想要探討童年的創傷經驗和成人時期的健康之間的關聯性。當時的研究結果非常的驚人受試的研究對象中...
                    </div>
                   
                </article>
            </a>
                    `,
                },
                

            },
        })
