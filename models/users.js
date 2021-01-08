const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Debes ingresar un nombre']
  },
  email: {
    type: String,
    required: [true, 'Debes ingresar un email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Debes ingresar una contraseña'],
    select: false
  },
  role: {
    type: String,
    select: false
  }
});

// pre-save middleware
usersSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12)
  next();
});

const User = mongoose.model('User', usersSchema, 'users');

module.exports = User;