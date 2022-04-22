import {createNavigationContainerRef} from '@react-navigation/native';
import reactotron from 'reactotron-react-native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
