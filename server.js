var path = require("path");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");

var handlebars = require("express-handlebars").create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/layouts/partials"),
  defaultLayout: "main",
  extname: "hbs"
});

var port = process.env.PORT || 8080;

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use("/js", express.static(path.join(__dirname, "public/assets/js/")));
app.use("/css", express.static(path.join(__dirname, "public/assets/css/")));


http.listen(3000, function() {
  console.log("Server running");
});

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
