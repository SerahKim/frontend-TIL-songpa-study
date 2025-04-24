// 03. getter, setter
/*
getter와 setter를 통해 객체의 프로퍼티를 더 안전하고 직관적으로 다룰 수 있게 해줌
*/
class Product {
    constructor(name, price) {
        // setter를 활성화한다.
        this.name = name;
        this.price = price;
    }

    // getter 함수 : 값을 가져올 때 호출되는 함수
    get name() {
        console.log('get name 동작');
        // _name : 내부 데이터 보호, 외부에서 직접 변경 어려움
        return this._name; 
    }

    get price() {
        console.log('get price 동작');
        return this._price; // _price : 내부 데이터 보호, 외부에서 직접 변경 어려움
    }

    //setter 함수 : 값을 설정할 때 호출되는 함수
    set name(value) {
        console.log('set name 동작');
        // this._name은 내부에서 직접 값을 저장할 실제 속성
        this._name = value;
    }

    set price(value) {
        console.log('set price 동작');
        if(value <= 0) {
            console.log('가격은 음수일 수 없습니다.');
            this._price = 0;
            return;
        }
        this._price = value;
    }
}

// Product('갤럭시', 200000) : setter가 호출됨 -> set name, set price 동작
// this.name = name -> set name('갤럭시') 실행 -> this._name = '갤럭시'
// this.price = price -> set name('200000') 실행 -> this._price = '200000'
let phone = new Product('갤럭시', 200000);
// phone.name : getter가 호출됨 -> get name 동작
// phone.price : getter가 호출됨 -> get price 동작
// get name() -> return this._name 실행
// get price() -> return this._price 실행
console.log(phone.name + "," + phone.price);


// computer.name : getter가 호출됨 -> get name 동작
// computer.price : getter가 호출됨 -> get price 동작
// computer.price = -200000 : setter가 호출된 -> set prie
let computer = new Product('맥북', -200000);
console.log(computer.name + "," + computer.price);