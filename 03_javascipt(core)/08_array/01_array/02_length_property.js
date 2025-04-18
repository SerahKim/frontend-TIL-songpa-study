/* 02. length property */

// length 프로퍼티는 요소의 개수를 나타내는 0이상의 정수를 값으로 갖는다.
console.log([].length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

arr.push(6); // 인자로 전달한 요소 추가
console.log(arr.length);
console.log(arr);
arr.pop() // 마지막 요소 제거
console.log(arr);

// 명시적으로 배열의 길이 지정 가능
arr.length = 3; // 기존의 배열 길이보다 작은 숫작를 길이로 할당한 경우 길이가 줄어든다.
console.log(arr);
arr.length = 10;
console.log(arr);

// 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을 문법적으로 허용한다.
const test = [, 2, ,4];
console.log(test);
console.log(test.length);