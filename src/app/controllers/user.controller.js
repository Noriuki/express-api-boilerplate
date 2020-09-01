const User = require('../models/user.model');
const { authenticateToken, generateToken } = require('../services/auth.service');
const { comparePassword } = require('../services/bcrypt.service');

const signUp = async (req, res) => {
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
        return res.json({ error:err });
    }

}

const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        
        if(comparePassword(password, user.password)) {
            const token = generateToken({role: user.role });
            return res.json({token:token});
        }

        return res.json({ message: 'Unauthorized' });
    }
    catch(err) {
        return res.json({ error: err });
    }

};

const validate = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    authenticateToken(token, (err) => {
        if (err) {
            return res.json({ auth: false });
        }

        return res.json({ auth: true });
    });
};

module.exports = {
  signUp,
  login,
  validate
}
