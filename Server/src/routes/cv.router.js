const express = require('express');
const router = express.Router();

const {
    createCv,
    getCvs,
    getOneCv,
    updateCv
} = require("../controllers/cv.controller");

router.post("/", createCv);
router.get("/", getCvs);
router.get("/:page-:limit", getCvs);

router.get("/:id", getOneCv);
router.patch("/:id", updateCv);


module.exports = router;