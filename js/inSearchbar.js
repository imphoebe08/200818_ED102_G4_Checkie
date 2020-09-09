new Vue({
    el: "#app1",
    data: {
        iMode: "諮商方式",
        iModes: [{
            id: "iMode1",
            value: "語音諮商"
        }, {
            id: "iMode2",
            value: "視訊諮商"
        }, {
            id: "iMode3",
            value: "現場諮商"
        }, {
            id: "iMode4",
            value: "線上諮商"
        }],
        iPos: "地區",
        iPoss: [{
            id: "iNorth",
            value: "北"
        }, {
            id: "iCenter",
            value: "中"
        }, {
            id: "iSouth",
            value: "南"
        }],
        iType: "專業",
        iTypes: [{
            id: "iType1",
            value: "家庭關係"
        }, {
            id: "iType2",
            value: "人際關係"
        }, {
            id: "iType3",
            value: "伴侶關係"
        }, {
            id: "iType4",
            value: "壓力創傷"
        }, {
            id: "iType5",
            value: "自我探索"
        }],
        iCs: "諮商師",
        iCss: [{
            id: "iCs1",
            value: "醫師一"
        }, {
            id: "iCs2",
            value: "醫師二"
        }, {
            id: "iCs3",
            value: "醫師三"
        }, {
            id: "iCs4",
            value: "醫師四"
        }, {
            id: "iCs5",
            value: "醫師五"
        }, {
            id: "iCs6",
            value: "醫師六"
        }, {
            id: "iCs7",
            value: "醫師七"
        }, {
            id: "iCs8",
            value: "醫師八"
        }],
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false
    },
    methods: {
        changeWord0(e) {
            this.iMode = e.target.innerText;
            this.doFirst();
        },
        changeWord1(e) {
            this.iPos = e.target.innerText;
            this.doFirst();
        },
        changeWord2(e) {
            this.iType = e.target.innerText;
            this.doFirst();
        },
        changeWord3(e) {
            this.iCs = e.target.innerText;
            this.doFirst();
        },
        doFirst() {
            $("span").next().next().hide();
        },
        slideToggleUl(e) {
            // $("span:not(this)").next().next().hide();
            if ($(e.target).next().next().css("display") == "none") {
                $(e.target).next().next().show();
            } else {
                $("span").next().next().hide();
            }
        },
        closeToggle(e) {
            $(e.target).parent().parent().hide();
        },
        openOrderPage() {
            window.open("./coCheck.html", "_self");
        },
    },
    watch: {
        iMode: function () {
            if (this.iMode !== "諮商方式") {
                document.getElementById("iModeBut").style.color = "red";
                if (this.iMode == "現場諮商") {
                    this.stage1 = true;
                    if (this.iPos == "地區") {
                        this.stage2 = false;
                        this.stage3 = false;
                    } else {
                        this.stage2 = true;
                        this.stage3 = false;
                    }
                    this.iType = "專業";
                    this.iCs = "諮商師";
                    this.doFirst();
                } else {
                    this.stage1 = false;
                    this.stage2 = true;
                    this.doFirst();
                }
            } else {
                document.getElementById("iModeBut").style.color = "black";
            }
        },
        iPos: function () {
            if (this.iPos !== "地區") {
                document.getElementById("iPosBut").style.color = "red";
                this.stage2 = true;
                this.doFirst();
            } else {
                document.getElementById("iPosBut").style.color = "black";
            }
        },
        iType: function () {
            if (this.iType !== "專業") {
                document.getElementById("iTypeBut").style.color = "red";
                this.stage3 = true;
                this.doFirst();
            } else {
                document.getElementById("iTypeBut").style.color = "black";
            }
        },
        iCs: function () {
            if (this.iType !== "諮商師") {
                document.getElementById("iCsBut").style.color = "red";
                this.stage4 = true;
            } else {
                document.getElementById("iCsBut").style.color = "black";
                this.stage4 = false;
            }
            this.doFirst();
        },
        stage1: function () {
            if (this.stage1 == false) {
                this.iPos = "地區";
            }
        },
        stage2: function () {
            if (this.stage2 == false) {
                this.iType = "專業";
                this.iCs = "諮商師";
                this.stage4 = false;
            }
        },
        stage3: function () {
            if (this.stage3 == false) {
                this.stage4 = false;
            }
        }
    }
});