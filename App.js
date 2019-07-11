import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LoginScreen'
import {createAppContainer} from 'react-navigation';

import RootStack from './AppNavigator'
const AppContainer = createAppContainer(RootStack);
export default function App() {
  state = {
    auth : true
  }
  
  return (
        <AppContainer/> 
  );
}
