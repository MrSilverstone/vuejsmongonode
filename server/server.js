import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/DB'
import history from 'connect-history-api-fallback'
import videoRoutes from './routes/videoRoutes'
import userRoutes from './routes/userRoutes'

import createTestData from './models/init'

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')
    //createTestData() 
  },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express()


app.use(express.static('public'))
app.use('/videos', videoRoutes)
app.use('/users', userRoutes)
app.use(history({
  verbose: true
}))
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))
app.use('/videos', videoRoutes)
app.use('/users', userRoutes)


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port);
})