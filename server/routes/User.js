const express = require('express');
const { User } = require('react-axios');
const router = express.Router();

const { User } = require("../models");

router.post("/", async (req, res, next) => {
    try {
        const addUser = await User.create(req.body);
        res.json(addUser);
    } catch (error) {
        next(error);
    }
});

module.exports = router;