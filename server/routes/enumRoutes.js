const express = require("express");
const router = express.Router();

const controller = require("../Controllers/enumController");
const add = require("../Controllers/formData");
router.get("/get", controller.findAllEnums);
router.get("/getD", controller.findAllDetails);

// module.exports = router;

// const Enum = require('../models/enum');

// router.get('/' , (req,res) => res.send('enum route testing'));

// router.get('/', (req, res) => {
//     Enum.find()
//       .then(enumId => res.json(enumId))
//       .catch(err => res.status(404).json({ noenumfound: 'No enum found' }));
//   });

router.post("/create", controller.insertEnums);
router.put("/update", controller.updateEnum);
router.post("/sign_up", controller.trialPost);
router.post("/delete",controller.delEnum);
router.post("/add", add.insertData);



module.exports = router;