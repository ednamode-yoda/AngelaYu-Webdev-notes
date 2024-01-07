import express from "express";
const app = express();

app.get('/',(req,res)=>{
    //console.log() puts in cmd
    //this sends back the data
    res.send('<h1>hello</h1><br><h1>world</h1>');
});
app.get('/contact',(req,res)=>{
    res.send('contact me');
});
app.get('/about',(req,res)=>{
    res.send('my name is mohit');
});
app.listen(3000, () => {
    console.log("Server started at port 3000");
});