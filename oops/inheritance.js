class Vehicle{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log(`The Car of ${this.brand} that is ${this.model} has started`)
    }
}

class car extends Vehicle {
    constructor(brand,model,fuelType) {
        super(brand,model);
        this.fuelType = fuelType;
    }

    showfuelType(){
        console.log(`the car of ${this.brand}, model ${this.model} has ${this.fuelType}`);
    }
}

const myCar = new car("Swift", "Desire", "Diesel");
myCar.start();
myCar.showfuelType();
