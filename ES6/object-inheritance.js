// Object based inheritance
const obj1 = {
  name: 'Niranjan',
  city: 'Bangalore',
  getInfo: function () {
    console.log(`First example: I'm ${this.name} from ${this.city}`)
  }
};

obj1.getInfo();

obj2 = Object.create(obj1);

obj2.name = 'Thrineshwar';

obj2.getInfo();