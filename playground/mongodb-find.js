// // const MongoClient = require('mongodb').MongoClient;
// const { MongoClient, ObjectID } = require('mongodb');

// //stworzy od razu nowa baze
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     console.log('unable to connect to database');
//     return;
//   }
//   console.log('Connected to MongoDB server');

//   const db = client.db('TodoApp');

//   // db.collection('Todos').find().toArray().then((docs) => {
//   //   console.log('Todos');
//   //   console.log(JSON.stringify(docs, null, 2));
//   // }, (err) => console.log('unable to connet', err));

//   db.collection('Todos').find({
//     _id: new ObjectID('5adcdc0861c1732a2adee5fa'),
//     // completed: false,
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, null, 2));
//   }, (err) => console.log('unable to connet', err));

//   db.collection('Todos').count().then((count) => {
//     console.log(`Todos count: ${count}`);
//   }, (err) => console.log('unable to connet', err));

//   // client.close();
// });

// // 5adcdc0861c1732a2adee5fa
