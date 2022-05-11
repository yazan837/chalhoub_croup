import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../src/home';
import profile from '../src/profile';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Profile'} component={profile} />
    </Drawer.Navigator>
  );
}
