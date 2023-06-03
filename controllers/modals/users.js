import mongoose from "mongoose";

import { Schema } from "mongoose";
import { stringify } from "uuid";

const user = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    emailOtp: String,
    numberOtp: String,
    numberLoginOtp: String,
    emailLoginOtp: String,
    isNumberVerified: Boolean,
    isEmailVerified: Boolean,

});

export default mongoose.model("users", user);