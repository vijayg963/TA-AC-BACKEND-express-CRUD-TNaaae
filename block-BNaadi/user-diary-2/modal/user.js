var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User2 = mongoose.model('User2', userSchema);

module.exports = User2;
