export default class Person {
  constructor(name) {
    this.name = name;
  }

  move = () => {
    console.log(`${this.name} is moving`);
  };
}

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   move = () => {
//     console.log(`${this.name} is moving`);
//   };
// }
// export default Person;
