require("dotenv").config();
var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");

var exphbs = require("express-handlebars");

var db = require("./models");

var PORT = process.env.PORT || 3131;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({ secret: "it works", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index");
});
let authRoute = require("./routes/auth")(app, passport);
// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
require("./config/passport/passport")(passport, db.user);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

// use for postman
// {
// 	make:'audi',
// 	model:'r8',
// 	color:'black',
// 	photo:'http://www.',
// 	description:'fast'
// }
