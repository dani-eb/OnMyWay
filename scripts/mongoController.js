const mongoose = require("mongoose");
const auto_increment = require('mongoose-auto-increment');
const connectionString = "mongodb+srv://root:G5zjCZoIRqcmmQPL@cluster0-wfhqi.mongodb.net/users";
const passwordController = require('../scripts/passwordController');

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
    this.User.find({}, (err, user) => {
        if (err) {
            // console.log(err);
            // success is false
            return callback(false);
        }
        if (user) {
            // console.log("2");
            passwordController.generateHash(password, (err, hash) => {
                if (err) {
                    // console.log(err);
                    // success is false
                    return callback(false);
                }
                if (hash) {
                    let new_user = new this.User({
                        name:name,
                        email:email,
                        password:hash,
                        milePerGallon: null,
                        currentLocation: null,
                        destination: null
                    });
                    new_user.save();
                    // success is true
                    return callback(true);
                } else {
                    // console.log("no user has been generated, could not save user");
                    // success is false
                    return callback(false);
                }
            });
        }
    });
};

exports.login = (email, password, callback) => {
    let incorrectModel = {
        email: email,
        error: "Password or email was incorrect"
    }
    this.User.find({email: email}, (err, user) => {
        if(err){
            return callback(false, incorrectModel);
        }
        // console.log("is there a user?")
        if (user[0]) {
            // console.log("yes");
            passwordController.checkPassword(password, user[0].password, (success, err) => {
                if (err) {
                    // console.log(err);
                    // success is false
                    return callback(false);
                }
                console.log("no error on login");
                if (success) {
                    // console.log("made it!");
                    // success is true
                    return callback(true);
                } else {
                    // success is false
                    return callback(false, incorrectModel);
                }
            });
        } else {
            // console.log("no")
            return callback(false, incorrectModel);
        }
    });
}
