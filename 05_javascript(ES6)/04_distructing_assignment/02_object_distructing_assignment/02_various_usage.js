// 02. 다양한 사용법
/*
객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용할 수 있다.
또한 콜론과 할당을 동시에 사용할 수 있다.
*/

let shirts = {
    productName : '베이직 셔츠',
};

let { productName: productName2 = '어떤 상품', color: color2 = '어떤 색상', price : price2 = 0} = shirts;

console.log(`productName2 : ${productName2}`); // // 참조한 객체 리터럴에 값이 있으면 기존의 값으로 가져온다.
console.log(`color2 : ${color2}`); // 참조한 객체 리터럴에 값이 없으면 초기화 해준 값으로 나온다.
console.log(`price2 : ${price2}`); // 참조한 객체 리터럴에 값이 없으면 초기화 해준 값으로 나온다.

// rest parameter ...로 나머지 요소를 한 번에 가져올 수도 있다.
let pants = {
    productName : '배기팬츠', 
    color : '검정색',
    price : 3000
};

let { productName : productName4, ...rest} = pants;

console.log(productName4);
console.log(rest.color);
console.log(rest.price);