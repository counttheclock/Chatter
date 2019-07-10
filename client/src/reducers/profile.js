import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_PROFILES, ADD_NOTE, UPDATE_FOLLOWERS, REMOVE_NOTE } from "../actions/types";

const initalState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
}

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      }
    case UPDATE_FOLLOWERS:
      return {
        ...state,
        profile: { ...state.profile, followers: payload.followers.followers },
        loading: false
      }
    case ADD_NOTE:
      return {
        ...state,
        profile: { ...state.profile, notes: payload },
        loading: false
      }
    case REMOVE_NOTE:
      return {
        ...state,
        profile: {
          ...state.profile,
          notes: state.profile.notes.filter(note => note._id !== payload)
        },
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      }
    default:
      return state;
  }
}