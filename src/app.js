const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const createMail = require('./routes/sendMail')


require('./db.js');

const server = express();

server.name = 'API';
/*
app.use(function (req, res, next) {

  var allowedDomains = ['http://localhost:3001','http://localhost:8080' ];
  var origin = req.headers.origin;
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})
*/
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(function (req, res, next) {

  // var allowedDomains = [ 'http://localhost:3000','https://henryfront.surge.sh/','https://scmkt-4fe6b.web.app/' ];
  // var origin = req.headers.origin;
  // if(allowedDomains.indexOf(origin) > -1){
  //   res.header('Access-Control-Allow-Origin', origin);
  // }
  res.header('Access-Control-Allow-Origin', 'https://scmkt-4fe6b.web.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);
server.use(createMail)//probando sendgrid


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
