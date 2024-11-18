/**
 * strict mode doen't allow to acces global object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * The this refers to the object in object methods.
 * This alone denotes the global object.
 * The global object is referred to by the this in a function.
 * In a function, this is undefined in strict mode.
 * In the case of an event, the element that received the event is referred to as this.
 * call(), apply(), and bind() methods can all refer to any object using this.
 */

/**
 * Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined.
 * This behavior makes arrow functions particularly useful for callbacks and preserving context.
 * However, arrow functions do not have their own this binding.
 * Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.
 */

const obj = {
  name: "Anupam",
  age: 28,
  getName() {
    // this inside a function references to object where the function is present
    console.log(this.name); // Anupam
  },
  getNameAgain: () => {
    // this inside an arrow function references to object where the parent function is present (function parent to arrow fucntion)
    console.log(this.name); // undefined because no parent fucntion (in non strict mode, here 'this' will point to window)
  },
  getNameAgain2() {
    const func = () => {
      // this inside an arrow function references to object where the parent function is present (function parent to arrow fucntion)
      console.log(this.name); // undefined because no parent fucntion (in non strict mode, here 'this' will point to window)
    };
    func(); // Anupam
  },
};

function Person({ name, age }) {
  this.name = name;

  this.age = age;

  this.talk = function () {
    console.log(this);
    // References to person object
  };

  setTimeout(function () {
    console.log(this);
    // referecnes to window object in non-strict mode
    // calling this inside an object does not mean it would refer to object
    // here the timeout function executes in a completely different scope
  }, 1_000);

  setTimeout(
    function () {
      console.log(this);
    }.bind(this),
    // here the "this" inside bind function references to object (bind is outside the body of callback function)
    1_000
  );

  setTimeout(() => {
    console.log(this);
    // this is inside callback arrow function
  }, 1_000);
}

/**
 * The value of this is not the object that has the function as an own property, but the object that is used to call the function.
 * You can prove this by calling a method of an object up in the prototype chain.
 */

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
// obj3 does not have getThis, it's prtotype obj1 has but since obj3 is envoking getThis(), "this" points to obk3 and not obj1

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

// --------- Inside constructor functions
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();
