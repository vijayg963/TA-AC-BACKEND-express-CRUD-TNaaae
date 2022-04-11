var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usesrSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, required: true },
    age: Number,
    address: String,
    bio: String,
    hobbies: [String],
  },
  { timestamps: true }
);

const User = mongoose.model('User', usesrSchema);

module.exports = User;
