var express = require("express");
var serveStatic = require("serve-static");
var winston = require("winston");
var expressWinston = require("express-winston");

var app = express();

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) {
      return false;
    },
  })
);

app.use(serveStatic("public/"));

app.listen(3000);
