Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it is not callable");
  }
  context.fn = this;
  context.fn(...args);
};
