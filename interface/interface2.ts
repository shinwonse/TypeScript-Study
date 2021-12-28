interface Person2 {
  name: string;
  age?: number; // 물음표 사용하면 있을 수도 있고 없을 수도 있고
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: 'Wonse', age: 39});
hello2({name: 'mark'});