/* 02. 논리 연산자 */
/* 01. 단축 평가 */

// 결과 : apple
// apple과 banana은 빈 문자열이 아닌 값을 가지고 있는 값이기 때문에 true임
// apple이 true이기 때문에 뒤에 banana는 고려하지 않고 apple이라는 결과값이 나오게 됨
console.log('apple' || 'banana');
// 결과 : banana
// 앞에 값이 false이기 때문에 true인 banana가 나오게 됨. 
console.log(false || 'banana');

// 결과 : banana
// 둘 다 true이고 && 연산자이기 때문에 뒤의 값인 banana가 나오게 됨. 
console.log('apple' && 'banana');
// 결과 : false
console.log(false && 'banana'); 
// 결과 : false
console.log('apple' && false);

/* 단축 평가 */
var num = 1;
if(num % 2 == 0)
    console.log('짝수입니다.');
else
    console.log('홀수입니다.');

// num % 2 == 0 이 값이 true이면 && 연산자에 의해 &&연산자 뒤의 값이 출력.
// num % 2 == 0 : fasle, 즉, 아무런 결과값도 안나옴.
num % 2 == 0 && console.log('짝수입니다.');
// num % 2 == 0 : fasle여도 || 연산자에 의해 뒤의 값이 출력. 즉, 결과값 : 짝수입니다.
num % 2 == 0 || console.log('짝수입니다.');