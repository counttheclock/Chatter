const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  employment: {
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
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  seeProfile: {
    type: String,
    default: 'everyone'
  },
  whoFollows: {
    type: String,
    default: 'anyone'
  },
  blocked: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  notes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      text: {
        type: String,
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Proflie = mongoose.model('profile', ProfileSchema)