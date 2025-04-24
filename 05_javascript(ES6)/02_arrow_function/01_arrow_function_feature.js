// 01. 화살표 함수의 특징
/*
화살표 함수는 기존 함수보다 표현만 간략한 것이 아니라 내부 동작 똰 간략화 되어있다.
일반 함수와의 차이점을 알아보자
 */

// 1. 화살표 함수는 this를 가지지 않는다.
let theater = {
    store : '건대점',
    titles : ['어벤져스', '겨울 왕국', '스파이더맨', '라이온킹', '알라딘'],

    showMovieList() {
        this.titles.forEach(
            // 화살표 함수 본문의 this에 접근하면 외부에서 값을 가져온다.
            (title) => console.log(this.store + ":" + title)
        );
    }
};

theater.showMovieList();

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
const arrowFunc = () => {};
// new arrowFunc(); // 화살표 함수는 생성자가 없기 때문에 이런 식으로 호출 불가능
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
console.log(arrowFunc.hasOwnProperty('prototype')); // false : prototype이라는 프로퍼티가 없다.

// 3. 화살표 함수는 super를 가지지 않는다.
class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    };

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(lostWeight) {
        if(this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg의 감량되어 ${this.weight}kg이 되었습니다.`);
    }
}

class Tiger extends Animal {
    move(lostWeight){
        // 화살표 함수는 super를 지원하지 않아 super를 외부 함수에서 가져오기 때문에 Animal의 move()호출이 가능하다.
        setTimeout(() => super.move(lostWeight), 1000); // 1초 뒤에 부모 클래스인 Animal의 move 메소드 호출
        console.log(`먹이를 찾아 산기슭을 어슬렁`);
    }
}

let tiger = new Tiger('백두산 호랑이', 80);
tiger.move(1);