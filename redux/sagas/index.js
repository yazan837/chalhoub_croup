import {fork} from 'redux-saga/effects';

import * as home from './groups/home';
import * as profile from './groups/profile';

const sagas = Object.values({
  ...home,
  ...profile,
});

export default function* root() {
  for (let index = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}
