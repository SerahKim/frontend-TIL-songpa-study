/*
[둘만의 암호]

- 문제 설명

두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.
문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.
예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 
따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 
나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.
두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.

- 제한사항
5 ≤ s의 길이 ≤ 50
1 ≤ skip의 길이 ≤ 10
s와 skip은 알파벳 소문자로만 이루어져 있습니다.
skip에 포함되는 알파벳은 s에 포함되지 않습니다.
1 ≤ index ≤ 20

- 입출력 예
s	       skip	  index	  result
"aukks"	   "wbqd"	5	  "happy"

- 입출력 예 설명
입출력 예 #1
본문 내용과 일치합니다.

abcdefghijklmnopqrstuvwxyz
*/

// 1. s를 돌면서 해당 문자 + index를 했을 때 skip에 해당하는 문자가 있는 지 판단
// 2. 없다면 그냥 +5 있다면 해당되는 애들은 제외하고 +5
// 3. +5를 했을 때 z를 넘어간다면 다시 a로 돌아옴


function solution(s, skip, index) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    const filterAlph = [...alph].filter(a => !skip.includes(a));

    const result = [...s].map(item => {
        const foundIndex = [...filterAlph].indexOf(item);
        return filterAlph[(foundIndex + index) % filterAlph.length];
    });

    return result.join("");
}

console.log(solution("aukks", "wbqd", 5))

