/* 03. 프로퍼티 접근 */

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
};

// 마침표 표기법
console.log(dog.name);
dog.eat('고구마');

// 대괄호 표기법
console.log(dog['name']);
dog['eat']('고구마');

var obj = {
    'dash-key' : 'dash-value',
    0 : 1,
};

//key 값에 특수기호가 있는 경우 대괄호 표기법으로만 접근이 가능하다.
// console.log(obj."dash-key"); // 에러
// console.log(obj.dash-key); // 에러
// console.log(obj[dash-key]); // 에러
console.log(obj["dash-key"]);
