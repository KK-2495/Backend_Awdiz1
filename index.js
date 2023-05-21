import express from "express";
import morgan from "morgan";

import {Krish,Abhi,Swaraj,Vrushab} from './controllers/AllController.js';
const app = express();

app.use(morgan('dev'));  //middleware

app.get('/krish', Krish);
app.get('/abhi', Abhi);
app.get('/swaraj', Swaraj);
app.get('/vrushab', Vrushab);


// app.post();
// app.patch();
// app.put();
// app.delete();

app.listen(8000, () => console.log("working on port number 8000.") )