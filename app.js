const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const home = require('./routes');
const menu = require('./routes/menu');
const about = require('./routes/about');
const contact = require('./routes/contact');
const crud = require('./routes/crud');
const addOffer  = require('./routes/add-offer');
const login  = require('./routes/auth');
const session = require('express-session');
const auth = require("./routes/auth");
const main = require("./routes/main");
const adminPages = require("./routes/admin");
const editOffer = require("./routes/editOffer");
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
const exphbs = require("express-handlebars");

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
  });
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
  app.set("views", "views");

  app.use(express.static(__dirname + "/public"));

  // routes.use(express.static(__dirname));
  // routes.use(multer({dest:"uploads"}).single("filedata"));
  // routes.post("/upload", function (req, res, next) {
    
  // });

  app.use(
    session({
      secret: "sombrero",
      resave: false,
      saveUninitialized: false
    })
  );


app.use(editOffer);
app.use(home);
app.use(menu);
app.use(about);
app.use(contact);
app.use(crud);
app.use(adminPages);
app.use(login);
app.use(main);
app.use(auth);
app.use(addOffer);


app.listen(PORT, () => {
    console.log("server working");
});