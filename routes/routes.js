const express = require("express");
const mongoose = require("mongoose");

const connectionString = "mongodb+srv://root:G5zjCZoIRqcmmQPL@cluster0-wfhqi.mongodb.net/test";

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const User = mongoose.model("User", UserSchema);

const router = express.Router();

router.route("/signUp").get(
    function(req, res){
        let model = {
            isSignUp: true,
            formAction: "signUp",
            submitAction: "Sign Up"
        }
        
        res.render("login", model);
    }
)
    
router.route("/signUp").post(
    function(req, res){
        if(req.body.email && req.body.password && req.body.submit){
            User.find({}, function(err, user){
                let newUser = new User({id: length,
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    milePerGallon: null,
                    currentLocation: null,
                    destination: null});
                newUser.save();
                //TODO
                res.redirect("Change it!!");
            });
        } else {
            let model = {
                isSignUp: false,
                formAction: "logIn",
                submitAction: "Login",
                name: req.body.name,
                email: req.body.email,
                error: "Please fill all forms"
            }

            res.redirect("signUp", model);
        }
        
    }
)

router.route("/logIn").get(
    function(req, res){
        let model = {
            isSignUp: false,
            formAction: "logIn",
            submitAction: "Login"
        }
        
        res.render("login", model);
    }
)

router.route("/logIn").post(
    function(req, res){
        if(req.body.email && req.body.password){
            User.find({email: req.body.email}, function(err, user){
                if(err){
                    let model = {
                        isSignUp: false,
                        formAction: "logIn",
                        submitAction: "Login",
                        error: "Email is not sign in to the database"
                    }

                    res.redirect("logIn", model);
                }

                if(user.password == req.password){

                } else {
                    let model = {
                        isSignUp: false,
                        formAction: "logIn",
                        submitAction: "Login",
                        email: req.body.email,
                        error: "Please fill all forms"
                    }

                    res.redirect("logIn", model);
                }

            });
        } else {
            let model = {
                isSignUp: false,
                formAction: "logIn",
                submitAction: "Login",
                email: req.body.email,
                error: "Please fill all forms"
            }

            res.redirect("logIn", model);
        }

    }
)

module.exports = route;

// For the main page
// const express = require("express");

// var port = 3000;

// const app = express();

// app.set("view engine", "pug");

// app.use(express.static(__dirname + "/public"));

// app.use(express.urlencoded());

// var routes = require("./routes/routes");
// app.use("/", routes);

// app.listen(port, function(){
//     console.log("Express started and listening on port: " + port);
// });