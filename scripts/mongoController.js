const mongoose = require("mongoose");
const dbName = "OnMyWay";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: Number,
    name: String
    //all that other studd
});
const User = mongoose.model("User", userSchema);