// assets/js/works-app.js
function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target) count++;
    }
    return count;
}

const targets = ["이", "의", "는", "가", "을"];

const btnBox = document.querySelector("#work-buttons");
const nowBox = document.querySelector("#now-showing");
const list = document.querySelector("#freq-list");
const topBox = document.querySelector("#top-char");

fetch("/data/works.json")
    .then(response => response.json())
    .then(works => {
        for (const work of works) {
            const btn = document.createElement("button");
            btn.textContent = work.title;
            btn.addEventListener("click", () => analyze(work));
            btnBox.appendChild(btn);
        }
    });

function analyze(work) {
fetch(work.file)
    .then(response => response.text())
    .then(text => {
        nowBox.textContent = `[${work.title}] 분석 결과`;
        const counts = targets.map(t => countChar(text, t));
        drawList(targets, counts);
        drawTop(targets, counts);
    });
}
    
function drawList(targets, counts) {
    list.textContent = "";
    for (let i = 0; i < targets.length; i++) {
        const li = document.createElement("li");
        li.textContent = `'${targets[i]}': ${counts[i]}번`;
        list.appendChild(li);
    }
}

function drawTop(targets, counts) {
    let maxIdx = 0;
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] > counts[maxIdx]) maxIdx = i;
    }
    topBox.textContent =
        `가장 자주 나온 글자: ${targets[maxIdx]} (${counts[maxIdx]}번)`;
}