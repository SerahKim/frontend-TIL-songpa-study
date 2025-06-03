const strArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];


function solution(s) {
    for (let i = 0; i < strArr.length; i++) {
        if (s.includes(strArr[i])) {
            s = s.replace(strArr[i], String(i));
        }
    }

    return parseInt(s)
}

console.log(typeof solution("123456789"));