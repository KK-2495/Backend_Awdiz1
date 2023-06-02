import mongoose from "mongoose";

import { Schema } from "mongoose";

const user = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    emailOtp: String,
    numberOtp: String,
    isNumberVerified: Boolean,
    isEmailVerified: Boolean,

});

export default mongoose.model("users", user);