import {put, takeLatest, call} from 'redux-saga/effects';
import {getProducts} from '../../network/General';
import actions from '../../actions';

const {completeFetchCountries, FETCH_PRODUCTS} = actions;

function* performFetchProducts() {
  try {
    const result = yield call(getProducts);
    if (result.networkSuccess) {
      yield put(completeFetchCountries({data: result.data}));
    } else yield put(completeFetchCountries({data: []}));
  } catch {
    yield put(completeFetchCountries({data: []}));
    return;
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, performFetchProducts);
}
