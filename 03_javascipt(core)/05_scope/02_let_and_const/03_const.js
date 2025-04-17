/* 03.const */
/* 
상수 : 재할당이 금지된 변수
const 키워드는 상수를 선언하기 위해 사용한다.
const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.
일반적으로 상수의 이름은 대문자로 선언해 상수임을 명확히 나타내며
여러 단어로 이루어진 경우 언더스코어(_)로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.
*/

// const x; // const는 선언만 해서는 안되고, 선언과 동시에 초기화 해야한다.
const x = 1;
// x = 2; // 재할당 금지

const DISCOUNT_RATE = 0.15;  // 변경할 수 없는 값(고정된 값을 주고 싶을 떄, 즉 상수를 주고 싶을 때 변수명을 대문자로 주는 것이 좋다.)
const price = 15000; // 정가
const discountPrice = price * (1-DISCOUNT_RATE);
console.log(discountPrice);

// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const student = {
    name : "홍길동",
    age : 20,
};

student.name = "유관순"; // 객체 안에 있는 property의 값은 변경할 수 있다.
console.log(student.name);

// student = {}; // 객체 자체를 재할당하는 것은 불가능하다.


