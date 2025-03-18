//Abstraction is mainly used to hide data
//makes use of constructor function along with encapsulation
                                    

// function based
function Car(brand, model){
     this.brand = brand;
     this.model = model;
     this.start = function(){
        console.log(`The Car of ${brand} with model name ${model} is going to start`);
}
     } 

const carObj= new Car("Tesla", "Model S");
carObj.start();


//class based

class NewCar {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log(`${this.brand}'s ${this.model} has started`);
    }
}
const myCar = new NewCar("Swift", "Desire");
myCar.start();