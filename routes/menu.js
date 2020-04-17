const { Router } = require("express");
const router = Router();
router.get("/menu", (req, res) => {
    res.render("menu");
});

module.exports = router;