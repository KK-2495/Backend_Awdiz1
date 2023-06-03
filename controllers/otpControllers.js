// import ShortUniqueId from "short-unique-id";
import { v4 as uuidv4 } from 'uuid';
import users from './modals/users.js';

export const otpNumberRegister = async (req,res) => {
    try {
        const {number} = req.body;
        if(!number) return res.send("Number is required");

        const code = uuidv4();
        // res.send(code);
        const response = await users.find({number}).exec();
        if(response.length) return res.send("User is already registered");
        
        const user = new users({
            number,
            numberOtp: code,
            isNumberVerified: false
        });
        await user.save();
        return res.send("Check your phone for OTP.");

    } catch (error) {
       return res.send(error);
    }
}

export const otpNumberVerification = async (req,res) => {
    try {
        const{number, otp} = req.body;
        if(!number) return res.send("Number is required");
        if(!otp) return res.send("OTP is required");

        const user = await users.find({number}).exec();

        if(!user.length) return res.send("User not found");

        if(user[0].numberOtp == otp){
            await users.findOneAndUpdate({number},{isNumberVerified: true});
            return res.send("Your Mobile Number is verified through OTP.");
        }
        return res.send("incorrect OTP");
        
    } catch (error) {
        return res.send(error);
    }
}

export const otpEmailRegister = async (req,res) => {
    try {
        const {number, email} = req.body;
        if(!number) return res.send("Number is required");
        if(!email) return res.send("Email is required");

        const code = uuidv4();
        // res.send(code);
        await users.findOneAndUpdate({number},{email,emailOtp:code,isEmailVerified:false}).exec();
       
        return res.send("Email updated Successfully.");

    } catch (error) {
       return res.send(error);
    }
}


export const otpEmailVerification = async (req,res) => {
    try {
        const{email, otp} = req.body;
        if(!email) return res.send("Email is required");
        if(!otp) return res.send("OTP is required");

        const user = await users.find({email}).exec();

        if(!user.length) return res.send("User not found");

        if(user[0].emailOtp == otp){
            await users.findOneAndUpdate({email},{isEmailVerified: true});
            return res.send("Your Email is verified through OTP.");
        }
        return res.send("incorrect OTP");
        
    } catch (error) {
        return res.send(error);
    }
}


export const otpNumberLogin = async (req,res) => {
    try {
        const {number} = req.body;
        if(!number) return res.send("Number is required.");

        const user = await users.find({number}).exec();
        const userId = user[0]?._id;
        const code = uuidv4();
            await users.findOneAndUpdate({_id:userId},{numberLoginOtp: code});
            return res.send("Check your Phone for OTP");
    } catch (error) {
        return res.send(error);
    }
} 

export const otpEmailLogin = async (req,res) => {
    try {
        const {email} = req.body;
        if(!email) return res.send("Email is required.");

        const user = await users.find({email}).exec();
        const userId = user[0]?._id;
        const code = uuidv4();
            await users.findOneAndUpdate({_id:userId},{emailLoginOtp: code});
            return res.send("Check your Email for OTP.");
    } catch (error) {
        return res.send(error);
    }
} 

export const checkNumOtp = async (req,res) => {
    try {
        const {number,otp} = req.body;
        if(!number) return res.send("Number is required.");
        if(!otp) return res.send("OTP is required.");

        const user = await users.find({number}).exec();
        // console.log(user);
        if(!user) return res.send("User not found");

        if(user[0].numberLoginOtp == otp){
            return res.send("Your Number is verified through OTP.");
        }
        return res.send("incorrect OTP");
    } catch (error) {
        return res.send(error);
    }
} 

export const checkEmailOtp = async (req,res) => {
    try {
        const {email,otp} = req.body;
        if(!email) return res.send("Email is required.");
        if(!otp) return res.send("OTP is required.");

        const user = await users.find({email}).exec();
        // console.log(user);
        if(!user) return res.send("User not found");

        if(user[0].emailLoginOtp == otp){
            return res.send("Your Email is verified through OTP.");
        }
        return res.send("incorrect OTP");
    } catch (error) {
        return res.send(error);
    }
} 