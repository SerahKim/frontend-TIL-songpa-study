/* 02. 생성자 함수 */

// 객체 리터럴
// 중복해서 같은 객체 리터럴을 생성하는 것은 비효율적이다.
const student1 = {
    name : '홍길동',
    age : 16,
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세입니다.`
    }
}

const student2 = {
    name : '유관순',
    age : 20,
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세입니다.`
    }
}

// 생성자 함수에 의해 객체를 생성하면 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Student(name, age) {

    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    // 예를 들어 new Student('장보고', 30)을 studnet3라는 변수에 담아서 호출하면,
    // 이 함수 안의 this는 student3 인스턴스를 가리키게 된다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세이다`
    }
}

const student3 = new Student('장보고', 30);
const student4 = new Student('신사임당', 40);

// 메소드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());