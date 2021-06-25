const express = require("express");
const router = express.Router();

const controller = require("../Controllers/enumController");

router.get("/get", controller.findAllEnums);

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


module.exports = router;