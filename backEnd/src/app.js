let express = require("express");
let http = require("http");
let async = require("async");
let carBuilder = require("./carFactory");
let wheelPositions = require("./wheelPositions");
let messageHandler = require("./messageHandler");

let builder = new carFactory();

let car = builder.withWheel({wheelPosition: wheelPositions.LeftFront, pinNum: 22,isReverse:false})
                 .withWheel({wheelPosition: wheelPositions.LeftBack, pinNum: 27,isReverse: true})
                 .withWheel({wheelPosition: wheelPositions.RightFront, pinNum: 25, isReverse:false})
                 .withWheel({whealPosition: wheelPositions.RightBack, pinNum: 24, isReverse: true});

while(true){
    car.moveForward();
}

let app = express();
app.set('port', process.env.PORT || 3000);

let server = http.createServer(app)
.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

let io = require("socket.io")(server);
let handler = new messageHandler(car);

io.sockets.on("connection", handler.handle);
