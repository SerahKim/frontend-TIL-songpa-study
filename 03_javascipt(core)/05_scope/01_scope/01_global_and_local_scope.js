/* 01.전역과 지역 스코프 */

var x = 'gloabal x';
var y = 'gloabal y';

function outer() {

    var z = 'outer local z';
    
    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        console.log(x); // 결과 : undefined, 내부 먼저 참조하고 외부를 참조하기 때문, 내부에 있는 변수와 변수명이 같기 때문에 발생하는 결과
        console.log(y);
        var x = "inner local x";
        console.log(x);
        console.log(y);
        console.log(z);
    }; 

    inner();
}

outer();

console.log(x);
console.log(z); //outer() 함수 내부에 있는 값을 외부에서 참조하려고 하기 때문에 에러 발생