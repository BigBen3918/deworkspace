/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserBasicSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
});

const UserOtherSchema = new Schema({
    message: {
        type: Number,
        default: 0,
    },
});

const UserSchema = new Schema();
UserSchema.add(UserBasicSchema).add(UserOtherSchema);

module.exports = User = mongoose.model("dework_user", UserSchema);
