import users from "./modals/users.js";
export const login = async (req,res) => {
    try {
        const {userEmail, userPassword} = req.body;
        if(!userEmail) return res.send('userEmail is required');
        if(!userPassword) return res.send('userPassword is required');

        const response = await users.find({email: userEmail}).exec();
        if(response.length){
            if(userPassword == response[0].password){
                return res.send('You are Logged IN.');
            }else{
                return res.send('Password does not match');
            }
        }else{
            return res.send('User Email not found');
        }

    } catch (error) {
        return res.send(error);
    }
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

// ***update user****
export const changeUserData = async (req,res) => {
    try {
        const {userEmail,userName} = req.body;
        if(!userEmail) return res.send('userEmail not found');
            const response = await users.find({email:userEmail}).exec();
        if(response[0].email == userEmail) {
             // let changeName = response[0].name;
            //  response[0].name = updateName;
             await users.findOneAndUpdate({email:userEmail},{name:userName}).exec();
             return res.send(response);

        }else{
            return res.send("You are not registered with this email");
        }
    } catch (error) {
        return res.send(error);
    }
}