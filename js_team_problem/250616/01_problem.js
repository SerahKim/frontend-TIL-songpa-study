/* 기사 단원의 무기 */

function solution(number, limit, power) {
    var countArr = new Array(number);
    
    for (let i = 1; i <= number; i++) {
        var count = 0;

        for (let j = 1; j * j <= i; j++) {
            if (i % j == 0) 
                count += (j * j === i) ? 1 : 2;
        }
        
        countArr[i - 1] = count;

        if (countArr[i -1] > limit) 
            countArr[i - 1] = power;
    }
    
    return countArr.reduce((acc, curr) => acc + curr);
}

console.log(solution(10, 3, 2));