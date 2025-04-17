// 7. car 객체와 fireCar 객체 정의하기
// -------------------------------------------------------------------------------
// - car 객체는 brand 프로퍼티를 갖고있다.
// - fireCar 객체는 brand, color 프로퍼티를 갖고 있고 car객체를 상속받는다.
// - fireCar 객체에서 brand는 상속받은 프로퍼티이고, color는 자기 자신의 프로퍼티이다.
// -------------------------------------------------------------------------------
// 위의 예제에서 자기 자신의 프로퍼티와 상속된 프로퍼티를 구분하세요.

const car = {
    brand : 'BMW',
};

const fireCar = {
    __proto__ : car,
    color : '빨간색',
}

for (let property in fireCar) {
    
    let isOwn = fireCar.hasOwnProperty(property);
    if (isOwn) {
        console.log(`${property}은 fireCar의 프로퍼티입니다.`);
    } else {
        console.log(`${property}은 car의 프로퍼티입니다.`);
    }
}