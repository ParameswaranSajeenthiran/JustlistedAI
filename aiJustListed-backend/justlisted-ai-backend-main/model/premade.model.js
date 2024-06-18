const mongoose = require("mongoose");

const PreMadeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        propertyName: {
            type: String,
            required: true,
        },
        premadeList: {
            type: String,
            required: true,
        },
        textLimit: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        generateSummary: {
            type: String,
        },
        regenerateSummary: {
            type: String,
        },
        socialMediaCaption: {
            type: String,
        },
        regenerationCount:{
            type: Number,
            default:0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("PreMade", PreMadeSchema);