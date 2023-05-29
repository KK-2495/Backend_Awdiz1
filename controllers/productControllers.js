import products from "./modals/products.js";

export const addProduct = async (req,res) => {
   try {
    console.log(req.body);
    const {Name, Price, Image} = req.body;
    if(!Name) return res.send('Name is required.');
    if(!Price) return res.send('Price is required.');
    // step - store product data in database;
    // required - const product = schema, mongodb connection, mongodb functions;
    // console.log(Name);
    const product = new products({
      name: Name,
      price: Price,
      image: Image
    })
    await product.save()
    // return res.send({message: product added});
    return res.send(product);
   } catch (error) {
    console.log(error);
   }
}

export const getAllProducts = async (req,res) => {
  try {
    const response = await products.find().exec();
    if(response){
      res.send(response);
    }else{
      res.send("Products not found");
    }
  } catch (error) {
    return res.send(error);
  }
}