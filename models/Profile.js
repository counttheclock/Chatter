const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user'
  },
  following: {
    type: [mongoose.Schema.Types.ObjectId],
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user'
  },
  notes: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
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