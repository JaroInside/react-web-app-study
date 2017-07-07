import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';

const app = express();
const port = 8080;

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../public'));

app.use('/api', api);

app.listen(port, () => {
    console.log('Server is listening on port', port);
});