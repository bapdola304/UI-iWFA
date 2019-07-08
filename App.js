import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LoginScreen'
import {createAppContainer} from 'react-navigation';
import AppNavigator from './screens/Main'

import { StackNavigator } from 'react-navigation';
import Main from './screens/Main';
const AppContainer = createAppContainer(AppNavigator);
let auth = true;
export default function App() {
  state = {
    auth : true
  }
  return (
    state.auth ? <Login onPress/> : <AppContainer/> 
  );
}

const styles = StyleSheet.create({
  container: {
  }
});