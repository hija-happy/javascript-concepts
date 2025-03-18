// microtask - promise resslove, 
// macrotask settimeout , setinterval, setImmediate, IDBObjectStore
//  microtask has a largest priority

console.log("start"); //exceutes in call stack

Promise.resolve("Im a promise").then((value) => console.log(value)); // in microtask has 1st  priority after call stack

setTimeout(() => {
    console.log("1st time out"); // then later macro task has the priority
})

console.log("end"); //call stack