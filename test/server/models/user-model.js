const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const User = new Schema ({
  username: { type: String, required: true },
  password: { type: String, required: true}
})