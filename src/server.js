require('dotenv').config();
require('./database/index')

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
