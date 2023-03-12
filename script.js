class Person {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("he's eating");
  }
  static jalan(x) {
    return `${x} is walking!`;
  }
}

class Job extends Person {
  constructor(name) {
    super(name);
  }
}

const Progammer = new Job("alim");

// const alim = new Person("alim");

// menempel pada object :
// alim.umur = 27;
// alim.makan();
// Person.makan();

// static menempel pada clss :
// Person.jalan("alim");
