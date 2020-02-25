const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const Blockchain = require('./dev/blockchain');
const mongoose = require('mongoose')


// const DeviceUUID = require('device-uuid').DeviceUUID;
// console.log(new DeviceUUID().get());

//parse app / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse app/json
app.use(bodyParser.json());
//serving static files
app.use(express.static(__dirname + '/public'));
//import routes
require('./routes')(app);

const uri = "mongodb+srv://tsp:tsp321@cluster-ww6xo.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "tspmongo"

let db;
app.listen(port, async () => {
  console.log(`Listening on ${port}`);
  // await MongoClient.connect(uri, { useNewUrlParser: true }, async (err, client) => {
  //   if (err) {
  //     throw err;
  //   }
  //   db = await client.db(dbName);
  //   console.log(`Listening on Port ${port}`)
  //   getSecurum();
  // })
})

// let Securum = new Blockchain();
// function getSecurum(){
//   const collection = db.collection('blocks');
//   collection.find({}).toArray((err, result) => {
//     if(err) throw err;
//     console.log(result);
//   })
// }

app.get('/blockchain', function (req, res) {
  res.send(Securum);
});

app.get('/block-explorer', function (req, res) {
  res.sendFile('./dev/block-explorer/index.html', { root: __dirname });
})

app.get('/', function (req, res) {
  res.sendFile('index.html');
})

// while (typeof db == 'undefined'){
//   // console.log("Checking Connetion");
//   setInterval(() => {
//     console.log("Checking Connetion");
//   }, 1000);
//   if(db)
//     getSecurum();
// }