const Gpio = process.env.NODE_ENV !== "production" ? 
    require("pigpio-mock").Gpio : 
    require("pigpio").Gpio;

class WheelMotorController {
    constructor(forwardPinNum, backwardPinNum){
        this.forwardGpio = new Gpio(forwardPinNum, {mode:Gpio.OUTPUT});
        this.backwardGpio = new Gpio(backwardPinNum, {mode:Gpio.OUTPUT});
    }
    
    forward(){
        this.forwardGpio.digitalWrite(1);
        this.backwardGpio.digitalWrite(0);
    }
    backward(){
        this.forwardGpio.digitalWrite(0);
        this.backwardGpio.digitalWrite(1);
    }

}

module.exports = WheelMotorController;