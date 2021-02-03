import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNav from './StackNav';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  // const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={StackNav}
        options={{title: 'Home'}}
      />
    </Drawer.Navigator>
  );
}
