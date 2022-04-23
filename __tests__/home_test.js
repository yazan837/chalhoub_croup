import React from 'react';
import {create} from 'react-test-renderer';
import Home from '../src/home';

const tree = create(<Home />);
test('test home page ui', () => {
  jest.mock('react-redux');
  expect(tree).toMatchSnapshot();
});
