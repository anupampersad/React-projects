// https://medium.com/@tanner.west/a-few-insights-for-better-understanding-redux-saga-and-javascript-generators-68efaef44c9e

export async function* fetchData() {
  yield new Promise((resolve, reject) => {
    const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = res;
    resolve(data);
  });
}
