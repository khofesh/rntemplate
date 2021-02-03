import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="Page1"
        component={Page1}
        options={{title: 'Page 1'}}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{title: 'Page 2'}}
      />
    </Stack.Navigator>
  );
}
