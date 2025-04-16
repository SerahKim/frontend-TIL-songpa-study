/* 01. 프로퍼티 값 단축 구문 */

var id = 'p-001';
var price = 3000;

var product = {
    id : id,
    price : price,
};
console.log(product);

// 변수 이름과 property 키가 동일한 경우 property 키를 생략할 수 있다.
// property 키는 변수 이름으로 자동 생성된다.
var product2 = {
    id, price
}
console.log(product);
