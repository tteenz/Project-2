require("dotenv").config();
var express = require("express");
const router = express.Router();
var exphbs = require("express-handlebars");

var db = require("./models");
const userController = require("./controllers/userController");

var app = express();
var PORT = process.env.PORT || 3131;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
router.get("/user", userController.userForm);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

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
