const User = require('../models/userModel.js')
//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
}

const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}

