const Gpio = process.env.NODE_ENV !== "production" ? 
    require("pigpio-mock") : 
    require("pigpio");

class MotorController {
    constructor(pinNum, isReverse = false){
        this.pinNum = pinNum;
        this.isReverse = isReverse;
        this.gpio = new Gpio(this.pinNum, {mode:Gpio.OUTPUT});
    }
    
    forward(){
        this.gpio.digitalWrite(1);
    }
    backward(){
        this.gpio.digitalWrite(1);
    }

}

module.exports = MotorController;