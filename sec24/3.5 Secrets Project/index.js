//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { resolve } from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.post('/check',(req,res)=>{
    console.log(req.body);
    if(req.body['password']==='ILoveP'){
        res.sendFile(resolve('./public/secret.html'));
    }
    else{
        res.redirect('/');
    }
});

app.get('/',(req,res)=>{
    res.sendFile(resolve('./public/index.html'));
});
app.listen(port,()=>console.log(`Server started on port:${port}`));