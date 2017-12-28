let CarController = require("./hardwareControllers/carController");
let WheelMotorController = require("./hardwareControllers/wheelMotorController");

class CarFactory{
    createZhiyuCar(){
        let leftWheel = new WheelMotorController(22, 27);
        let rightWheel = new WheelMotorController(25, 24);
        return new CarController(leftWheel, rightWheel);
    }
}

module.exports = CarFactory;