let express = require("express");
let http = require("http");
let async = require("async");
let carFactory= require("./carFactory");
let messageHandler = require("./messageHandler");

let app = express();
app.set('port', process.env.PORT || 5000);

let server = http.createServer(app)
.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

let io = require("socket.io")(server);
let carFac = new carFactory();
let handler = new messageHandler(carFac.createZhiyuCar());

io.sockets.on("connection", handler.handle.bind(handler));
