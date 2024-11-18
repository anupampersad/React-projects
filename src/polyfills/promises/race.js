// Returns first resolved or rejected promise

Promise.myRace = function (promisesArray) {
  if (!Array.isArray(promisesArray)) {
    throw new Error("Should be an array");
  }

  return new Promise((resolve, reject) => {
    for (let index = 0; index < promisesArray.length; index++) {
      const promise = promisesArray[index];
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
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
