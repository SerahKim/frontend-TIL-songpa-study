/* 01. 배열 */
/*
여러개의 값을 순차적으로 나열한 자료구조
*/

// 1. 배열 리터럴을 통해 배열 생성
const arr = ['바나나', '복숭아', '키위'];
console.log(arr);
console.table(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

// 전달된 인수가 1개이상, 숫자인 경우 
// length가 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10); // length가 10인 배열 생성
console.log(arr3);

// 전달된 인수가 2개 이상
const arr4 = new Array(1, 2, 3);
console.log(arr4);

// 3. Array.of 메소드
console.log(Array.of(10)); // 10이라는 값을 가지고 있는 length가 1인 배열 생성
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js'));
console.log(Array.of(1, 'hello', {}, function(){}));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용된다.
console.log(arr[0]); // 결과 : 바나나
console.log(arr[1]); // 결과 : 복숭아
console.log(arr[2]); // 결과 : 키위
console.log(arr[3]); // 결과 : undefined

// 배열의 요소 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
console.log(arr.length);

// 값이 변할 수 밖에 없는 것은 let을 사용한다.
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 배열이라는 별도의 타입은 존재하지 않고 배열을 객체 타입이다.
console.log(typeof arr);