import {combineReducers} from 'redux';

import profile from './groups/profile';

const appReducers = combineReducers({
  profile,
});

export default (state, action) => {
  return appReducers(state, action);
};
