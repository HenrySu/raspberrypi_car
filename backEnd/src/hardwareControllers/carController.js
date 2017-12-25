let gpio = require("pi-gpio");
let async = require("async");
require("./motorController");

class CarController{
    constructor(){
        this.wheels = [this.leftBack, this.leftFront, this.rightFront,this.rightBack];
    }

    //todo: use async and make all wheels move simutaniously
    moveForward(){
        for(let wheel in wheels){
            wheel.forward();
        }
    }

    moveBackword(){
        for(let wheel in wheels){
            wheel.backward();
        }
    }
    turnLeft(){}
    turnRight(){}
}

module.exports = CarController;