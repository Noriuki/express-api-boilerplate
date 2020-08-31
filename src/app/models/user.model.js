const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
        username: {
            type: String,
            required : true,
            lowercase : true
        },
        email: {
            type: String,
            required : true,
            unique : true,
            lowercase : true
        },
        password: {
            type: String,
            required : true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            required: true
        }
    }, {
    timestamps: true
});

UserSchema.pre('save', function (next) {
    if(!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err){
            return callback(err);
        }
        return callback(null, isMatch);
    });
};

module.exports = mongoose.model("user", UserSchema);