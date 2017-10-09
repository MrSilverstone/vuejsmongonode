import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Comment = new Schema(
    {
        _id: Schema.Types.ObjectId,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String,
        date: Date
    },
    {
        collection: 'comments'
    }
)

export default mongoose.model('Comment', Comment)