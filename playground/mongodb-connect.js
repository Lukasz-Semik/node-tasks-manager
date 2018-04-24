// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

//stworzy od razu nowa baze
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to database');
    return;
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: "something to do",
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     console.log('unable to insert todo', err);
  //     return;
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });
  // moge nadac swoje ID!
  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Lukasz',
  //   age: 30,
  //   location: 'Wroclaw',
  // }, (err, result) => {
  //   if (err) {
  //     console.log('unable to insert todo', err);
  //     return;
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2));
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), null, 2));
  // });

  client.close();
});
