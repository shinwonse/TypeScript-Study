console.log(Symbol("foo") === Symbol("foo")); // 두 개의 결과가 다름

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];

// 함수로 사용할 때에는 대문자 Symbol, 타입으로 사용할 때에는 소문자 symbol