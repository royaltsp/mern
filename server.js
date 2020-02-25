var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("/", function (request, response) {
  response.render("dev/block-explorer/index.html")
});

app.listen(port, function () {
  console.log("App Running");
})