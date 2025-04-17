/* 01. var */

// 1. 변수 중복 선언 허용
// 값을 예측할 수 없다.
var msg = '안녕하세요';
console.log(msg);

// 자바스크립트 엔진에 의해 초기화된다.
// 그리고 다시 재할당됨.
var msg = '안녕히가세요';
console.log(msg);

// 선언을 하지 않으면 위에서 선언된 변수값이 할당됨.
var msg
console.log(msg);


// 2. 함수 레벨 스코프

// 3. 변수 호이스팅
// 오류가 나지 않고 undefined가 뜬다.
console.log(test);
var test = '반갑습니다.';
console.log(test);