const express = require('express');
const morgan = require('morgan');
const app = express();
const { sequelize } = require('./models/index');

// Settings
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

// Rutas
app.use(require('./routes'));

// 
app.listen(PORT, function () {
  console.log(`Example app listening on http://localhost:${PORT}!`);
  sequelize.authenticate().then(() => {
    console.log('Nos hemos conectado a la base de datos!!!!!');
  })
});