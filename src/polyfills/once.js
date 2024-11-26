// function myOnce(fn, context) {
//   let ran = false;
//   return function (...args) {
//     if (!ran) {
//       ran = true;
//       return fn.call(context || this, ...args);
//     } else {
//       return;
//     }
//   };
// }

function myOnce(fn, context) {
  let ran = false;
  return function () {
    if (!ran) {
      ran = true;
      return fn.apply(context || this, arguments); // arguments is a list of args present inside the func
    } else {
      return;
    }
  };
}

export default myOnce;
