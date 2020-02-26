const mongoose = require('mongoose')
const { mongourl } = require('./config/keys')
const express = require('express')
const app = express()
const port = process.argv[2] || process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors())


// // const DeviceUUID = require('device-uuid').DeviceUUID;
// // console.log(new DeviceUUID().get());

//parse app / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse app/json
app.use(bodyParser.json());
//serving static files
app.use(express.static(__dirname + '/public'));
//import routes
require('./routes/blockchain-routes')(app);
require('./routes/user-routes')(app);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: false }, () => {
    console.log("MongoDB Connection Success");
  })
})