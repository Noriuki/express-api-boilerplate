const mongoose = require("mongoose");
const { encryptPassword } = require("../services/bcrypt.service");

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
    this.password = encryptPassword(this);
    next();
});

module.exports = mongoose.model("user", UserSchema);