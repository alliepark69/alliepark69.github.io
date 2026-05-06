// assets/js/counter-char.js

const text = "이상의 「날개」는 1936년에 발표된 단편소설이다.";
const target = "이";

let count = 0;

for (const ch of text) {
  if (ch === target) {
    count++;
  }
}

console.log(`${text}`);
console.log(`${target} 글자는 ${count}번 등장합니다.`);