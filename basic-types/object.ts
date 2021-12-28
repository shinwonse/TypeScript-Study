// create by objec literal
const person1 = { name: "Mark", age: 39 }; 

// person1 is not "object" type. primitive 타입이 아님
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name: 'Mark', age: 39}); // object | null, 보통 이렇게 씀

// object
// a type that represents the non-primitive type
// primitive type이 아닌 것을 나타내고 싶을 때 사용하는 타입

// non-primitive type
// not number, string, boolean, bigint, symbol, null, or undefined