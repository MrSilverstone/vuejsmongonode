import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema(
    {
        _id: Schema.Types.ObjectId,
        email: String,
        picture: String,
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Video'
            }
        ]
    },
    {
        collection: 'users'
    }
)

export default mongoose.model('User', User)