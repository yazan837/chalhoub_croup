import React from 'react';
import {create} from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';

const store = createStore(reducers);

import Home from '../src/home';

const tree = create(
  <Provider store={store}>
    <Home />
  </Provider>,
);
test('test home page ui', () => {
  expect(tree).toMatchSnapshot();
});
