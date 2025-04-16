/* 01. 객체(object) */

var student = {
    // key-value 쌍으로 구성된 property
    // property : 객체의 상태를 나타내는 값(data)
    name : '유관순',
    age : 16,
    // method : property(상태 데이터)를 참조하고 조작할 수 있는 동작
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세입니다.`;
    },
};

console.log(typeof student);
console.log(student);
console.log(student.getInfo());

// property를 정의하지 않을 시 빈 객체가 생성된다.
var student2 = {};
console.log(typeof student2); // 결과 : object
console.log(student2); // 결과 : {}
