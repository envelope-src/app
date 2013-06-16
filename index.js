
/*!
 * app
 *
 * envelope express app
 *
 * MIT
 */

/**
 * Module dependencies.
 */

var express = require('express');

/**
 * App.
 */

var app = exports.app = express();

/**
 * Configuration.
 */

exports.configure = function(opts){
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(opts.static));
  app.use(notFound);
  return app;
};

/**
 * 404 Not Found handler.
 */

function notFound(req, res, next){
  res.status(404);
  res.type('html').send('<h1>404 Not Found</h1><p><code>'+req.url+'</code> was not found on this server.</p>');
}
