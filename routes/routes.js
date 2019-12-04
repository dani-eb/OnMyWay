const express = require("express");
const mongoose = require("mongoose");
const mongo_controller = require("../scripts/MongoController");

const router = express.Router();

router.route("/").get(
    function(req, res){
        res.render("index");
    }
)

router.route("/map").get(
    (req, res) => {
        res.render("map");
    }
)

router.route("/ridesNow").get(
    function (req, res){
        res.render("ridesNow");
    }
)

router.route("/uta").get(
    function (req, res){
        res.render("utaPage");
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
            mongo_controller.makeUser(req.body.name, req.body.email, req.body.password, (success) => {
                if (success) {
                    req.session.user = {
                        isAuthenticated:true,
                        username: req.body.email
                    }
                    res.redirect("/");
                } else {
                    let model = {
                        isSignUp: false,
                        name: req.body.name,
                        email: req.body.email,
                        error: "Please fill all forms"
                    }

                    res.render("signUp", model);
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

router.route("/login").post( (req, res) => {
        console.log("Login - Post");
        if(req.body.email && req.body.password){
            mongo_controller.login(req.body.email, req.body.password, (success, model) => {
                if (success) {
                    req.session.user = {
                        isAuthenticated:true,
                        username: req.body.email
                    }
                    res.redirect("/");
                } else {
                    res.render("login", model);
                }
            });
        }
    }
)

router.route("/logout").get(
    function(req, res){
        req.session.user = null;
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
