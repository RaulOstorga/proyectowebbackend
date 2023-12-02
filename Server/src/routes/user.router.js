const express = require('express');
const router = express.Router();

const {
    createUser,
    getUsers,
    getOneUser,
    updateUser,
    deleteOneUser
} = require('../controllers/user.controller')

router.get("/", getUsers);
router.get("/:page-:limit", getUsers);
router.get("/:id", getOneUser);

router.patch("/:id", updateUser);
router.post("/", createUser);
router.delete("/:id", deleteOneUser);


module.exports = router;