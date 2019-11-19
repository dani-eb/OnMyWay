const mongoose = require("mongoose");
const auto_increment = require('mongoose-auto-increment');
const connectionString = "mongodb+srv://root:G5zjCZoIRqcmmQPL@cluster0-wfhqi.mongodb.net/users";
const bcrypt = require("bcrypt");
const saltRounds = 10;

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

auto_increment.initialize(mongoose);

const Schema = mongoose.Schema;

const  UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    milePerGallon: Number,
    currentLocation: String,
    destination: String
});

UserSchema.plugin(auto_increment.plugin, "User");

exports.User = mongoose.model("User", UserSchema);
exports.makeUser = (name, email, password, callback) => {
    let encounteredError = false;
    this.User.find({}, (err, user) => {
        if (err) {
            console.log(err);
            encounteredError = true;
        }
        if (user) {
            console.log("2");
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) {
                    console.log(err);
                    encounteredError = true;
                }
                console.log("3");
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        console.log(err);
                        encounteredError = true;
                    }
                    console.log("4");
                    let new_user = new this.User({
                        name: name,
                        email: email,
                        password: hash,
                        milePerGallon: null,
                        currentLocation: null,
                        destination: null 
                    });
                    new_user.save();
                    callback(true);
                });
            });
        }
    });
    if (encounteredError) {
        callback(false);
        return;
    }
};

exports.login = (email, password, callback) => {
    this.User.find({email: email}, (err, user) => {
        if(err){
            let model = {
                error: "Email or password is wrong"
            }
            callback(false, model);
            return;
        }

        bcrypt.compare(password, user[0].password, (err, hash) => {
            if(err){
                console.log(err);
            }
            if(hash){
                callback(true);
                return;
            } else {
                let model = {
                    email: req.body.email,
                    error: "Password or email was incorrect"
                }
                callback(false, model);
                return;
            }
        });
    });
}
