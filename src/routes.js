const Router = require('express').Router;
const routes = new Router();

const userController = require('./app/controllers/user.controller')

routes.get('/', (req, res) => {
    res.send('index')
});

routes.post('/signup', userController.createUser);

module.exports = routes;