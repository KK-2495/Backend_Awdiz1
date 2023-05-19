import express from "express";

const app = express();

app.get('/krish', function (req,res){res.send('Hello....Krishna')})

app.listen(3000)