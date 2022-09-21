const express = require('express');
const bodyParser = require('body-parser');
const { configHeaders } = require('./middlewares/configHeaders');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(configHeaders);

require('./routes')(app);

module.exports = app;
