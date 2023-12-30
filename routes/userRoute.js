const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrytp = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(200).send({ message: "User already exist", success: false });
        }

        const salt = await bcrytp.genSalt(10);
        const hashedPassword = await bcrytp.hash(password, salt);

        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ message: "User has been created", success: true });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error creating user",
        });
    }
});

router.post("/login", async (req, res) => {
    try {
    } catch (error) {}
});

module.exports = router;
