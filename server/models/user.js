const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    trim: true,
    required: true,
    type: String,
    minlength: 1,
  },
})

module.exports = {
  User,
};
