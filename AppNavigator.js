import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import Home from './screens/Home'
const LoginStack = createStackNavigator({
    Login: { screen: LoginScreen },
    Home : { screen: Home }   
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