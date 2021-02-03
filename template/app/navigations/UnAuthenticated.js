import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';

const Stack = createStackNavigator();

export default function UnAuthenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{title: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
