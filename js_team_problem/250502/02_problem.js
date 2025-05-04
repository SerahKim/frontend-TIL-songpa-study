/* 
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21) 
*/


let numList = (start, end) => {
    let str = "";

    for (let i = start; i <= end; i++) {
        str += i;
    }
    
    return Number(str);
}

function sumAll(n) {
    let result = 0;

    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10) ;
    }

    return result;
}

console.log(sumAll(numList(10, 15)));