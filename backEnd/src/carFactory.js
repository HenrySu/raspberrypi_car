let carController = require("./hardwareControllers/carController");
let wheel = require("./hardwareControllers/motorController");

class CarFactory{
    constructor(){
        this.wheelPosition2Motors = new Map();
    }
    //withWheel :: wheelConfig -> CarBuilder
    //wheelConfig{position:"left", forwardPinNum:22, backwardPinNum:27}
    withWheel(wheelConfig){
        this.wheelPosition2Motors.set(wheelConfig.wheelPosition, new wheel(wheelConfig.forwardPinNum, wheelConfig.backwardPinNum));
        return this;
    }

    build(){
        let car = new carController();
        this.wheelPosition2Motors.forEach((v,k,m)=>{
            car[k] = v;
            car.addWheel(k, v);
        });

        return car;
    }
}

module.exports = CarFactory;