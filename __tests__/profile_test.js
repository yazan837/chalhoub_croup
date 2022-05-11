import React from 'react';
import {create} from 'react-test-renderer';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(sagaMiddleware)),
);

import Profile from '../src/profile';
jest.useFakeTimers();
const tree = create(
  <Provider store={store}>
    <Profile />
  </Provider>,
);
test('test profile page ui', () => {
  expect(tree).toMatchSnapshot();
});
