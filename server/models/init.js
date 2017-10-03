import Video from './models/Video'
import User from './models/User'

import mongoose from 'mongoose'

const createTestData = () => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: "Louis Mondesir",
        email: "louis.mondesir@gmail.com",
        picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17951811_10211666418031224_6621657611393351503_n.jpg?oh=b1d33b84fc793024ad6f3131f2e3b10d&oe=5A40930C"
    })

    user.save()
        .then(u => {
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

            return video.save()
        })
        .then(v => {
            user.videos.push(v)

            return user.save()
        })
        .then(u => {
            console.log("models created...")
        })
        .catch(err => {
            throw err
        })
}

export default createTestData