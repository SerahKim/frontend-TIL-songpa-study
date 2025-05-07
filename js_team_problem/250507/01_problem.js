/*
대소문자 바꿔서 출력하기

- 입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

const inputArr = "AAABBBcccddd".split("");
const outputArr = new Array();

for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= "A" && inputArr[i] <= "Z") {
        outputArr[i] = inputArr[i].toLowerCase();
    } else if (inputArr[i] >= "a" && inputArr[i] <= "z") {
        outputArr[i] = inputArr[i].toUpperCase();
    }
}

console.log(outputArr.join(""));

