import { StackNavigator, createStackNavigator , createBottomTabNavigator} from 'react-navigation';
import { Animated, Easing, Platform } from 'react-native';

import LoginScreen from './screens/LoginScreen'
import HomeTab from './screens//Home1'
import ScheduleTab from './screens/tabs/Schedule'
import ClockTab from './screens/tabs/Clock'
import SettingTab from './screens/tabs/Setting'
import Leave from './screens/menudetail/LeaveScreen'
import LeaveRequest from './screens//menudetail/LeaveRequestScreen'
import ClockTime from './screens/ClockTime'
import Notification from './screens/NotificationsScreen'
import MySchedule from './screens/Mychedule'
const HomeStack = createStackNavigator({
  HomeTab
},
navigationOptions =  {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
      return <Icon name="md-home" style={{ color: focused }} />
    },
    header : null
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
let SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  })

  return { transform: [ { translateX } ] }
};
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        default: SlideFromRight(index, position, width),

      }[transition];
    },
  }
}

const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeTab },
  Leave: { screen: Leave },
  LeaveRequest : { screen : LeaveRequest },
  ClockTime : { screen : ClockTime },
  Notification : { screen : Notification },
  MySchedule : { screen : MySchedule }
},
{
  initialRouteName: 'Home',
  transitionConfig: TransitionConfiguration
});
//   const HomeStack = createStackNavigator({
//     Home
//   });
//   const AppNavigator = createBottomTabNavigator({
//     LoginStack,
//     HomeStack
//   });

export default RootStack