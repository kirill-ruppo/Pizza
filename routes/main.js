const { Router } = require("express");
const router = Router();
const { Offer } = require("../database");

router.get("/", (req, res) => {
  Offer.get().then(item => {
    console.log(item);
    let obj = {};
    obj.offers = item;
    res.render("index", obj);
  });
});

module.exports = router;
