const User = require('../models/user.model');
const { authenticateToken, generateToken } = require('../services/auth.service');

const createUser = async (req, res) => {
    const { username, email, password, role} = req.body;

    try{
        const newUser = new User({
            username,
            email,
            password,
            role
        });
        savedUser = await newUser.save()
        res.json({
            user: savedUser,
            message: "create user successfully"
        });
    } catch(err) {
      res.json({
          error:err,
          message: "create user failure"
        });
    }

}



module.exports = {
  createUser
}
