// Returns a list of all the promises
// If any promise is rejected, all the prmoses are rejected and further execution is stopped

Promise.myAll = function (promisesArray = []) {
  if (!Array.isArray(promisesArray)) {
    throw new Error("Should be an array");
  }

  return new Promise((res, rej) => {
    const resultsArray = Array(promisesArray.length);
    let pending = promisesArray.length;

    for (let index = 0; index < promisesArray.length; index++) {
      const promise = promisesArray[index];
      promise
        .then((data) => {
          resultsArray[index] = data;
          pending--;
          if (pending === 0) {
            res(resultsArray);
          }
        })
        .catch((e) => {
          pending--;
          rej("Promises failed", e);
        });
    }
  });
};

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("P1 resolved");
//   }, 1000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("P2 rejected");
//   }, 2000);
// });

// Promise.myAllSettled([p1, p2])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
