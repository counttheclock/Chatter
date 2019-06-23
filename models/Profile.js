const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  employement: {
    type: String
  },
  location: {
    type: String
  },
  education: {
    type: String
  },
  song: {
    type: String
  },
  movie: {
    type: String
  },
  description: {
    type: String
  },
  followers: {
    type: [Schema.Types.ObjectId],
    ref: 'user'
  },
  following: {
    type: [Schema.Types.ObjectId],
    ref: 'user'
  },
  seeProfile: {
    type: String,
    default: 'everyone'
  },
  whoFollows: {
    type: String,
    default: 'anyone'
  },
  blocked: {
    type: [Schema.Types.ObjectId],
    ref: 'user'
  },
  notes: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user'
        },
        note: {
          type: String
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Proflie = mongoose.model('profile', ProfileSchema)