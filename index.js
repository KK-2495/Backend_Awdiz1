import express, { json } from "express";
import morgan from "morgan";

import {Krish,Abhi,Swaraj,Vrushab} from './controllers/AllController.js';
import router from './routes/userRoutes.js'

const app = express();

app.use(morgan('dev'));  // use() func is a middleware
app.use(express.json());   // parsing raw data.
app.use('/api/v1', router);

// app.get('/krish', Krish);
// app.get('/abhi', Abhi);
// app.get('/swaraj', Swaraj);
// app.get('/vrushab', Vrushab);


// app.post();
// app.patch();
// app.put();
// app.delete();

app.listen(8000, () => console.log("working on port number 8000.") )