const gpio = process.env.NODE_ENV !== "production" ? 
    require("pigpio-mock") : 
    require("pigpio");

class MotorController {
    constructor(pinNum, isReverse = false){
        this.pinNum = pinNum;
        this.isReverse = isReverse;
        gpio.open(this.pinNum, "output");
    }
    
    forward(){
        gpio.write(this.pinNum, 1);        
    }
    backward(){
        gpio.write(this.pinNum, 0);        
    }

}

module.exports = MotorController;