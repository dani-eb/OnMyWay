const express = require("express");
const express_session = require('express-session');
const app = express();
var port = 3001;

app.use(express.urlencoded());
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express_session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));
app.listen(port, function() {
    console.log("Express started listening on port: " + port);
});

var routes = require("./routes/routes");
app.use("/", routes);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/mapPublic"));

app.get("/", function(req, res) {
    res.render("index");
});