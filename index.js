import express, { json } from "express";
import morgan from "morgan";

import {Krish,Abhi,Swaraj,Vrushab} from './controllers/AllController.js';
import router from './routes/userRoutes.js'
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));  // use() func is a middleware
app.use(express.json());   // parsing raw data.
app.use('/api/v1', router);

mongoose.connect('mongodb+srv://Krish24:Krish%402495@cluster0.s8xz5ha.mongodb.net/')
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err, "err"));

// app.get('/krish', Krish);
// app.get('/abhi', Abhi);
// app.get('/swaraj', Swaraj);
// app.get('/vrushab', Vrushab);


// app.post();
// app.patch();
// app.put();
// app.delete();

app.listen(8000, () => console.log("working on port number 8000.") )