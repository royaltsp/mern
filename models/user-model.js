const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  bio: {
    type: String
  },
  password: {
    type: String
  },
  wayToContact: {
    type: String
  }
})

mongoose.model('User', UserSchema)