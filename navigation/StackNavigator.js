import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../src/home';
import profile from '../src/profile';
import ProductDetailes from '../src/components/ProductDetailes';
import {navigationRef} from './NavigationService';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="ProductDetailes" component={ProductDetailes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
