let carController = require("./hardwareControllers/carController");
let wheel = require("./hardwareControllers/motorController");

class CarBuilder{
    constructor(){
        this.wheelPosition2Motors = new Map();
    }
    //withWheel :: string -> number -> bool -> CarBuilder
    withWheel(postion, pinNum, isReverse){
        this.wheelPosition2Motors.set(position, new wheel(pinNum, isReverse));
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