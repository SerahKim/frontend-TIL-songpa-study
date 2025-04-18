/* 01.배열 메소드 */
const arr = [];

// 배열의 생성자 함수 : Array
console.log(arr.constructor === Array);
// 배열의 프로토타입 객체는 Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// Array.prototype.indexOf : 앞에서부터 요소가 위치한 인덱스를 리턴한다.
const foodList = ['물회', '물회', '냉면', '수박', '물회'];
console.log(foodList.indexOf('물회')); // 앞에서부터 값을 찾음
console.log(foodList.indexOf('물회', 1)); // 결과 : 4, 1번 인덱스부터 오른쪽 방향으로 값을 찾음
console.log(foodList.indexOf('삼겹살')); // 없으면 -1 반환

// Array.prototype.lastIndexOf : 뒤에서부터 요소가 위치한 인덱스를 리턴한다.
console.log(foodList.lastIndexOf('물회')); // 4
console.log(foodList.lastIndexOf('물회', 2)); // 결과 : 1, 2번 인덱스를 기준으로 왼쪽 방향으로 값을 찾음(즉, 삼겹살을 기준으로 왼쪽 방향)
console.log(foodList.lastIndexOf('삼겹살')); //

// Array.prototype.includes : 배열에 해당 요소 포함 여부를 boolean 값으로 리턴한다.
console.log(foodList.includes('물회'));
console.log(foodList.includes('삼겹살'));

// Array.prototype.includes : 배열에 해당 요소 포함 여부를 리턴한다.
const chinesFood = ['짜장면', '짬뽕', '우동'];

console.log(chinesFood);
chinesFood.push('탕수육');
chinesFood.push('양장피');

chinesFood.pop(); // 마지막 요소 제거
chinesFood.pop();
chinesFood.pop();

console.log(chinesFood);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열의 맨 앞에 요소 제거 후 반환
const chickenList = ['양념 치킨', '후라이드', '파닭'];

console.log(chickenList);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');
console.log(chickenList);

chickenList.shift();
chickenList.shift();
chickenList.shift();
console.log(chickenList);

// Array.prototype.concat : 두 개 이상의 배열을 결합하는 메소드
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '에스파'];
const idol3 = ['블랙핑크', '레드벨벳'];

const mix = idol1.concat(idol2);
console.log(mix);
const mix2 = idol3.concat(idol1, idol2);
console.log(mix2);

// Array.prototype.slice : 배열 요소 선택 후 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];
console.log(front.slice(1,3));  // 
console.log(front); // .slice는 원본 배열에 영향을 주지는 않음

console.log(front.splice(3,1, "React")); // 3번째 인덱스부터 시작해서 1개의 요소를 제거하고 React를 넣겠다.
console.log(front) // .splice는 원본에 영향을 준다.

// Array.prototype.join : 배열을 구붅로 결합하여 문자열로 반환
const snackList = ['사탕', '초콜렛', '껌', '과자'];
console.log(snackList.join());
console.log(snackList.join("/"));

// Array.prototype.reverse : 배열의 순서를 역순으로 반환
console.log([1,2,3,4,5].reverse());
