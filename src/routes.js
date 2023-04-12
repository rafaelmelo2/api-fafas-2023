const { Router } = require('express');
const schemaValidator = require('./apps/middlewares/schemaValidator')


const AuthenticationController = require('./apps/controllers/AuthenticationController')
const UserControler = require('./apps/controllers/UserController')
const userSchema = require('./schema/create.user.schema.json')

const routes = new Router();


routes.post('/user', schemaValidator(userSchema), UserControler.create)

routes.post('/auth', AuthenticationController.authenticate)

routes.get('/health', (req, res) => res.send({
  message: 'Conected with success',
}));

module.exports = routes;
