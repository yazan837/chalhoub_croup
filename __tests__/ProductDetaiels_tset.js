import React from 'react';
import {create} from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';

const store = createStore(reducers);

import ProductDetailes from '../src/components/ProductDetailes';

jest.useFakeTimers();

const tree = create(
  <Provider store={store}>
    <ProductDetailes />
  </Provider>,
);

test('test ProductDetailes page ui', () => {
  expect(tree).toMatchSnapshot();
});
