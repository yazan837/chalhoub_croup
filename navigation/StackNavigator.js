import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './DrawerNavigator';
import profile from '../src/profile';
import ProductDetailes from '../src/components/ProductDetailes';
import {navigationRef} from './NavigationService';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={MyDrawer}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="ProductDetailes" component={ProductDetailes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
