import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema(
    {
        _id: Schema.Types.ObjectId,
        email: String,
        picture: String,
        name: String,
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Video'
            }
        ],
        videoLiked: [{
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }],
        following: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        oldId: Number
    },
    {
        collection: 'users'
    }
)

export default mongoose.model('User', User)