const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

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
    employement,
    location,
    education,
    song,
    movie,
    description
  } = req.body

  const profileFields = {};
  profileFields.user = req.user.id;
  if (employement) profileFields.employement = employement;
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

    await Profile.save();

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
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;