/* 02. method(메소드) */
/* 
자바스크립트의 함수는 객체이닫.
함수는 값으로 취급할 수 있고, property 값으로 사용할 수 있다.
*/

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
};

// food : 매개변수, '고구마' : 전달 인자
dog.eat('고구마');