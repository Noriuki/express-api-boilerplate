const User = require('../models/user.model');
const auth = require('../services/auth.service');

const createUser = async (req, res) => {
    const { username, email, password, role} = req.body;

    try{
      const newUser = new User({
        username,
        email,
        password,
        role
      });
      await newUser.save()
      res.json("created account: " + email)
    } catch(err) {
      res.json(err);
    }

      
}

const deleteUser = async (req, res) => {

}

const updateUser = async (req, res) => {

}

const searchUser = async (req, res) => {

}

const searchAllUsers = async (req, res) => {

}

module.exports = {
  createUser
}
