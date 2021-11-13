// class based inheritance
class User {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  getInfo() {
    return `Second Example: I'm ${this.fName} ${this.lName} of ${this.age} yrs old.`
  }
}

const newUser = new User('Iron', 'Man', 28);

console.log(newUser.getInfo());


// extending class properties
class User1 extends User {
  constructor(fName, lName, age, city) {
    super(fName, lName, age);
    this.city = city;
  }

  getMoreInfo() {
    return `Third Example: I'm ${this.fName} ${this.lName} of ${this.age} yrs from ${this.city}`;
  }
}

const newUser2 = new User1('ShahRukh','Khan','53','Delhi');

console.log(newUser2.getMoreInfo());