// fn(a,b) => fn(a)(b)

/**
 * Following are the reasons why currying is good :
 
✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
 */

// function f(a) {
//   return (b) => {
//     return a + b;
//   };
// }

// INFINITE CURRYING
// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// console.log(f(10)(20));

// Convert f(a,b,c) to f(a)(b)(c) for n number of parameters
function curry(func) {
  // args takes arguments in the form of array eg - [a, b, c]
  return function curriedFunc(...args) {
    //check if current args passed equals the number of args function expects
    if (args.length >= func.length) {
      // if yes, we spread args elements to pass into func (spread). This is our base case.
      return func(...args);
    } else {
      /* if not, we return a function that collects the next arguments passed in next and 
        we recursively call curriedFunc, accumulating and spreading the values of args first and then
        the values of next. next will take into consideration a variable amount of next arguments
        e.g (1, 2) (1) (1,2,3) */
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

// curriedJoin(1, 2)(3); // '1_2_3'
