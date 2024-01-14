const UserSchema = require("../models/userModel")
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {
    const { firstname, lastname , email, password } = req.body
    try {
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ error: "Fill All Data Fields" })
        }
        const response = await UserSchema.findOne({ email: email })
        if (response) {
            return res.status(400).json({ error: "Email already exist" })
        }
        else {
            const user = new UserSchema(req.body)

            const userRegister = await user.save()

            if (userRegister) {
                res.status(200).json({ message: "user registered succesfully" })
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.loginUser = async (req, res) => {
    const { email, password ,role } = req.body
    try {
        if (!email || !password || !role) {
            return res.status(400).json({ error: "Fill All Data Fields" })
        }
        const userLogin = await UserSchema.findOne({ email: email })
        if (userLogin) {
            const isMatch = userLogin.password;

            const token = await userLogin.generateAuthTokon()

            req.session.token = token;

            console.log(token)

            if (password === isMatch) {
                const roleupdate = await UserSchema.updateOne({email:email},{$set:{role:role}})
                res.status(200).json({ message: "user sigin successfully" })
            }
            else {
                res.status(400).json({ error: "Invalid Credentials" })
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

