Promise.myAllSettled = function (promisesArray) {
  if (!Array.isArray(promisesArray)) {
    throw new Error("Should be an array");
  }

  return new Promise((resolve, reject) => {
    let resultsArray = Array(promisesArray);
    let pending = promisesArray.length;
    let rejectCount = 0;
    for (let index = 0; index < promisesArray.length; index++) {
      const promise = promisesArray[index];

      promise
        .then((data) => {
          resultsArray[index] = { status: "fulfilled", value: data };
          pending--;
          if (pending === 0) {
            resolve(resultsArray);
          }
        })
        .catch((error) => {
          resultsArray[index] = { status: "rejected", reason: error };
          pending--;
          rejectCount++;
          if (rejectCount === promisesArray.length) {
            reject("All promises failed");
          }
          if (pending === 0) {
            resolve(resultsArray);
          }
        });
    }
  });
};

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("P1 resolved");
//     }, 1000);
//   });
//   const p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("P2 rejected");
//     }, 2000);
//   });

//   Promise.myAllSettled([p1, p2])
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
