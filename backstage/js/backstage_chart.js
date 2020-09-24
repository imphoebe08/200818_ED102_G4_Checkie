new Vue({
    el: "#chartRow",
    data: {
        myChart1: {},
        data1: [],
        labels1: [],
        myChart2: {},
        data2: [],
        labels2: [],
        myChart3: {},
        data3: [],
        labels3: [],
        total1: 0,
        total2: 0,
        total3: 0,
    },
    mounted() {
        this.drawPic();
    },
    methods: {
        drawPic() {
            axios.get('./php/getBgHomeChartData.php')
                .then((res) => {
                    this.data1 = res.data.data1;
                    this.data2 = res.data.data2;
                    this.data3 = res.data.data3;
                    this.labels1 = res.data.labels1;
                    this.labels2 = res.data.labels2;
                    this.labels3 = res.data.labels3;
                    this.total1 = res.data.data1.reduce((a, b) => +a + +b);
                    this.total2 = res.data.data2.reduce((a, b) => +a + +b);
                    this.total3 = res.data.data3.reduce((a, b) => +a + +b);
                }).then(() => {
                    this.$nextTick().then(() => {
                        this.drawPic1();
                        this.drawPic2();
                        this.drawPic3();
                    })
                })
        },
        drawPic1() {
            let ctx = document.getElementById('card-chart1').getContext('2d');
            this.myChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.labels1,
                    datasets: [{
                        // label: '',
                        data: this.data1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 4,
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                        }]
                    },
                    legend: {
                        display: 0
                    }
                }
            });
        },
        drawPic2() {
            let ctx = document.getElementById('card-chart2').getContext('2d');
            this.myChart2 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.labels2,
                    datasets: [{
                        // label: '',
                        data: this.data2,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 4,
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                        }]
                    },
                    legend: {
                        display: 0
                    }
                }
            });
        },
        drawPic3() {
            let ctx = document.getElementById('card-chart3').getContext('2d');
            this.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.labels3,
                    datasets: [{
                        // label: '',
                        data: this.data3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 4,
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                        }]
                    },
                    legend: {
                        display: 0
                    }
                }
            });
        },
    }
})