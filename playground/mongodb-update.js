// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

//stworzy od razu nowa baze
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to database');
    return;
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5adce1c1076b1827f80b5e4b'),
  // }, {
  //   $set: {
  //     completed: true,
  //   }
  // }, {
  //   returnOriginal: false,
  // }).then(result => console.log(result));
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5adcde5b52c4472a704ca6c1'),
  }, {
    $set: {
      name: 'Lukasz Semik',
    },
    $inc: {
      age: 1,
    },
  }, {
    returnOriginal: false,
  }).then(result => console.log(result));

  // client.close();
});
