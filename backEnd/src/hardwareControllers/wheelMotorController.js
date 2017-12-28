const Gpio = process.env.NODE_ENV !== "production" ? 
    require("pigpio-mock").Gpio : 
    require("pigpio").Gpio;

class WheelMotorController {
    //wheelConfig -> WheelMotorController
    //wheelConfig example {forwardPinNum: 22, backwardPinNum: 27, pwmPinNum: 18}
    constructor(wheelConfig){
        this.forwardGpio = new Gpio(wheelConfig.forwardPinNum, {mode:Gpio.OUTPUT});
        this.backwardGpio = new Gpio(wheelConfig.backwardPinNum, {mode:Gpio.OUTPUT});
        this.pwm = new Gpio(wheel.wheelConfig.pwmPinNum, {mode:Gpio.OUTPUT});
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