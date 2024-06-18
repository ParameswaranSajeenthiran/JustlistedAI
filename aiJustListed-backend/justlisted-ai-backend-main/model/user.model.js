const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        userImage: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        emailIsValid: {
            type: Boolean,
            default: false
        },
        token: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
        },
        phoneIsValid: {
            type: Boolean,
            default: false
        },
        address: {
            type: String,
        },
        subscription: {
            type: String,
            default: "free"
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);