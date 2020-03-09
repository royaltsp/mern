const mongoose = require("mongoose");
require("../models/user-model");
const User = mongoose.model("User");
require("../models/account-model");
const Account = mongoose.model("Account");
const jwt = require("jsonwebtoken");
const fs = require("fs");
module.exports = app => {
  app.post("/add-user", (req, res) => {
    const user = new User(req.body);
    console.log(user)
    user.save().then(data => {
      if (data) {
        console.log("User Added")
        res.send({ data })
      }
      else
        res.send({ msg: "User Not Added" })
    }).catch(err => {
      console.error(err);
      res.status(400).send({ err, msg: "Error while saving User" })
    })
  });

  app.post("/check-user", (req, res) => {
    console.log(req.body);
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          if (user.password === req.body.password) {
            console.log("User Present");
            const payload = {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            };
            let token = jwt.sign(payload, "ecommSecret", { expiresIn: 1440 });
            res.send({
              user: payload,
              token: token
            });
          } else {
            res.send({ msg: "Wrong Email or Password" });
          }
        } else {
          res.send({ msg: "User Not Found!" });
        }
      })
      .catch(err => {
        console.error(err);
        res.send({ msg: "Error While Checking User" });
      });
  });

  app.get("/users", (req, res) => {
    User.find({}).then(data => {
      if (data.length > 0) {
        res.send({
          error: false,
          users: data
        });
      } else {
        res.send({
          error: true,
          msg: "No Users"
        });
      }
    });
  });

  app.get("/account/:uid", (req, res) => {
    const uid = req.params.uid;
    Account.find({ uid: uid }).then(data => {
      if (data.length > 0) {
        res.send({
          error: false,
          account: data[0]
        });
      } else {
        res.send({
          error: true,
          msg: "No Account"
        });
      }
    });
  });
};

function generateToken(user) {
  // console.log(user);
  let u = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    bio: user.bio,
    wayToContact: user.wayToContact
  };

  return (token = jwt.sign(u, "mern", {
    expiresIn: 60 * 60 * 24 // 24 Hours
  }));
}
