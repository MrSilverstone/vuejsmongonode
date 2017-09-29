import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Video = new Schema({
  Title: {
    type: String
  },
  YoutubeId: {
    type: String
  },
  Category: {
      type: String
  }
},{
    collection: 'Videos'
});

export default  mongoose.model('Video', Video);