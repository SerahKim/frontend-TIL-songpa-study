// 4. 아래의 함수들을 화살표 함수로 변환해보세요.

// function greet() {
//     return "Hello!";
// }


function getInfo(name, age) {
    return `name: ${name}, age: ${age}`;
}


function greet() {
    return "Hello!";
}

//greet()의 화살표 함수
greet = () => "Hello!";
console.log(greet());


function getInfo(name, age) {
    return `name: ${name}, age: ${age}`;
}

//getInfo의 화살표 함수
getInfo = (name, age) => {
    return `name: ${name}, age: ${age}`;
}
console.log(getInfo('홍길동', 16));