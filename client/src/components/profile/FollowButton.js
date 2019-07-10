import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addFollower, removeFollower, addNote } from '../../actions/profile';


const FollowButton = ({ id, addFollower, followers, auth, removeFollower, addNote }) => {
  const formData = {
    text: `follows you!`
  }
  return (
    <div className="follow-button">
      {followers.some(follower => follower.user === auth.user._id) ?
        <button onClick={() => {
          removeFollower(id)
        }} className="truefollow">Unfollow</button> :
        <button onClick={() => {
          addFollower(id);
          setTimeout(() => {
            addNote(id, formData);
          }, 100)
        }} className="truefollow">Follow</button>
      }
    </div>
  )
}

FollowButton.propTypes = {
  addFollower: PropTypes.func.isRequired,
  removeFollower: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { removeFollower, addFollower, addNote })(FollowButton);
