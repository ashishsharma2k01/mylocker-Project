const user = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {

    try {
        const { username, password } = req.body;

        const exist = await user.findOne({ username });

        if (exist) {
            return res.status(400).json({
                message: "uers already exists"
            })
        };

        const hashedpassword = await bcrypt.hash(password, 10);

        const newuser = await user.create({
            username,
            password: hashedpassword
        });
        res.status(201).json({
            message: "user registered successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}

const loginuser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const exist = await user.findOne({ username });
        if (!exist) {
            return res.status(400).json({
                message: "invalid credentials"
            })
        };

        const ismatch = await bcrypt.compare(password, exist.password)
        if (!ismatch) {
            return res.status(400).json({
                message: "invalid credentials"
            })
        };

        res.status(200).json({
            message: "login successfull"
        })

    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}