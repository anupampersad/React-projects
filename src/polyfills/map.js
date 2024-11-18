Array.prototype.myMap = function (cb) {
  const resultsArray = [];
  for (let i = 0; i < this.length; i++) {
    resultsArray.push(cb(this[i], i, this));
  }
  return resultsArray;
};
