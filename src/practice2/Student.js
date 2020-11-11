import { Person } from "./Person";

class Student extends Person {
  constructor(name, className) {
    super(name);
    this.name = name;
    this.className = className;
  }

  study = () => {
    this.move();
    console.log(`${this.name} is studying in ${this.className}`);
  };
}
export { Student };
