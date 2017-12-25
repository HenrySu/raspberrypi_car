let carController = require("./hardwareControllers/carController");
let wheel = require("./hardwareControllers/motorController");

class CarBuilder{
    constructor(){
        this.wheelPosition2Motors = new Map();
    }
    //withWheel :: wheelConfig -> CarBuilder
    //wheelConfig{position:"leftFront", pinNum:12, isReverse:true}
    withWheel(wheelConfig){
        this.wheelPosition2Motors.set(wheelConfig.wheelPosition, new wheel(wheelConfig.pinNum, wheelConfig.isReverse));
        return this;
    }

    build(){
        let car = new carController();
        this.wheelPosition2Motors.forEach((v,k,m)=>{
            car[k] = v;
        });

        return car;
    }
}

module.exports = CarBuilder;