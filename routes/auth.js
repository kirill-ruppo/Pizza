const { Router } = require("express");
const router = Router();
const users = [
  {
    login: "kirill",
    pass: "1111"
  },
  {
    login: "vasa",
    pass: "222"
  }
];
router.get("/login", (req, res) => {
  console.log("_____", req.session);
  res.render("login");
});

router.post("/login", (req, res) => {
  let client = users.filter(item => {
    if (item.login == req.body.login) {
      return item;
    }
  });
  //if exist
  if (client.length > 0) {
    console.log("чувак існує");
    if (client[0].pass == req.body.pass) {
      console.log("авторизовано");
      req.session.isAuth = true;
      req.session.user = {
        username: client[0].login
      };
      console.log("----------------------", req.session);
      res.redirect("/admin");
    } else {
      console.log("не авторизовано");
      req.session.isAuth = false;
      res.redirect("/login");
    }
  } //
  //if not exist
  else {
    console.log("чувака НЕ існує");
    res.redirect("/login");
  }

  // console.log(users)
});

router.get("/admin", (req, res) => {
  if (req.session.isAuth == true) {
    console.log("--------admin page------------", req.session);
    res.render("admin", {
      isAuth: req.session.isAuth,
      username: req.session.user.username
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  req.session.isAuth = false;
  res.redirect("/login");
});

module.exports = router;
