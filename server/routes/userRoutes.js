import express from 'express'

const app = express()
const userRoutes = express.Router()

import User from '../models/User'

userRoutes.route('/').get((req, res) => {

        User.find()
        .populate('videos')
        .exec((err, user) => {
            if (!err) {
                res.json(user)
            }
        })
    })

userRoutes.route('/:id').get((req, res) => {

    User.findById(req.params.id)
    .populate('videos')
    .exec((err, user) => {
        if (!err) {
            res.json(user)
        }
    })
})

export default userRoutes