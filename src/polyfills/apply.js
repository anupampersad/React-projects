Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called from non-object");
  }

  context.fn = this;
  context.fn(...args);
};
