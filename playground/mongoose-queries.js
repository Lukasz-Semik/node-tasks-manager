const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
// 5ae2ec1d6a4787b9f21d4850
const id = '5ae2ec1d6a4787b9f21d4850';

Todo.find({
  _id: id,
}).then((todos) => {
  console.log('todos', todos);
});

Todo.findOne({
  _id: id,
}).then((todo) => {
  console.log('todo', todo);
});

if (!ObjectID.isValid(id)) {
  return console.log('Id not valid');
}

Todo.findById(id).then(todo => {
  if (!todo) return console.log('not found');
  console.log('one todo', todo)
}).catch(e => console.log(e));
