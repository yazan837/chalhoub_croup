import {put, takeLatest, call} from 'redux-saga/effects';
import {getProfile} from '../../network/General';
import actions from '../../actions';

const {completeFetchProfile, FETCH_PROFILE} = actions;

function* performFetchProfile() {
  try {
    const result = yield call(getProfile);

    if (result.networkSuccess) {
      yield put(completeFetchProfile({data: result.data}));
    } else yield put(completeFetchProfile({data: []}));
  } catch {
    yield put(completeFetchProfile({data: []}));
    return;
  }
}

export function* watchFetchProfile() {
  yield takeLatest(FETCH_PROFILE, performFetchProfile);
}
