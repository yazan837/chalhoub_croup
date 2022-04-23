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

import Home from '../src/home';

jest.useFakeTimers();

const tree = create(
  <Provider store={store}>
    <Home />
  </Provider>,
);

test('test home page ui', () => {
  expect(tree).toMatchSnapshot();
});
