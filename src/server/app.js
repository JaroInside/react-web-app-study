import express from 'express';
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import mongoose from 'mongoose';
import session from 'express-session';

import config from './config';

import api from './routes';

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../public'));

app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', api);

app.listen(port, () => {
  console.log('Server is listening on port', port);
});

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect(config.dbUrl, error => {
  if(error) console.error(error);
});