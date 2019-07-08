import { StackNavigator , createBottomTabNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import Main from './screens/Main'
const LoginStack = StackNavigator ({
    Login: { screen: LoginScreen },
    Home : { screen: Main }   
  },
  {
    initialRouteName: 'Login',
  });
//   const HomeStack = createStackNavigator({
//     Home
//   });

//   const AppNavigator = createBottomTabNavigator({
//     LoginStack,
//     HomeStack
//   });

  export default LoginStack