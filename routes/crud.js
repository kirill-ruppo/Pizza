const { Router } = require("express");
const router = Router();
router.get("/crud", (req, res) => {
    res.render("crud");
});

module.exports = router;