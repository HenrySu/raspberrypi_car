let express = require("express");
let http = require("http");
let async = require('async');

let app = express();

app.set('port', process.env.PORT || 3000);

let server = http.createServer(app)
    .listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

