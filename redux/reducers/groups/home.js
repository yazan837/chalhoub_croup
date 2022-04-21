import actions from '../../actions';
import {combineReducers} from 'redux';

const {FETCH_PRODUCTS, COMPLETE_FETCH_PRODUCTS} = actions;

const initState = false;

const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.data;
    case COMPLETE_FETCH_PRODUCTS:
      return action.data;

    default:
      return state;
  }
};

export default combineReducers({
  products,
});
