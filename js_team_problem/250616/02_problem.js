function solution(s) {

    if (s.length === 0) return 0;

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < s.length; i++) {
        

        if (s[0] === s[i]) {
            count1++;
        } else {
            count2++;
        }
        

        if (count1 === count2) {
            console.log(s.substr(i + 1));
            return 1 + solution(s.substr(i + 1));
        }
    }

    return 1;
}

console.log(solution("banana"))