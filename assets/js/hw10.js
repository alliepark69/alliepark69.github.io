// assets/js/hw10.js

//Q1

function classifyEra(year) {
    if (year < 1910) {
        return ("개화기 이전");
    } else if (year < 1945) {
        return "일제강점기";
    } else if (year < 1990) {
        return ("해방 이후~현대");
    } else {
        return ("동시대");
    }
}

const years = [1908, 1936, 1972, 2025];

for (const year of years) {
    console.log(`${year}년: ${classifyEra(year)}`);
}

//Q2
const works = ["날개", "오감도", "지주회시", "종생기", "권태"];

console.log(works.length);
console.log(works[0]);
console.log(works[works.length - 1]);

const titled = works.map(w => `「${w}」`);
console.log(titled);
const long = works.filter(w => w.length >= 3);
console.log(long);

for (let i = 0; i < long.length; i++) {
    console.log(`${i + 1}번째 작품: ${long[i]}`);
}

//Q3

function countChar(text, target) {
    let count = 0; 
    for (const ch of text) {
        if (ch === target) {count++;
        }
    }
    
    return count;
}

console.log(`"박씨는 이씨에게 시집간 김씨의 의사는 동생이다."에서 "시"는 ${countChar("박씨는 이씨에게 시집간 김씨의 의사는 동생이다.", "시")}번 등장합니다.`);
console.log(`"이상의 「날개」는 1936년 작품이다."에서 "이"는 ${countChar("이상의 「날개」는 1936년 작품이다.", "이")}번 등장합니다.`);
console.log(`"banana"에서 "a"는 ${countChar("banana", "a")}번 등장합니다.`);


//Q4
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
const topTarget = targets[maxIdx];
console.log(`가장 자주 나온 글자: '${topTarget}' (${counts[maxIdx]}번)`);
