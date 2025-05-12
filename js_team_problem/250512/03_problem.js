/*
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023
*/

nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
}

arr = [];

// korea 면적과의 차이값을 구하는 함수
function difference() {
    for (let key in nationWidth) {
        result = Math.abs(nationWidth['korea'] - nationWidth[key]);
        arr.push(result);
    }

    return arr;
}

// 면적을 담은 배열을 오름차순으로 정렬 후 두번쨰로 작은 값을 반환하는 함수
function secondMin(arr) {
    arr.sort((a,b) => a - b);

    return arr[1];
}

differenceArea = secondMin(difference());

// 해당 면적을 갖는 키 값을 찾는 메소드
function founCountry(n) {
    for (let key in nationWidth) {
        if (nationWidth[key] == n + nationWidth['korea']) {
            return key;
        }
    }
}

console.log(founCountry(differenceArea) + " " + differenceArea );