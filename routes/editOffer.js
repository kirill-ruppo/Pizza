const { Router } = require("express");
const router = Router();
router.get("/edit-offer", (req, res) => {
    res.render("editOffer");
});

module.exports = router;