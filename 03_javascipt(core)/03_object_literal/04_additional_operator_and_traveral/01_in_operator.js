/* in 연산자 : property 존재 여부 확인하기 */

var student = {
    name : '유관순',
    age : 16,
    test : undefined,
};

console.log(student.name === undefined); // false
console.log(student.height === undefined); // true
console.log(student.test === undefined); // true, 프로퍼티 값을 undefined로 정의했기 때문에 프로퍼티의 값이 존재하지만 true로 나옴(에러)

console.log('name' in student); // true
console.log('height' in student); // true
console.log('test' in student); // true