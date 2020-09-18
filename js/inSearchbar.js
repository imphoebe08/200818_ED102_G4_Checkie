new Vue({
    el: "#app1",
    data: {
        iMode: "諮商方式",
        iModeNo: 0,
        iModes: [{
            id: "iMode1",
            value: "語音諮商",
            csModeNo: 1
        }, {
            id: "iMode2",
            value: "視訊諮商",
            csModeNo: 2
        }, {
            id: "iMode3",
            value: "現場諮商",
            csModeNo: 3
        }, {
            id: "iMode4",
            value: "線上諮商",
            csModeNo: 4
        }],
        iPos: "地區",
        csPosNo: 0,
        iPoss: [{
            id: "iNorth",
            value: "北",
            csPosNo: 1
        }, {
            id: "iCenter",
            value: "中",
            csPosNo: 2
        }, {
            id: "iSouth",
            value: "南",
            csPosNo: 3
        }],
        iType: "專業",
        type: 0,
        iTypes: [{
            id: "iType1",
            value: "家庭關係",
            type: 1,
        }, {
            id: "iType2",
            value: "人際關係",
            type: 2,
        }, {
            id: "iType3",
            value: "伴侶關係",
            type: 3,
        }, {
            id: "iType4",
            value: "壓力創傷",
            type: 4,
        }, {
            id: "iType5",
            value: "自我探索",
            type: 5
        }],
        iCs: "諮商師",
        csNo: 0,
        iCss: [{
            id: "iCs1",
            value: "醫師一",
            csNo: 1,
        }, {
            id: "iCs2",
            value: "醫師二",
            csNo: 2,
        }, {
            id: "iCs3",
            value: "醫師三",
            csNo: 3,
        }],
        stage1: false,
        stage2: false,
        stage3: false,
        stage4: false
    },
    methods: {
        changeWord0(number, e) {
            this.iMode = e.target.innerText;
            this.iModeNo = number;
            this.doFirst();
        },
        changeWord1(number, e) {
            this.iPos = e.target.innerText;
            this.csPosNo = number;
            this.doFirst();
        },
        changeWord2(number, e) {
            this.iType = e.target.innerText;
            this.type = number;
            this.doFirst();
        },
        changeWord3(number, e) {
            this.iCs = e.target.innerText;
            this.csNo = number;
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
            window.open(`./coCalender.html?csNo=${this.csNo}&iModeNo=${this.iModeNo}&csPosNo=${this.csPosNo}`, "_self");
        },
        getCsData() {
            axios.get("./php/inSearchBar.php", {
                params: {
                    'csPosNo': this.csPosNo,
                    'type': this.type
                }
            }).then((res) => {
                this.iCss = res.data;
            })
        }
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
            this.getCsData();
        },
        iPos: function () {
            if (this.iPos !== "地區") {
                document.getElementById("iPosBut").style.color = "red";
                this.stage2 = true;
                this.doFirst();
            } else {
                document.getElementById("iPosBut").style.color = "black";
            }
            this.getCsData();
        },
        iType: function () {
            if (this.iType !== "專業") {
                document.getElementById("iTypeBut").style.color = "red";
                this.stage3 = true;
                this.doFirst();
            } else {
                document.getElementById("iTypeBut").style.color = "black";
            }
            this.getCsData();
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