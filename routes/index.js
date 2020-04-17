const { Router } = require("express");
const router = Router();
// router.get("/", (req, res) => {
//     res.render("index");
// });
const { Offer } = require("../database");
router.get("/", (req, res) => {
    Offer.get().then(item => {
      res.render("index", {
        title: "Home",
        products: item,
        isAuth: req.session.isAuth
      });
    });
  });

module.exports = router;