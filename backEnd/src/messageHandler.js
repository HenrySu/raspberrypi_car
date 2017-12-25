class MessageHandler{
    constructor(carController){
        this.carController = carController;
    }
    handle(socket){
        //listen for move signal
        socket.on('move', function(direction) {
          switch(direction){
           case 'up':
              this.carController.moveForward();
              break;
            case 'down':
              this.carController.moveBackward();
              break;
            case 'left':
              this.carController.turnLeft();
              break;
            case 'right':
              this.carController.turnRight();
              break;
          }
        });
        //listen for stop signal
        socket.on('stop', function(_){
          this.carController.stop();
        });
    }
}

module.exports = MessageHandler;