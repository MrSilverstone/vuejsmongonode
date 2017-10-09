import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Video = new Schema({
    title: {
        type: String
    },
    youtubeId: {
        type: String
    },
    category: {
        type: String
    },
    viewCount: {
        type: Number
    },
    likeCount: {
        type: Number
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    oldId: Number,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    description: String,
    fileName: String,
    uploadDate: { type: Date, default: Date.now }
}, {
        collection: 'videos'
    })

export default mongoose.model('Video', Video)