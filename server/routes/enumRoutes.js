const express = require("express");
const router = express.Router();

const controller = require("../Controllers/enumController");

router.get("/get", controller.findAllEnums);
router.get("/getD", controller.findAllDetails);
router.post("/create", controller.insertEnums);
router.put("/update", controller.updateEnum);
router.post("/add", controller.insertData);

module.exports = router;
