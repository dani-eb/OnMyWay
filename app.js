const express = require("express");
const app = express();
var port = 3001;


app.use(express.urlencoded());
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.listen(port, function () {
    console.log("Express started listening on port: " + port);
});

var routes = require("./routes/routes");
app.use("/", routes);

app.get("/map", function(req, res){
    res.sendFile( __dirname + '/views/map.html');
});
