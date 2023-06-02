export const checkEmail = (req, res, next) => {
    try {
        const {userEmail,userName} = req.body;
        if(!userEmail) return res.send("email not found in middleware.");
        if(!userName) return res.send("Name not found in middleware.");
        next();
    } catch (error) {
        res.send(error);
    }
}