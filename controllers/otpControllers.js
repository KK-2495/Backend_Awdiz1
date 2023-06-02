// import ShortUniqueId from "short-unique-id";
import { v4 as uuidv4 } from 'uuid';
import users from './modals/users.js';

export const otpRegistration = async (req,res) => {
    try {
        const {email, number} = req.body;
        if(!email) return res.send("Email is required");
        if(!number) return res.send("Number is required");

        const code = uuidv4();
        // res.send(code);
        const response = await users.find({email, number}).exec();
        if(response.length) res.send("User is already registered");
        
        const user = new users ({
            email,
            number,
            otp: code
        });
        await user.save();
        res.send("Check your phone and Email for OTP.");

    } catch (error) {
       return res.send(error);
    }
}

export const otpCheckLogin = async (req,res) => {
    try {
        const{email, number, otp} = req.body;
        if(!email) return res.send("Email is required");
        if(!number) return res.send("Number is required");
        if(!otp) return res.send("OTP is required");

        const user = await users.find({email}).exec();

        if(!user.length) return res.send("User not found");

        if(user[0].otp == otp){
            return res.send("Login Success.");
        }
        return res.send("incorrect OTP");
        
    } catch (error) {
        return res.send(error);
    }
}