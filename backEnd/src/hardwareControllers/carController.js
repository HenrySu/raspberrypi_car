let gpio = require("pi-gpio");
let async = require("async");
require("./motorController");

class CarController{
    constructor(leftFrontWheel, rightFrontWheel, leftBackWheel, rightBackWeel){
        this.leftBack = leftBackWheel;
        this.leftFront = leftFrontWheel;
        this.rightBack = rightBackWeel;
        this.rightFront = rightFrontWheel;
        this.wheels = [leftBackWheel, leftFrontWheel, rightFrontWheel,rightBack];
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