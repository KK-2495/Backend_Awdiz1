import users from "./modals/users.js";
export const login = (req,res) => {
    res.send('Hi from login function');
}

export const register = async (req,res) => {
    try {
        const {userName, userEmail, userPassword, userConfirmPassword } = req.body;
        if(!userName) return res.send('UserName is required');
        if(!userEmail) return res.send('userEmail is required');
        if(!userPassword) return res.send('userPassword is required');
        if(!userConfirmPassword) return res.send('userConfirmPassword is required');
        if(userPassword.length <= 8) return res.send('User Password length is less than 8 !');
        if(userConfirmPassword.length <= 8) return res.send('User Password length is less than 8 !');
        if(userPassword !== userConfirmPassword) return res.send('Passwords does not match');
        
        const response = await users.find({email: userEmail}).exec();
        if(response.length) return res.send('You are already registered.!');

        const user = new users({
            name: userName,
            email: userEmail,
            password: userPassword
        });
        await user.save();
        return res.send('Registration Succesfull.');
    } catch (error) {
        return res.send(error);
    }
}