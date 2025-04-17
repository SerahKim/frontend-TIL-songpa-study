/* 03_중첩 함수 */
function outer() {
    var outerVal = '외부함수';
    function inner() {
        var innerVal = '내부함수';
        console.log(outerVal, innerVal); // 호출 가능, 외부 함수의 변수를 참조할 수 있다.
    }
    inner();
}
outer();
// inner(); // 에러 발생(ReferenceError)