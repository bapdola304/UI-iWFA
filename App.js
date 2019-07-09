import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LoginScreen'
import {createAppContainer} from 'react-navigation';
import AppNavigator from './screens/Main'

import { StackNavigator } from 'react-navigation';
import Main from './screens/Main';
import RootStack from './AppNavigator'
const AppContainer = createAppContainer(RootStack);
let auth = true;
export default function App() {
  state = {
    auth : true
  }
  return (
        <AppContainer/> 
  );
}

const styles = StyleSheet.create({
  container: {
  }
});