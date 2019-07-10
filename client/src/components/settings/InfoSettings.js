import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const InfoSettings = ({ createProfile, profile: { profile } }) => {
  const [formData, setFormData] = useState({
    employment: '',
    location: '',
    education: '',
    song: '',
    movie: '',
    description: ''
  });

  useEffect(() => {
    if (profile !== null) {
      setFormData({
        employment: !profile.employment ? '' : profile.employment,
        location: !profile.location ? '' : profile.location,
        education: !profile.education ? '' : profile.education,
        song: !profile.song ? '' : profile.song,
        movie: !profile.movie ? '' : profile.movie,
        description: !profile.description ? '' : profile.description
      })
    }
  }, [setFormData, profile])


  const {
    employment,
    location,
    education,
    song,
    movie,
    description
  } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();

    createProfile(formData);
  }

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        Profile Infomation
      </div>
      <div className="info-form">
        <form onSubmit={e => onSubmit(e)}>
          <input type="text" className="info-input" name="employment" placeholder="Employment" value={employment} onChange={e => onChange(e)} />
          <input type="text" className="info-input" name="location" placeholder="Location" value={location} onChange={e => onChange(e)} />
          <input type="text" className="info-input" name="education" placeholder="Education" value={education} onChange={e => onChange(e)} />
          <input type="text" className="info-input" name="song" placeholder="Favorite Song" value={song} onChange={e => onChange(e)} />
          <input type="text" className="info-input" name="movie" placeholder="Favorite Movie" value={movie} onChange={e => onChange(e)} />
          <textarea placeholder="What's one thing you want people to know about you?" name="description" className="info-text" value={description} onChange={e => onChange(e)} />
          <input type="submit" value="Save" className="info-submit" />
        </form>
      </div>
    </div>
  )
}

InfoSettings.propTypes = {
  createProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { createProfile })(InfoSettings);
