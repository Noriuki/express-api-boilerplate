const config = require('../../config/default');
const jwt = require('jsonwebtoken');

const  teste = 'teste';

function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization'];

  if (authHeader){
    const token = authHeader.split('')[1]; 
  } else {
    return res.sendStatus(401).json({ error: 'Token not provided' });
  } 
  

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401).json({ error: 'Invalid token' });

    // teste de escopo
    console.log(teste)

    req.user = user;
    next();
  })
}

function generateToken(user) {
  const secret = config.session.secret;
  const options = { expiresIn: config.session.expiresIn }  
  // teste de escopo
  console.log(teste)
  return jwt.sign(user, secret, options.expiresIn, (err, jwtToken) => {
    if(err)
      console.log(err)
    return jwtToken;  
  });

}

module.exports = {
  authenticateToken,
  generateToken
}