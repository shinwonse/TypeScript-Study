let isDone: boolean = false; // 이렇게 타입 설정

isDone = true;

console.log(typeof isDone);

let isOk: Boolean = true; // primitive 타입을 대문자로 쓰지 않음

let isNotOk: boolean = new Boolean(true); // 이렇게 쓰지 않고 보통은 위와 같이 리터럴로 사용함