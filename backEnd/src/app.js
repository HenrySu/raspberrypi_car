let express = require("express");
let http = require("http");
let async = require("async");
let carBuilder = require("./carFactory");
let messageHandler = require("./messageHandler");

let carFac = new carFactory();
let car = carFac.CreateZhiyuCar();

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
