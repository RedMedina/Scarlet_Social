require('dotenv').config();
const express = require('express');
const routerApi = require('./App/routes');
const cors = require('cors');
const {
    logErrors,
    boomErrorHandler,
    errorHandler,
  } = require('./App/middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Scarlet_Social Online en puerto: ' + port);
  });