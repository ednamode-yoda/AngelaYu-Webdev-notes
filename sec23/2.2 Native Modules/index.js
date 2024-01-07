//to import the filesystem module
const fs=require('fs');
//writing to file
//name of file, data to be written, callback function
fs.writeFile('msg.txt','hello mohit',(err)=>console.log(err));
//reading from file
//name of file, encoding(if not mentioned, returns in raw buffer), callback function
fs.readFile('msg.txt','utf-8',(err,data)=>console.log(data));