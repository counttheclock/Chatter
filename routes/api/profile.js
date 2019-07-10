const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Posts = require('../../models/Posts');

// @route  GET api/profile/test
// @desc   Test route
// @access Public
router.get('/test', (req, res) => res.send('Profile route'));

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['firstName', 'lastName', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route  POST api/profile
// @desc   Create or update user profile
// @access Private
router.post('/', auth, async (req, res) => {
  const {
    employment,
    location,
    education,
    song,
    movie,
    description
  } = req.body

  const profileFields = {};
  profileFields.user = req.user.id;
  if (employment) profileFields.employment = employment;
  if (location) profileFields.location = location;
  if (education) profileFields.education = education;
  if (song) profileFields.song = song;
  if (movie) profileFields.movie = movie;
  if (description) profileFields.description = description;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

      return res.json(profile);
    }

    profile = new Profile(profileFields);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['firstName', 'lastName', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

// @route  PUT api/profile/user/follow/:id
// @desc   Follow a user
// @access Private
router.put('/user/follow/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    const myprofile = await Profile.findOne({ user: req.user.id });

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    if (profile.followers.filter(follower => follower.user.toString() === req.user.id).length > 0) {
      return res.json(400).json({ msg: 'Already a follower' });
    }

    profile.followers.unshift({ user: req.user.id });
    myprofile.following.unshift({ user: profile.user._id });

    await profile.save();
    await myprofile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

// @route  PUT api/profile/user/unfollow/:id
// @desc   Unfollow a user
// @access Private
router.put('/user/unfollow/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    const myprofile = await Profile.findOne({ user: req.user.id });

    if (profile.followers.filter(follower => follower.user.toString() === req.user.id).length === 0) {
      return res.json(400).json({ msg: 'Not a follower' })
    };

    const removeIndex = profile.followers.map(follower => follower.user.toString()).indexOf(req.user.id);
    const removeIndex2 = myprofile.following.map(follow => follow.user.toString()).indexOf(profile.user._id);

    profile.followers.splice(removeIndex, 1);
    myprofile.following.splice(removeIndex2, 1);

    await profile.save();
    await myprofile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

// @route  POST api/profile/note/:id
// @desc   Add new notification
// @access Private
router.post('/note/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const profile = await Profile.findById(req.params.id);

    const newNote = {
      text: req.body.text,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      user: req.user.id
    }

    profile.notes.unshift(newNote);

    await profile.save();

    res.json(profile.notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route  DELETE api/profile/note/:id/:note_id
// @desc   Delete notification
// @access Private
router.delete('/note/:id/:note_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    const note = profile.notes.find(note => note.id === req.params.note_id);
    // Make sure note exists
    if (!note) {
      return res.status(404).json({ msg: 'Notification does not exist' })
    }
    const removeIndex = profile.notes.map(note => note.id).indexOf(req.params.note_id)
    profile.notes.splice(removeIndex, 1)
    await profile.save();
    res.json(profile.notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});


// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['firstName', 'lastName', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error')
  }
})

// @route  DELETE api/profile
// @desc   Delete profile, user & posts
// @access Private
router.delete('', auth, async (req, res) => {
  try {
    await Posts.deleteMany({ user: req.user.id });
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;