/*
다음 배열이 주어졌을 때:
arr = [1, 2, 3]

이 배열을 아래와 같이 변경해보세요:
arr = [3, 4, 5, 6, 7]
*/

let arr = [1, 2, 3];

arr.shift();
arr.shift();

for(i = 4; i <= 7; i++) {
    arr.push(i);
}

console.log(arr);

// 50부터 100까지의 숫자를 랜덤으로 5개를 뽑은 후 내림차순으로 정렬한 배열을 구하시오.
let numbers = [];

for(let i = 0; i < 5; i++) {
    numbers[i] = Math.floor(Math.random() * 50) + 50;
}
numbers.sort((a, b) => b - a);

console.log(numbers);

/*
['마라탕','김밥','떡볶이']만 도출되게 해보기
const hungry = ['라면','칼국수','마라탕','김밥','떡볶이']
 */


const hungry = ['라면','칼국수','마라탕','김밥','떡볶이']
hungry.shift();
hungry.shift();

console.log(hungry);
