import express from "express";
import bodyParser from "body-parser";
import { resolve } from "path";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.post('/submit',(req,res)=>{
  res.send(`<h1>Your band name is:</h1><h2>${req.body.street+req.body.pet}😊</h2>`);
  // res.sendStatus(200); need not write this after sending back info already
});
app.get('/',(req,res)=>{
  res.sendFile(resolve('./public/index.html'));
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
