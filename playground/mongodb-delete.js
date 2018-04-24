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

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch',
  // }).then(result => console.log(result));

  // deleteOne - return special result object
  db.collection('Todos').deleteOne({
    text: 'Eat lunch',
  }).then(result => console.log(result));

  // findOneAndDelete return deleted object
  db.collection('Todos').findOneAndDelete({
    completed: false,
  }).then(deletedDocument => console.log(deletedDocument));

  // client.close();
});
