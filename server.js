'use strict';

const express = require('express');
const volleyball = require('volleyball');
const {resolve} = require('path')

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'index.html')))

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

