// to create objects using encapsulation that will keep the data and behaviour inside an objectt

const car ={
    brand : "Tesla",
    model: "Model S",
    start: function() {
        console.log(`Starting the ${this.model} of ${this.brand} immediateky`)
    }
}

car.start();


