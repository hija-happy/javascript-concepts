
//  Primitives (numbers, strings, booleans) are stored in the stack.
//  Objects, arrays, and functions are stored in the heap, and the variable holds a reference to the object.



let number = 10; // The memory is allocated in the stack (Primitive DT)

let MYname = {firstname:"Hija", lastname:"happy"}; //allocated in heap (as reference type)





//Garbage collection
MYname = null; // this object cannot be accessed and willbe stored in garbage collection