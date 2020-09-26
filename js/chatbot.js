$(function() {

    var CLASS_CIRCLE = '.chatbot_circle';
    var CLASS_ICON = '.icon-elements';
    var CLASS_MODAL = '.modal-wrapper';
    var CLASS_ICON_ACTIVE = 'js-icon-active';
    var CLASS_MODAL_ACTIVE = 'js-modal-active';

    var elementCircle = document.querySelector(CLASS_CIRCLE);
    var elementIcon = document.querySelector(CLASS_ICON);
    var elementModal = document.querySelector(CLASS_MODAL);
    var elementInput = document.querySelector('#myInput');

    var triggerAnimation = () => {
        var isActive = elementIcon.classList.contains(CLASS_ICON_ACTIVE);
        // console.log(isActive);
        isActive ? (
            elementIcon.classList.remove(CLASS_ICON_ACTIVE),
            elementModal.classList.remove(CLASS_MODAL_ACTIVE)
        ) : (
            elementIcon.classList.add(CLASS_ICON_ACTIVE),
            elementModal.classList.add(CLASS_MODAL_ACTIVE)
        );
    }

    elementCircle.addEventListener('click', () => triggerAnimation());

});
new Vue({
    el: "#chatBot",
    data: {
        chatBotData: [],
        serNo: "",
        serContent: "",
    },
    methods: {
        getMes() {
            axios.get('./php/chatBotLoad.php')
                .then((res) => {
                    let data = res.data;
                    this.serNo = res.data[0].serNo;
                    for (let i = data.length - 1; i >= 0; i--) {
                        this.chatBotData.push(data[i]);
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        },
        keepMes() {
            axios.get(`./php/chatBotKeep.php?serNo=${this.serNo}`)
                .then((res) => {
                    let data = res.data;
                    if (data != "no") {
                        this.serNo = res.data[0].serNo;

                        if (document.getElementById("modal-chatbox").scrollTop + document.getElementById("modal-chatbox").offsetHeight - document.getElementById("modal-chatbox").scrollHeight == 0) {
                            for (let i = data.length - 1; i >= 0; i--) {
                                this.chatBotData.push(data[i]);
                                setTimeout(() => {
                                    document.getElementById("modal-chatbox").scrollTop = document.getElementById("modal-chatbox").scrollHeight;
                                }, 1)
                            }
                        } else {

                            for (let i = data.length - 1; i >= 0; i--) {
                                this.chatBotData.push(data[i]);

                            }
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        },
        submit() {
            var now = new Date().getHours(),
                robContent = now > 18 ? "目前客服已下班" : "您好~歡迎來到 Checkie";

            // if(now)
            axios.get(`./php/submitMes.php?serContent=${this.serContent}&robContent=${robContent}`)
                .then((res) => {
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                });
            this.serContent = "";
        },
        selectClass(data) {
            return (data == "0") ? "self" : "reply"
        },
        time(data) {
            return data.substring(11, 16);
        },
        barDown() {
            document.getElementById("modal-chatbox").scrollTop = document.getElementById("modal-chatbox").scrollHeight;
        },
    },
    computed: {

    },
    mounted() {
        this.getMes();
        setInterval(() => {
            this.keepMes();
        }, 500)
    },
})