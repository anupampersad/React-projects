// ---------- call
// function sayHello() {
//   return "Hello " + this.name;
// }

// let obj = { name: "Piyush" };
// sayHello.call(obj); //Hello Piyush

// ---------- apply
// function sayHello(day, status) {
//   return "Hello " + this.name + " today is " + day + " and feel " + status;
// }

// let obj = { name: "Piyush" };
// sayHello.apply(obj, ["tuesday", "good"]); // 'Hello Piyush today is tuesday'

// ---------- bind
// We can bind functons only once
// function sayHello() {
//   return "Hello " + this.name;
// }

// var obj = { name: "Piyush" };

// const helloFn = sayHello.bind(obj);

// console.log(helloFn());

// ------------ Output based Q
// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // 🥑 (this inside data points to data obj)
//   console.log(data.getStatus.call(this)); // 😎 (this here points to object where setTimeout is present, global object and hence referecences tp oiter most emoji)
// }, 0);

// ------------ Output based Q
// Append one array in another array

// const array = ['a', 'b'];
// const elements = [0, 1, 2];

// array.push.apply(array, elements); //[a,b,0,1,2]

// ------------ Output based Q
// Find min/max in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min
