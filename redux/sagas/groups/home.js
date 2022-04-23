import {put, takeLatest, call} from 'redux-saga/effects';
import {getProducts} from '../../network/General';
import actions from '../../actions';

const {completeFetchProducts, FETCH_PRODUCTS} = actions;

function* performFetchProducts() {
  try {
    const result = yield call(getProducts);

    if (result.networkSuccess) {
      yield put(completeFetchProducts({data: result.data}));
    } else yield put(completeFetchProducts({data: []}));
  } catch {
    yield put(completeFetchProducts({data: []}));
    return;
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, performFetchProducts);
}
