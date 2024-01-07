// this is cjs
// var sillyname=require("sillyname");
// console.log(sillyname());

//the standadised way is ejs
//import method from 'package';
import sillyname from 'sillyname';
import superheroes from "superheroes";
console.log(sillyname());


const name = superheroes.random();
console.log(`I am ${name}!`);
