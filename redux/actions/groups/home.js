import {createAction} from '../creators';

export default {
  ...createAction('FETCH_PRODUCTS'),
  ...createAction('COMPLETE_FETCH_PRODUCTS', 'data'),
};
