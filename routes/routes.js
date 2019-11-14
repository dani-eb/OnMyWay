const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const connectionString = "mongodb+srv://root:G5zjCZoIRqcmmQPL@cluster0-wfhqi.mongodb.net/users";

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    milePerGallon: Number,
    currentLocation: String,
    destination: String
})

const User = mongoose.model("User", UserSchema);

const router = express.Router();

router.route("/").get(
    function(req, res){
        res.render("index");
    }
)

router.route("/signUp").get(
    function(req, res){
        console.log("Sign Up - Get");
        
        res.render("signUp");
    }
)
    
router.route("/signUp").post(
    function(req, res){
        console.log("Sign Up - Post");
        if(req.body.email && req.body.password && req.body.name){
            console.log("Sign Up - Post: Inside if statement");
            User.find({}, function(err, user){
                if(user){
                    bcrypt.genSalt(saltRounds, function(err, salt){
                        bcrypt.hash(req.body.password, salt, function(err, hash){
                            let newUser = new User({id: user.length,
                                name: req.body.name,
                                email: req.body.email,
                                password: hash,
                                milePerGallon: null,
                                currentLocation: null,
                                destination: null});
                            newUser.save();
    
                            res.redirect("/");

                        })
                    });
                }


            });
        } else {
            let model = {
                isSignUp: false,
                name: req.body.name,
                email: req.body.email,
                error: "Please fill all forms"
            }

            res.render("signUp", model);
        }
        
    }
)

router.route("/login").get(
    function(req, res){
        console.log("Login - Get");

        res.render("login");
    }
)

router.route("/login").post(
    function(req, res){
        console.log("Login - Post");
        if(req.body.email && req.body.password){
            User.find({email: req.body.email}, function(err, user){
                if(err){
                    let model = {
                        error: "Email does not exist in database"
                    }

                    res.render("login", model);
                }

                bcrypt.compare(req.body.password, user[0].password, function(err, hash){
                    if(err){
                        console.log(err);
                    }
                    if(hash){
                        res.redirect("/");
                    } else {
                        let model = {
                            email: req.body.email,
                            error: "Password or email was incorrect"
                        }
    
                        res.render("login", model);
                    }
                });


                // checkUser(req.body.password, user.password, res);

                // const match = bcrypt.compare(req.body.password, user.password);
                
                // if(match){
                //     console.log("Yes?")
                // } else {
                //     console.log("No?");
                // }
                // if(user.password == req.body.password){
                //     console.log("password was correct");
                //     res.redirect("/");
                // } else {
                    // let model = {
                    //     email: req.body.email,
                    //     error: "Password or email was incorrect"
                    // }

                    // res.render("login", model);
                // }

            });
        } else {
            let model = {
                isSignUp: false,
                email: req.body.email,
                error: "Please fill all forms"
            }

            res.render("login", model);
        }

    }
)

async function checkUser(password, hash, res){
    const match = await bcrypt.compare(password, hash);

    if(match){
       res.redirect("/");
    } else {
        let model = {
            email: req.body.email,
            error: "Password or email was incorrect"
        }

        res.render("login", model);
    }
}

module.exports = router;

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