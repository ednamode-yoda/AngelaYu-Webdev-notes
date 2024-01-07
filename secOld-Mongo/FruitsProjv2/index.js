const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peoplesDB');

//schemea is blueprint for data
const peopleSchema = new mongoose.Schema({
  name: String,
  age: String
});

//model is a collection of documents
const Person = mongoose.model('Person', peopleSchema);

// const person = new Person({
//     age: 200,
//     });

// person.save();

// const person2 = new Person({
//     name: "Johnny",
//     age: 87
//     });
// const person3 = new Person({
//     name: "Amy",
//     age: 12
//     });

// Person.insertMany([person2, person3]);

// async function displayPeople() {
//   const people = await Person.find();
// //   console.log(people);
// people.forEach(e=>
//     console.log(e.name)
//     );
//     mongoose.connection.close();
// }
// async function updatePeople() {
//   await Person.updateMany({age:200}, {name: "Peaches"});
//   mongoose.connection.close();
// }
// updatePeople();

async function removePeople() {
  await Person.deleteOne({age:200});
  mongoose.connection.close();
}
removePeople();
// displayPeople();