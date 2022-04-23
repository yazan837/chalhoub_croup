import React from 'react';
import {create} from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';

const store = createStore(reducers);

import Profile from '../src/profile';

const tree = create(
  <Provider store={store}>
    <Profile />
  </Provider>,
);
test('test profile page ui', () => {
  expect(tree).toMatchSnapshot();
});
