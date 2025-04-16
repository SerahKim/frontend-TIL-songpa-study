/* 01. 상태 데이터(property) */
/* 
객체는 property의 집합이며, property는 키와 값으로 구성된다.
*/

var student = {
    name : '유관순',
    age : 16,
};

/* 
property 키 : 빈 문자열을 포함하는 모든 문자열이므로 따옴표를 사용하지만 식별자 네이밍 규칙을 따르는 경우 사용하지 않아도 된다.
property 값 : 자바스크립트에서 사용할 수 있는 모든 값
*/

// 정수가 맨위로 오게끔 자동 정렬됨.
// 그 후에는 적혀진 순서대로 나옴
var obj = {
    normal : 'normal value',
    '@ S P A C E @' : 'space value', // 공백과 특수문자가 들어간 key 값을 권장하진 않는다.
    '' : '', // 오류가 발생하지는 않지만 논리적으로 문제가 생길 수 있어서 권장하지 않는다.
    0 : 1, // 숫자 키는 내부적으로 문자열로 변환된다.
    var : 'var', // 예약어 키는 오류를 발생하지는 않지만 권장하지 않는다.
    normal : 'new value', // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.
};

console.log(obj['normal']);

// 동적으로 key와 value 값 추가 가능
var key = 'test';
obj[key] = 'test value'

console.log(obj);