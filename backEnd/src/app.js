let express = require("express");
let http = require("http");
let async = require("async");
let carBuilder = require("./carBuilder");
let messageHandler = require("./messageHandler");

let builder = new carBuilder();
let car = builder.withWheel({wheelPosition: "leftFront", pinNum: 22,isReverse:false})
            .withWheel({wheelPosition:"leftBack", pinNum: 27,isReverse: true})
            .withWheel({wheelPosition:"rightFront", pinNum: 25, isReverse:false})
            .withWheel({whealPosition:"rightBack", pinNum: 24, isReverse: true});

let app = express();
app.set('port', process.env.PORT || 3000);

let server = http.createServer(app)
.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

let io = require("socket.io")(server);
let handler = new messageHandler(car);

io.sockets.on("connection", handler.handle);
