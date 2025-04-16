/* 04. undefined and null */
/*
undefined : 값을 할당해주지 않은 것
null : 변수에 값이 없다는 것을 의도적으로 명시할 때 사용, 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션 수행
*/


var undef;
console.log(undef); // 결과 : undefined
console.log(typeof(undef)); // 결과 : undefined

var nullVal = 'something';
console.log(nullVal); // 결과 : something
nullVal = null; // 이전 참조를 제거하여 더 이상 'something'을 참조하지 않는다.
console.log(nullVal); // 결과 : null
console.log(typeof(nullVal)); // 결과 : object, 예상으로는 null이 나오는게 맞지만 자바스크립트 자체 오류로 인해 object가 나옴
