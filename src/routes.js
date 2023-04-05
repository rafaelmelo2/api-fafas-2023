const { Router } = require('express');

const routes = new Router();

routes.get('/health', (req, res) => res.send({
  message: 'Conected with success',
}));

module.exports = routes;
