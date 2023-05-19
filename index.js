import express from "express";
import {Krish,Abhi,Swaraj,Vrushab} from './controllers/AllController.js';
const app = express();

app.get('/krish', Krish);
app.get('/abhi', Abhi);
app.get('/swaraj', Swaraj);
app.get('/vrushab', Vrushab);


// app.post();
// app.patch();
// app.put();
// app.delete();

app.listen(3000)