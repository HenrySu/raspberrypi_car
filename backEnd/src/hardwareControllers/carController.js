let gpio = require("pi-gpio");
let async = require("async");
require("./wheelMotorController");
let WheelPositions = require("../wheelPositions");

class CarController{

    constructor(){
        this.wheelMap = new Map();
    }

    addWheel(wheelPosition, wheelMotorController){
        this.wheelMap.set(wheelPosition, wheelMotorController);
    }
    //todo: use async and make all wheels move simutaniously
    moveForward(){
        this.wheelMap.forEach((wheelMotorController,k,m) => wheelMotorController.forward());
    }

    moveBackword(){
        this.wheelMap.forEach((wheelMotorController,k,m) => wheelMotorController.backward());
    }
    turnLeft(){
        this.wheelMap[WheelPositions.Left].backward();
        this.wheelMap[WheelPositions.Right].moveForward();
    }
    turnRight(){}
}

module.exports = CarController;