// let MyName: string = null; // strict true 이기 때문에 null이나 undefined 불가

let v: void = undefined; // void랑 undefined 가능

let union: string | null = null; // union 타입, string 타입과 null의 합집합

union = "Mark"; 

// 값을 할당하지 않은 변수는 undefined라는 값을가진다.
// 무언가가 아예 준비가 안된 사앹
// object의 property가 없을 때도 undefined 이다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined이다.

let u: undefined = undefined;

console.log(u); // undefined
console.log(typeof u); // undefined