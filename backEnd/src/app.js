let express = require("express");
let http = require("http");
let async = require("async");
let carBuilder = require("./carBuilder");
let messageHandler = require("./messageHandler");

let app = express();
app.set('port', process.env.PORT || 3000);

let builder = new carBuilder();
let car = builder.withWheel(22)
.withWheel(27,true)
.withWheel(25)
.withWheel(24,true);

let handler = new messageHandler(car);

let server = http.createServer(app)
    .listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

let io = require("socket.io")(server);
io.sockets.on("connection", handler.handle);
