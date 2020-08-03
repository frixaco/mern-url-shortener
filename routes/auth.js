const router = require("express").Router()
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")
const User = require("../models/User")

router.post(
    "/register",
    [
        check("email", "Incorrect email").isEmail(),
        check("password", "Password must be 6 symbols long").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty())
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect incoming data",
                })

            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate)
                return res.status(400).json({ message: "User exists" })

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()

            res.status(201).json({ message: "User created" })
        } catch (e) {
            res.status(500).json({
                message: "Something went wrong in the server!",
            })
        }
    }
)

router.post(
    "/login",
    [
        check("email", "Incorrect email").normalizeEmail().isEmail(),
        check("password", "Password must be 6 symbols long").exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty())
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect incoming data",
                })

            const { email, password } = req.body

            const user = await User.findOne({ email })

            if (!user)
                return res.status(400).json({ messsage: "User does not exist" })

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch)
                return res
                    .status(400)
                    .json({ message: "Password did not match" })

            const token = jwt.sign(
                { userID: user.id },
                config.get("JWT_SECRET"),
                { expiresIn: "1h" }
            )

            res.json({ token, userID: user.id })
        } catch (e) {
            res.status(500).json({
                message: "Something went wrong in the server!",
            })
        }
    }
)

module.exports = router
