class CarController{

    constructor(leftWheel, rightWheel){
        this.leftWheel = leftWheel;
        this.rightWheel = rightWheel;
    }

    //todo: use async and make all wheels move simutaniously
    moveForward(){
        this.leftWheel.forward();
        this.rightWheel.forward();
    }
    moveBackward(){
        this.leftWheel.backward();
        this.rightWheel.backward();
    }
    turnLeft(){
        this.leftWheel.backward();
        this.rightWheel.forward();
    }
    turnRight(){
        this.rightWheel.backward();
        this.leftWheel.forward();
    }
    stop(){
        this.rightWheel.stop();
        this.leftWheel.stop();
    }
    setSpeed(speed){
        this.leftWheel.speed = speed;
        this.rightWheel.speed = speed;
    }
}

module.exports = CarController;