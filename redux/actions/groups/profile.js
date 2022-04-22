import {createAction} from '../creators';

export default {
  ...createAction('FETCH_PROFILE'),
  ...createAction('COMPLETE_FETCH_PROFILE', 'data'),
};
