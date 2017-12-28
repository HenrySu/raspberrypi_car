let CarController = require("./hardwareControllers/carController");
let WheelMotorController = require("./hardwareControllers/wheelMotorController");

class CarFactory{
    createZhiyuCar(){
        let leftWheel = new WheelMotorController({forwardPinNum: 22, backwardPinNum: 27, pwmPinNum: 18});
        let rightWheel = new WheelMotorController({forwardPinNum: 25, backwardPinNum: 24, pwmPinNum: 23});
        return new CarController(leftWheel, rightWheel);
    }
}

module.exports = CarFactory;