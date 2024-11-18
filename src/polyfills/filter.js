Array.prototype.myFilter = function (cb) {
  let resultsArray = [];
  for (let i = 0; i < this.length; i++) {
    const computation = cb(this[i], i, this);
    if (computation) {
      resultsArray.push(computation);
    }
  }

  return resultsArray;
};
