const { Router } = require("express");
const router = Router();
// const multer  = require("multer");
// // router.use(multer({dest:"uploads"}).single("filedata"));
// router.get("/admin", (req, res) => {
//     res.render("admin");
// });

// const storageConfig = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "uploads");
//     },
//     filename: (req, file, cb) =>{
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// router.use(multer({storage:storageConfig}).single("filedata"));

// router.post("/admin", (req, res) => {
//     console.log(req.body);
//     let filedata = req.file;
//       console.log(filedata);
//       if(!filedata){
//           res.send("Ошибка при загрузке файла");
//       }else{
//           res.redirect("/admin");
//       }
//     // res.render("admin");
// });

const fileUpload = require("express-fileupload");
const { Offer } = require("../database");
router.use(
  fileUpload({
    limits: { filesize: 50 * 1024 * 1024 }
  })
);

router.get("/add-offer", (req, res) => {
  res.render("addOffer");
});

router.post("/add-offer", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    req.session.errorMessage0 = "Photo not uploaded";
    return res.redirect("/add-offer");
  }

  let sampleFile = req.files.image;
  let imgName = req.files.image.name.trim();
  let newName = `${Date.now()}-${imgName}`;
  let path = `public/offers/${newName}`;
  let forDBpath = `/offers/${newName}`;

  sampleFile.mv(path, function(err) {
    if (err) {
      req.session.errorMessage0 = "Image not saved";
      console.log("Image not saved!!!!");
      return res.redirect("/add-offer");
    } //
    else {
      let obj = {
        image: forDBpath,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
      };
      Offer.add(obj).then(item => {
        console.log(item);
        console.log("Image saved!!!!");
        res.redirect("/");
      });
    }
  });
});

router.get("/offer/:id", (req, res) => {
  Offer.getCurrent(req.params.id).then(item => {
    console.log("-------------", item);
    if (item.length == 0) {
      res.redirect("/");
    } else {
      res.render("offer-single", {
        title: "Offer",
        info: item[0],
        isAuth: req.session.isAuth,
        messages: req.session.message
      });
    }
  });
});

router.get("/edit-offer/:id", (req, res) => {
  Offer.getCurrent(req.params.id).then(item => {
    // console.log("-------------", item);
    if (item.length == 0) {
      res.redirect("/");
    } else {
      res.render("editOffer", item[0]);
    }
  });
});

router.post("/edit-offer", (req, res) => {
  Offer.update(req.body).then(item => {
    console.log("-------------", item);
    res.redirect(`/edit-offer/${req.body.offer_id}`);
    //   if (item.length == 0) {

    //   } else {
    //     res.render("editOffer", item[0]);
    //   }
  });
});



module.exports = router;