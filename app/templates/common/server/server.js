"use strict";

const http = require('http');
const serve = require('serve-static');
const finalize = require('finalhandler');
const livereload = require('livereload');
const app = serve('./');

function handler (req, res) {
  const done = finalize(req, res);
  if (!/\.(js|html|css|woff|eot|svg|ttf)/.test(req.url)) {
    req.url = '/index.html';
  }
  app(req, res, done);
}

http.createServer(handler).listen(process.env.PORT || 8080);
livereload.createServer().watch('./');
