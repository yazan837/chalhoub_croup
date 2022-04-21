import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../src/index';
import profile from '../src/profile';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Profile" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
