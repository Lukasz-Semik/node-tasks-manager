const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

// Todo.remove({}).then(result => console.log(result));

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove('')

Todo.findByIdAndRemove('5af9d5cc0bdf7754b720f1a3')
  .then(todo => console.log(todo));
