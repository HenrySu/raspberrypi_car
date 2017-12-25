let gpio = require("pi-gpio");

class MotorController {
    constructor(pinNum){
        this.pinNum = pinNum;
        gpio.open(this.pinNum, "output");
    }
    forward(){
        gpio.write(this.pinNum, 1);        
    }
    backward(){
        gpio.write(this.pinNum, 0);        
    }

}