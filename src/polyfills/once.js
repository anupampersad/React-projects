function myOnce(fn, context) {
  let ran = false;
  return function (...args) {
    if (!ran) {
      ran = true;
      return fn.call(context || this, ...args);
    } else {
      return;
    }
  };
}

export default myOnce;
