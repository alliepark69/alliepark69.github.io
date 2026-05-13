// assets/js/freq-app.js
function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target) count++;
    }
    return count;
}

const form = document.querySelector("#freq-form");
const textBox = document.querySelector("#text-input");
const targetBox = document.querySelector("#target-input");
const list = document.querySelector("#freq-list");
const topBox = document.querySelector("#top-char");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // 새로고침 막기
    const text = textBox.value;
    const targets = targetBox.value.split(",").map(s => s.trim());
    const counts = targets.map(t => countChar(text, t));

    drawList(targets, counts);
    drawTop(targets, counts);
});

function drawList(targets, counts) {
    list.textContent = ""; // 기존 목록 비우기

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
    topBox.textContent = `가장 자주 나온 글자: ${targets[maxIdx]} (${counts[maxIdx]}번)`;
    topBox.style.fontWeight = "bold";
    topBox.style.color = "crimson";
}
