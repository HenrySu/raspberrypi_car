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
          console.log(car);
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
      }
    });
    //listen for stop signal
    socket.on('stop', function (_) {
      this._carController.stop();
    }.bind(this));
  }
}

module.exports = MessageHandler;