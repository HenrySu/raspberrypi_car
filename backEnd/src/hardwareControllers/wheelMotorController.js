const Gpio = process.env.NODE_ENV !== "production" ? 
    require("pigpio-mock").Gpio : 
    require("pigpio").Gpio;

class WheelMotorController {
    //wheelConfig -> WheelMotorController
    //wheelConfig example {forwardPinNum: 22, backwardPinNum: 27, pwmPinNum: 18}
    constructor(wheelConfig){
        this.setupGpios(wheelConfig);
        this.Speed = 0;        
    }    
    setupGpios(wheelConfig) {
        this._forwardGpio = new Gpio(wheelConfig.forwardPinNum, { mode: Gpio.OUTPUT });
        this._backwardGpio = new Gpio(wheelConfig.backwardPinNum, { mode: Gpio.OUTPUT });
        this._pwmGpio = new Gpio(wheelConfig.pwmPinNum, { mode: Gpio.OUTPUT });
    }

    get speed() {
        return this._dutyCycle;
    }
    set speed(dutyCycle){
        this._dutyCycle = dutyCycle;
        this._pwmGpio.pwmWrite(this._dutyCycle);
    }
    forward(){
        this._forwardGpio.digitalWrite(1);
        this._backwardGpio.digitalWrite(0);
    }
    backward(){
        this._forwardGpio.digitalWrite(0);
        this._backwardGpio.digitalWrite(1);
    }
    stop(){
        this._forwardGpio.digitalWrite(0);
        this._backwardGpio.digitalWrite(0);
        this.speed = 0;
    }
}

module.exports = WheelMotorController;