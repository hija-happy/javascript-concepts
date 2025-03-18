 // example 1 - Normal one for understanding
 console.log("Example 1");
 function outer(nameO){
    return  function inner(nameI) {
         console.log(`My inner name is ${nameO} Outer Name is ${nameI}`);
     }
 }
 const first = outer("Hija");
 first("Happy");
 console.log("Exmaple 2");


 //example 2 - encapsulation

 function counter() {
     let count = 0;

     return {
         increment: function (){
             count++;
             console.log(count);
         },
         decrement: function (){
             count--;
             console.log(count);
         },
 
         getCount: function(){
             return count;
         }
     };
   
 }

 const CounterOb = counter();
 CounterOb.increment();


 //example 3 factory function
 //The function that helps us creating instances without using new keyword
 console.log("Exmaple 3");
 function multiply(factor){
     return function (number){
         return number * factor;
     
     };
 }

 const double = multiply(2);
 const triple = multiply(5);
 
