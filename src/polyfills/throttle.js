// function throttle(cb, delay) {
//   let last = 0;

//   return (...args) => {
//     let now = new Date().getTime();
//     if (now - last < delay) return;
//     last = now;
//     return cb(...args);
//   };
// }

function throttle(cb, delay) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

export default throttle;
