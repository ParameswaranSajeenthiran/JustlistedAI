const mongoose = require("mongoose");

const FillUpSchema = new mongoose.Schema(
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
        textLimit: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        propertyType: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        floorArea: {
            type: String,
            required: true,
        },
        bedRoomNodes: {
            type: String,
            required: true,
        },
        kitchenNotes: {
            type: String,
            required: true,
        },
        bathRoomNotes: {
            type: String,
            required: true,
        },
        additionalNotes: {
            type: String,
            required: true,
        },
        purpose: {
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

module.exports = mongoose.model("FillUp", FillUpSchema);