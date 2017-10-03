import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
  likeCount:{
      type: Number
  },
  latitude: {
      type: Number
  },
  longitude: {
      type: Number
  }
},{
    collection: 'videos'
});

export default  mongoose.model('Video', Video);