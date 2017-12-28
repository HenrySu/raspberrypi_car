let CarController = require("./hardwareControllers/carController");
let WheelMotorController = require("./hardwareControllers/wheelMotorController");

class CarFactory{
    createZhiyuCar(){
        let leftWheel = new WheelMotorController({forwardPinNum: 22, backwardPinNum: 27});
        let rightWheel = new WheelMotorController({forwardPinNum: 25, backwardPinNum: 24});
        return new CarController(leftWheel, rightWheel);
    }
}

module.exports = CarFactory;