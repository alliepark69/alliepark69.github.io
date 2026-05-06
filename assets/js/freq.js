// assets/js/freq.js
function countChar(text, target) {
    let count = 0; // 초기화 
    for (const ch of text) {
        if (ch === target) count++;
    }
    return count; 
}

const text = "이상의 「날개」는 1936년에 발표된 단편소설이다.";
const targets = ["이", "의", "날", "개", "소"]; 

const counts = targets.map(t => countChar(text, t));
console.log(counts); 

for (let i = 0; i < targets.length; i++) {
    console.log(`'${targets[i]}': ${counts[i]}번`);
}

const frequent = targets.filter(t => countChar(text, t) >= 2);
console.log(frequent);
let maxIdx = 0;
for (let i = 1; i < counts.length; i++) {
    if (counts[i] > counts[maxIdx]) maxIdx = i;
}
const top = targets[maxIdx];
console.log(`가장 자주 나온 글자: '${top}' (${counts[maxIdx]}번)`);
