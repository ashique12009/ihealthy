const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrytp = require("bcrypt");
const jwt = require('jsonwebtoken');

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
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(200)
                .send({ message: "User does not exist", success: false });
        }
        const isMatch = await bcrytp.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: "Password is incorrect", success: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        res
            .status(200)
            .send({ message: "Login Successfully", success: true, data: token });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .send({ success: false, message: "Internal Server Error", data: error });
    }
});

module.exports = router;