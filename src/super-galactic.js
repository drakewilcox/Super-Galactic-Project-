export class Calculator {
  contructor() {
    this.age = "";
    this.mercuryAge = "";
    this.venusAge = "";
    this.marsAge = "";
    this.jupiterAge = "";
    this.sex = "";
    this.lifeExp = "";
  }
  addAge(age) {
    this.age = age;
  }
  mercury() {
    this.mercuryAge = this.age / .24;
    console.log(this.mercuryAge);
  }
}