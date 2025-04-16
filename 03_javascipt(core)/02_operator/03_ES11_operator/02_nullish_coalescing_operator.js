/* 02. null 병합 연산자 */
/* null 병합 연산자는 null, undefined가 아닐 경우 그대로 반환한다. */

// null이거나 undefined인 경우에만 우항의 값 출력
var test = null ?? '기본값';
console.log(test);
// ''은 빈 문자열이기 때문에 ''이 출력됨.
var test = '' ?? '기본값';
console.log(test);