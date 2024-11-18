Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    this.fn(...args, ...newArgs);
  };
};
