import express from 'express'

const app = express()
const videoRoutes = express.Router()

import Video from '../models/Video'
import Comment from '../models/Comment'

videoRoutes.route('/').get((req, res) => {
    Video.find()
        .populate('user', 'email picture')
        .populate('comments', 'text date')
        .exec((err, videos) => {
            if (err) {
                throw err
            }
            res.json(videos)
        })
})

videoRoutes.route('/topic/:categ').get((req, res) => {
    Video.find({'category' : req.params.categ.toUpperCase()})
        .populate('user', 'email picture')
        .populate('comments', 'text date')
        .exec((err, videos) => {
            if (err) {
                throw err
            }
            res.json(videos)
        })
})

export default videoRoutes