const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
  const cb = (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  }
  const newArgs = args.concat(cb);
  fn(...newArgs);
});

export default promisify;