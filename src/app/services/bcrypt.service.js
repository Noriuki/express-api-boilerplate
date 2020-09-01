const bcrypt = require('bcryptjs');

module.exports = {
	encryptPassword: (user) => { return bcrypt.hashSync(user.password, 10) },
	comparePassword: (password, hashPW) => { return bcrypt.compareSync(password, hashPW) } 
};