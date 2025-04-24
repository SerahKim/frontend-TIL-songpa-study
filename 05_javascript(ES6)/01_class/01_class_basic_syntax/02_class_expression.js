// 02. 클래스 표현식

// (1) 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log('안녕하세요?');
    }
};

new Tutor().teach(); // 인스턴스화를 시킨 후에 메소드를 호출할 수 있다.

// (2) 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log('자바스크립트 es6');
    }
};

new Tutee().learn();

// (3) 클래스 동적 생성
function makeTutee(message) {
    return class {
        feedback () {
            console.log(message);
        }
    }
}

let SecondTutee = makeTutee('메시지');
new SecondTutee().feedback(); // 함수를 인스턴스화 시킨 후 클래스의 메소드 호출