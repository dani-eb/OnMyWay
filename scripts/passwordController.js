const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    generateHash(password, callback) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                // error is err
                // hash is undefined
                return callback(err, undefined);
            }
            if (salt) {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        // error is err
                        // hash is undefined
                        return callback(err, hash);
                    }
                    if (hash) {
                        // error is undefined
                        // hash is hash
                        return callback(undefined, hash);
                    } else {
                        // error is custom
                        // hash is undefined
                        return callback("no hash generated", undefined);
                    }
                });
            } else {
                // error is cutoms
                // hash is undefined
                return callback("no salt generated", undefined);
            }
        });
    },
    checkPassword(password, hash, callback) {
        console.log("Hash 1 " + hash);
        bcrypt.compare(password, hash, (err, hash1) => {
            console.log("Hash 2 " + hash1);
            console.log("err " + err);
            if (err) {
                // success is false
                // message is err
                return callback(false, err);
            }
            if (hash1) {
                // success is true
                // custom message
                return callback(true, undefined);
            } else {
                // success is false
                // custom message
                return callback(false, "Password was incorrect");
            }
        })
    }
}