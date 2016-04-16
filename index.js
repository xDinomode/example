var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Succesfully uploaded an app to c9.io!");
});

app.get(process.env.PORT, process.env.IP);
