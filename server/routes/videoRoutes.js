import express from 'express'

const app = express()
const videoRoutes = express.Router()


import Video from '../models/Video'

videoRoutes.route('/add').post((req, res) => {

  console.log("ici!");

  /*
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
*/
})

videoRoutes.route('/').get((req, res) => {

    Video.find()
    .populate('user', 'email picture')
    .exec((err, videos) => {
        if (!err) {
            res.json(videos)
        }
    })
})

export default videoRoutes