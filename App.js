import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LoginScreen'
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator'


const AppContainer = createAppContainer(AppNavigator);
export default function App() {
  return (
   
      <AppContainer/>
 
  );
}

const styles = StyleSheet.create({
  container: {
  }
});