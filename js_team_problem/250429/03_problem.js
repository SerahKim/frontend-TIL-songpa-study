/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

let n = 17;
let remainder = 0;
let remainderArr = new Array();
let count = 0;
let result = "";

// 이 for문을 돌면서 나머지가 0을 나오게 하는 숫자가 1이랑 n인 경우
// 1부터 n을 제외하고 나머지가 0이 나오는게 하나라도 있으면 걔는 소수가 아님

for(let i = 1; i <= n; i++) {
    remainderArr[i - 1] = n % i;

    if(remainderArr[i - 1] == 0) {
        count++;
    }

}

if(count == 2) {
    console.log('소수입니다.');
} else {
    console.log('소수가 아닙니다.');
}


