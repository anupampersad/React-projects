function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    const cache = JSON.stringify(args);
    if (res[cache]) {
      return res[cache];
    } else {
      const result = fn.call(context || this, ...args);
      res[cache] = result;
      return result;
    }
  };
}

const heavyOperationProduct = (a, b) => {
  for (let i = 0; i < 1_00_000; i++) {}
  return a * b;
};

export default myMemoize;
