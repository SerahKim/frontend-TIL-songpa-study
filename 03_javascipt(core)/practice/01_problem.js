// 1. 사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요.

function judgement(num) {
    if(num % 2 == 0) {
        console.log(`${num}은 짝수입니다.`);
    } else {
        console.log(`${num}은 홀수입니다.`);
    }
}

judgement(5);

