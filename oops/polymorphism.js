//Example 1 --  METHOD OVERRIDE
// 
 
class Animal {
    speak() {
        console.log("Animals makes sound")
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog barks");   // here the parent function gets overrided when called
    }
}

class Cat extends Animal{ // here the parent function gets overrided when called
    speak(){
        console.log("Cat Meows");
    }
}

const myCat = new Cat();
const myDog = new Dog();

myCat.speak();
myDog.speak();

//Example 2 - Method Overriding using super()
// this calls the parent method before overidding

class Mom {
    trip(){
        console.log("Kids come lets gooo")
    }
}

class Kids extends Mom {
    trip(){
        super.trip(); // calls before overridng
        console.log("Yes mom we are coming");
    }
}

const myTrip = new Kids();
myTrip.trip();

myTrip.trip();