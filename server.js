const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
const express = require("express");
const app = express();
const port = process.env.PORT || process.argv[2] || 5000;
// const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(cors());

// // const DeviceUUID = require('device-uuid').DeviceUUID;
// // console.log(new DeviceUUID().get());

//parse app / x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
//parse app/json
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");

// serving static files if in production mode
// if (process.env.NODE_ENV === "production") {
// app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  res.render("index");
});
// }

//import routes
// require("./routes/blockchain-routes")(app);
// require("./routes/user-routes")(app);
// require("./routes/account-routes")(app);
const users = require("./routes/api/users");
app.use("/api/users", users);

app.get("/hello", (req, res, next) => {
  res.send("Hello");
  res.end();
});

app.listen(port, error => {
  if (error) throw error;
  console.log(`Listening on ${port}`);
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log("MongoDB Connection Success"))
    .catch(err => console.error(`MongoDB Error: ${err}`));
});
