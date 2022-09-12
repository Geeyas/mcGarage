var express = require("express");
var app = express();

var mcGarageAPI = require("./controllerAPI/api-controller");

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

var cors = require('cors');
app.use(cors());

app.use("/api", mcGarageAPI);

app.listen(3333);
console.log("Server is Up and  running on 3333 Port");
console.log("Visit:  localhost:3333/api");
