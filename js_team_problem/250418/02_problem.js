// 50부터 100까지의 숫자를 랜덤으로 5개를 뽑은 후 내림차순으로 정렬한 배열을 구하시오.
let numbers = [];

for(let i = 0; i < 5; i++) {
    numbers[i] = Math.floor(Math.random() * (50 + 1)) + 50;
}

numbers.sort((a, b) => b - a);

console.log(numbers);