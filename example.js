
/**
 * Example.
 */

var options = {
  port: 8080,
  host: 'localhost',
  static: __dirname
};

var http = require('http');
var app = require('./').configure(options);

http.createServer(app).listen(options.port, options.host, function(){
  console.log('server is listening');
});
