import express from 'express'

const app = express()
const videoRoutes = express.Router()

import Video from '../models/Video'

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