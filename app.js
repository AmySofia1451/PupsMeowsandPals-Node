const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.use(express.static("public"));


// Main content starts here


// Below, when client goes to the home route, page will run the function to find the Items collection,
// if it can find then it will delivery the content, if it can't find it will show an error.

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.get("/policies", function(req, res) {
  res.sendFile(__dirname + "/policies.html")
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html")
});







// nodemailer






// HEROKU PORT below

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started!");
});
