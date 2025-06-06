/*
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution (a, b) {

    let pastDate = 0;
    let result = 0;
    let dayIndex = 0;

    for (let i = 1; i <= a -1; i++) {
        pastDate += dayInMonth[i - 1];
    }

    result = pastDate + b - 1;

    dayIndex = (3 + result) % 7;

    return date[dayIndex]
}

console.log(solution(5, 24));