/* 02_숫자 타입으로 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10')); // 결과 : 10(숫자 타입)
console.log(Number('10.01')); // 결과 : 10.01(숫자 타입)
console.log(Number(true)); // 결과 : 1(숫자 타입)
console.log(Number(false)); // 결과 : 0(숫자 타입)

// 2. parseInt, parseFloat 함수 이용
console.log(parseInt('10')); //결과 : 10(숫자 타입), 문자열 10을 정수형으로 변환
console.log(parseFloat('10')); //결과 : 10(숫자 타입), 문자열 10을 실수형으로 변환
console.log(parseInt('10.10')); //결과 : 10(숫자 타입), 정수형이기 때문에 정수형으로 판단 가능한 정도까지만 반환
console.log(parseFloat('10.10')); //결과 : 10.10(숫자 타입), 실수형이기 때문에 실수형으로 판단 가능한 정도까지만 반환
console.log(parseFloat('10.10.10')); //결과 : 10.10(숫자 타입), 실수형이기 때문에 실수형으로 판단 가능한 정도까지만 반환

// 3. '+' 단항 산술 연산자 이용

// 4. '*'  산술 연산자 이용
console.log('10' * 1);  // 결과 : 10(숫자 타입)
console.log(typeof('10' * 1));  // 결과 : number
console.log('10.01' * 1); // 결과 : 10.01
console.log(true * 1);  // 결과 : 1
console.log(false * 1);  // 결과 : 0