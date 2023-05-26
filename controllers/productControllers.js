export const addProduct = (req,res) => {
   try {
    console.log(req.body);
    if(!Name) return res.send('Name is required.');
    // if(!Price) return res.send('Price is required.');
    // step - store product data in database;
    // required - const product = schema, mongodb connection, mongodb functions;
    // const {Name, Price, Image} = req.body;
    // console.log(Name);
    //-- we will add prouct to database then will display product to user or a succes message//
    // return res.send({message: product added});

    return res.send("produt added");
   } catch (error) {
    console.log(error);
   }
}