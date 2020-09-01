const Router = require('express').Router;
const routes = new Router();

const userController = require('./app/controllers/user.controller')

routes.get('/', (req, res) => {
    res.send('index')
});
routes.get('/validate', userController.validate);

routes.post('/signup', userController.signUp);
routes.post('/login', userController.login);

module.exports = routes;