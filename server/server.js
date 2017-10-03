import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/DB'
import videoRoutes from './routes/videoRoutes'

import User from './models/User'
import Video from './models/Video'


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')

    /*
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: "Louis Mondesir",
      email: "louis.mondesir@gmail.com",
      picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17951811_10211666418031224_6621657611393351503_n.jpg?oh=b1d33b84fc793024ad6f3131f2e3b10d&oe=5A40930C"
    })

    user.save(err => {
      if (err) {
        throw err
      }

      const video = new Video({
        title: "Saipan Skydiving 360VR",
        youtubeId: "G6irmwQ1HcU",
        category: "OD",
        viewCount: 15,
        likeCount: 8,
        uploadDate: "2012-04-23T18:25:43.511Z",
        latitude: 51.501527,
        longitude: -0.1921837,
        user: user._id
      })

      video.save(err => {
        if (err) {
          console.log("ici")
          console.log(err)
        }
      })
    })
  */

  },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/videos', videoRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});