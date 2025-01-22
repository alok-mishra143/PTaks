Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]).then(results => console.log(results)); // [1, 2, 3]
  




  Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Fast"), 100)),
    new Promise(resolve => setTimeout(() => resolve("Slow"), 200)),
  ]).then(result => console.log(result)); // "Fast"



  Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
  ]).then(results => console.log(results));
  