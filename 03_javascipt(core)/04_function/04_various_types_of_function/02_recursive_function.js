/* 02.재귀함수 */
/*
반복문을 대신해서 사용할 수 있지만 스택오버플로우가 발생할 수 있기 때문에 
직관적으로 파악하기 쉬울 때만 사용하는게 좋다.
*/

// 5!= 1 * 2 * 3 * 4 * 5
// 5!= 1 * 2 * ... * (n-1) * n
function factorial(n) {
    if( n<=1 )
        return 1; // n이 1이하면 재귀호출을 멈춘다.

    // 재귀호출
    return n * factorial(n-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

