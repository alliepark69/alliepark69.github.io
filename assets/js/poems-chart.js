fetch("/data/poems.csv")
    .then(response => response.text())
    .then(csv => {
        const data = csv
            .split("\n")
            .slice(1)
            .filter(line => line.trim() !== "")
            .map(line => {
                const cols = line.split(",");
                return {
                    year: Number(cols[0]),
                    author: cols[1].trim(),
                    count: Number(cols[2]),
                };
            });
        drawChart(data); 
    });
function drawChart(rows) {
    const labels = rows.map(r => r.author);
    const counts = rows.map(r => r.count); 
    const canvas = document.querySelector("#poems-chart");
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{ label: "작품 편수",
            data: counts,
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)", // 분홍
                "rgba(54, 162, 235, 0.6)", // 파랑
                "rgba(255, 206, 86, 0.6)", // 노랑
                "rgba(75, 192, 192, 0.6)", // 청록
                ],
            }],
        },
        options : { 
            plugins: {
                title : {display: true, text: "작가별 작품 편수"},
                legend : {display : true}
            },
            scales: {
                x : {title: {display : true, text : "작가"}},
                y : {beginAtZero: true, title : {display: true, text: "편수"}},
            }
        }
    });
}
