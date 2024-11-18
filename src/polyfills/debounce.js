const debounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
      // cb.apply(this, args);
    }, [delay]);
  };
};

export default debounce;

/*
  function debounce(func, wait) {
  let timeout;
  
  return function() {
    const context = this;
    const args = arguments;
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
 */
