/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// redux
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import combineReducers from './redux/reducers';
import thunk from 'redux-thunk';

// navigations
import DrawerNav from './navigations/DrawerNav';

const store = createStore(combineReducers, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />

            <DrawerNav />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
