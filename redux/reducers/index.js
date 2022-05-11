import {combineReducers} from 'redux';

import home from './groups/home';
import profile from './groups/profile';

const appReducers = combineReducers({
  home,
  profile,
});

export default (state, action) => {
  return appReducers(state, action);
};
