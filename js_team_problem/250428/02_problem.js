/*
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.

풀이 과정
1. 후보자 추출: 입력받은 이름 목록에서 중복을 제거하여 실제 후보자 명단을 추출합
2. 득표수 집계: 각 후보자가 받은 표 수를 계산
3. 후보자-득표수 매핑: 후보자 이름과 해당 득표수를 대응시키는 자료구조를 생성
4. 최다 득표 수 확인: 집계된 표 중 가장 높은 표 수를 찾아냄.
5. 최다 득표자 확인: 최다 득표 수를 받은 후보자의 이름을 식별
6. 결과 출력: 반장으로 선출된 학생의 이름과 받은 표 수를 형식에 맞게 출력
*/

let candidateArr = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(' ');
/*
1. 후보자 추출 : candidatrArr의 중복 요소 제거
해당 배열(candidateArr)에서 해당 요소(name)가 위치하고 있는 첫번째 인덱스(indexOf)를 반환하고
그 값이 해당 요소(name)의 인덱스 값과 같지 않으면 다른 곳에도 그 해당 요소(name)이 있다는 것을 의미
따라서, 인덱스의 값이 같다는 조건에 일치하는 것들만 nameArr 배열에 담기게됨.(filter)
즉, 배열의 중복 요소가 제거되는 것.
*/
let nameArr = candidateArr.filter((name, index, arr) => arr.indexOf(name) == index); // [ '원범', '혜원', '유진' ]

// 2. 득표수 집계
let countArr = new Array(nameArr.length); // 득표수 집계를 위해 후보자의 길이(nameArr.length)를 가진 빈 배열 생성
let obj = {}; // 매핑을 위한 빈 객체 리터럴 생성

for(let i = 0; i < nameArr.length; i++) { // 해당 후보자(nameArr[i])가 집계 결과(candidateArr)에서 얼마나 반복되는지 확인해야함.
    
    countArr[i] = 0; // 해당 후보자의 인덱스(nameArr의 인덱스)와 동일한 인덱스 위치에 각 후보자가 받은 표 수를 countArr에 담음.

    // 집계 결과를 돌면서 
    for(let j = 0; j < candidateArr.length; j++) { 
        // 해당 후보자의 이름이 집계 결과에 있을 때마다 
        if(candidateArr[j] == nameArr[i]) {
            countArr[i]++; // 해당 후보자 인덱스(i) 위치를 가진 countArr 요소에 누적시킴 
        }
    }

    // 3. 후보자-득표수 매핑
    obj[nameArr[i]] = countArr[i]; // nameArr[i]라는 key에는 countArr[i]라는 value로 매핑됨.
}

// 4. 최다 득표수 확인
let max = Math.max(...countArr); // spread 문법인 ...countArr을 통해 countArr의 요소를 개별적인 인수로 만듦.

// 5. 최다 득표자 확인
// 최다 득표수(max)를 value 값으로 가진 key 값을 추출
/*
- Object.keys(obj) : obj라는 객체의 key들로만 구성된 배열 반환
- find() : 해당 함수식을 만족하는 첫번째 요소를 반환
- (element) => obj[element] == max 
Object.keys(obj) 배열의 요소들을 element 변수에 저장, 
모든 배열 요소들을 돌면서 객체의 키(element)가 해당하는 value값(obj[element]) 중 최다 득표수와 일치하는 key값을 추출
*/
let elected = Object.keys(obj).find((element) => obj[element] == max);

// 6. 결과 값 출력
console.log(`${elected}(이)가 총 ${max}표로 반장이 되었습니다. `);


