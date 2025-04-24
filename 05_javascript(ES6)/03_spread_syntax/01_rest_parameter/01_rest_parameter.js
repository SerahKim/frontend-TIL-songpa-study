// 01. 나머지 매개변수
function merge(msg1, msg2) {
    return msg1 + msg2;
}

// 함수에 정의된 인수는 2개이고
// 정해진 인수보다 적게 전달하면 undefined, 정해진 인수보다 많이 전달되면 해당 인수를 무시하고 기능한다.
console.log(merge('안녕하세요.'));
console.log(merge('안녕하세요.','반갑습니다.'));
console.log(merge('안녕하세요.','반갑습니다.', '제이름은 홍길동입니다.'));

// 이 때 나머지 매개변수 ...를 사용하면 매개변수를 한 곳에 모아 배열에 담을 수 있다.
function mergeAll(...args) {
    let message ='';
    // for...of... : 넣는 순서가 보장됨
    for(let arg of args) {
        message += args;

        return message;
    }
}
console.log(mergeAll('안녕하세요.'));
console.log(mergeAll('안녕하세요.','반갑습니다.'));
console.log(mergeAll('안녕하세요.','반갑습니다.', '제이름은 홍길동입니다.'));

// 유의할 점은 나머지 매개변수는 항상 마지막에 있어야 한다.
// function func(arg1, ...args, arg2) {} => 불가능한 형태
// function func(arg1, arg2, ...args) {} => 가능한 형태