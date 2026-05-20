const canvas = document.querySelector("#my-chart");
new Chart(canvas, {
    type: "bar",
    data: {
        labels: ["김소월", "이상", "윤동주"],
        datasets: [{
            label: "작품 수",
            data: [3, 5, 2],
        }],
    },
});

