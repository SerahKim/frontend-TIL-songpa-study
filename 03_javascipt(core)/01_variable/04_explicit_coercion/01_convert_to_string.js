/* 04. 명시적 타입 변환 */
/* 01. 문자열 타입으로 변환 */

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); // 결과 : "10"(문자열)
console.log(String(NaN)); // 결과 : "NaN"(문자열)
console.log(String(Infinity)); // 결과 : "Infinity"(문자열)
console.log(String(true)); // 결과 : "true"(문자열)
console.log(String(false)); // 결과 : "false"(문자열)

// 2. Object.prototype.toString 메소드 사용
console.log((10).toString); // 결과 : "10"(문자열)
console.log((NaN).toString); // 결과 : "NaN"(문자열)
console.log((Infinity).toString); // 결과 : "Infinity"(문자열)
console.log((true).toString); // 결과 : "true"(문자열)
console.log((false).toString); // 결과 : "false"(문자열)

// 3. 문자열 연결 연산자 이용
