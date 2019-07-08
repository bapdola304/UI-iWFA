import { Icon } from 'native-base';
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeTab from './tabs/Home'
import ScheduleTab from './tabs/Schedule'
import ClockTab from './tabs/Clock'
import SettingTab from './tabs/Setting'
import Login from './LoginScreen'

const color = {
  ACTIVE : '#147efb',
  INACTIVE : '#ccc'
}
const HomeStack = createStackNavigator({
    HomeTab
});

HomeStack.navigationOptions = {
  tabBarLabel : 'Home',
  tabBarIcon : ({ focused }) =>{
    return <Icon name="md-home" style={{ color: focused }} />
  }
}

const ScheduleStack = createStackNavigator({
    ScheduleTab
});
ScheduleStack.navigationOptions = {
  tabBarLabel : 'Schedule',
  tabBarIcon : ({ focused }) =>{
    return <Icon name="md-calendar" style={{ color: focused }} />
  }
}
const ClockStack = createStackNavigator({
    ClockTab
});
ClockStack.navigationOptions = {
  tabBarLabel : 'ClockTab',
  tabBarIcon : ({ focused }) =>{
    return <Icon name="md-time" style={{ color: focused }} />
  }
}
const SettingStack = createStackNavigator({
    SettingTab
});
SettingStack.navigationOptions = {
  tabBarLabel : 'Settings',
  tabBarIcon : ({ focused }) =>{
    return <Icon name="md-settings" style={{ color: focused }} />
  }
}


const AppNavigator = createBottomTabNavigator({
  HomeStack,
  ScheduleStack,
  ClockStack,
  SettingStack
});

export default (AppNavigator)

