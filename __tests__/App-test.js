import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
it('renders correctly', () => {
  renderer.create(<App />);
});
