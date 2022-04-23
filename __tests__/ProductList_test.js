import React from 'react';
import {create} from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';

const store = createStore(reducers);

import ProductsList from '../src/components/ProductsList';

jest.useFakeTimers();
const navigation = {
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native');
jest.mock('@react-navigation/stack');

const tree = create(<ProductsList navigation={navigation} />);

test('test ProductsList page ui', () => {
  expect(tree).toMatchSnapshot();
});
