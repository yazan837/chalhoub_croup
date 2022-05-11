import actions from '../../actions';
import {combineReducers} from 'redux';

const {FETCH_PROFILE, COMPLETE_FETCH_PROFILE} = actions;

const initState = false;

const profile = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_PROFILE:
      return action.data;

    default:
      return state;
  }
};
const isFethingProfile = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROFILE: {
      return true;
    }
    case COMPLETE_FETCH_PROFILE: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  profile,
  isFethingProfile,
});
