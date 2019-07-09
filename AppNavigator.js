import { StackNavigator, createStackNavigator , createBottomTabNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import HomeTab from './screens/tabs/Home'
import ScheduleTab from './screens/tabs/Schedule'
import ClockTab from './screens/tabs/Clock'
import SettingTab from './screens/tabs/Setting'

const HomeStack = createStackNavigator({
  HomeTab
},
navigationOptions =  {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
      return <Icon name="md-home" style={{ color: focused }} />
    }
  }
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => {
//     return <Icon name="md-home" style={{ color: focused }} />
//   }
// }

const ScheduleStack = createStackNavigator({
  ScheduleTab
});
ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => {
    return <Icon name="md-calendar" style={{ color: focused }} />
  }
}
const ClockStack = createStackNavigator({
  ClockTab
});
ClockStack.navigationOptions = {
  tabBarLabel: 'ClockTab',
  tabBarIcon: ({ focused }) => {
    return <Icon name="md-time" style={{ color: focused }} />
  }
}
const SettingStack = createStackNavigator({
  SettingTab
});
SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return <Icon name="md-settings" style={{ color: focused }} />
  }
}


const AppNavigator = createBottomTabNavigator({
  HomeStack
});

const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: AppNavigator }
},
  {
    initialRouteName: 'Login'
  });
//   const HomeStack = createStackNavigator({
//     Home
//   });

//   const AppNavigator = createBottomTabNavigator({
//     LoginStack,
//     HomeStack
//   });

export default RootStack