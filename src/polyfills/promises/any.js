Promise.myAny = function (promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error("Should be an array");
  }

  return new Promise((res, rej) => {
    const isPending = promiseArray?.length;
    const rejectCount = 0;
    const resultsArray = Array(promiseArray?.length);

    for (let index = 0; index < promiseArray.length; index++) {
      const promise = promiseArray[index];

      promise
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          isPending--;
          rejectCount++;
          resultsArray[index] = err;
          if (isPending === 0 && rejectCount === promiseArray.length) {
            rej(resultsArray);
          }
        });
    }
  });
};
