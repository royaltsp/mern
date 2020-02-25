const mongoose = require('mongoose')
require('../models/user-model')
const User = mongoose.model('User')
require('../models/account-model')
const Account = mongoose.model('Account')
const jwt = require('jsonwebtoken')

module.exports = app => {
  app.post('/add-user', async (req, res) => {
    let response = {
      userAdded: false,
      accountAdded: false
    };
    const user = new User(req.body.user);
    await user.save().then(data => {
      response.userAdded = true
      console.log("userAdded");
      const account = new Account({
        uid: data._id,
        balance: 20
      })
      account.save().then(data => {
        response.accountAdded = true
        console.log("accountAdded");
        res.send(response);
      })
    }).catch(err => {
      console.error(err);
      throw err;
    })
    // res.send(response)
  })

  app.post('/check-user', (req, res) => {
    let user = req.body.user;
    User.find({ email: user.email, password: user.password }).then(data => {
      if (data.length > 0) {
        res.send({
          error: false,
          token: generateToken(user)
        })
      } else {
        res.send({
          error: true,
          message: "User Not Found"
        })
      }
    })
  })
}

function generateToken(user) {
  let u = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    bio: user.bio,
    wayToContact: user.wayToContact
  };

  return token = jwt.sign(u, 'ecomm', {
    expiresIn: 60 * 60 * 24 // 24 Hours
  })
}