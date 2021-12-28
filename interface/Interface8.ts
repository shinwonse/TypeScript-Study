interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male',
};

// p81.gender = 'femail'; gender는 읽기 전용임