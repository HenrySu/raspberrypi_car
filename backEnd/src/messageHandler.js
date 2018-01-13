class MessageHandler {
  constructor(carController) {
    this._carController = carController;
  }
  handle(socket) {
    const car = this._carController;
    //listen for move signal
    socket.on('move', function (direction) {
      switch (direction) {
        case 'forward':
          car.moveForward();
          break;
        case 'backward':
          car.moveBackward();
          break;
        case 'left':
          car.turnLeft();
          break;
        case 'right':
          car.turnRight();
          break;
        case 'stop':
          car.stop();
          break;
      }
    });
    socket.on('setSpeed', function (speed){
      car.setSpeed(speed);
    });
  }
}

module.exports = MessageHandler;