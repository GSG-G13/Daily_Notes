require("dotenv").config();
const express = require('express');
const app = express();
const { join } = require('path');
const compression = require('compression');
const router = require('./router/router');

app.set('port', process.env.PORT || 5000);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
