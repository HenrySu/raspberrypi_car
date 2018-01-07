class MessageHandler {
  constructor(carController) {
    this._carController = carController;
  }
  handle(socket) {
    //listen for move signal
    socket.on('move', function (direction) {
      switch (direction) {
        case 'forward':
          this._carController.moveForward();
          break;
        case 'backward':
          this._carController.moveBackward();
          break;
        case 'left':
          this._carController.turnLeft();
          break;
        case 'right':
          this._carController.turnRight();
          break;
      }
    });
    //listen for stop signal
    socket.on('stop', function (_) {
      this._carController.stop();
    });
  }
}

module.exports = MessageHandler;