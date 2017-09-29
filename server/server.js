import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/DB'
import itemRoutes from './routes/itemRoutes'

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/items', itemRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});