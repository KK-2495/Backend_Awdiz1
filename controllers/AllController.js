export const Krish = (req,res) => {
    res.send('Sending message from krish function');
}

export const Abhi = (req,res) => {
    res.send('Sending message from abhi function');
}

export const Swaraj = (req,res) => {
    try{
    res.status(201).send('Sending message from swaraj function');
    // throw new Error("I want to throw an error.");
    }catch(error){
        console.log(error," - error")
    }
}

export const Vrushab = (req,res) => {
    res.send('Sending message from vrushab function');
}
