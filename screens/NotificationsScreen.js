import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Notification from '../components/Notification'
import TabView from '../components/TabView'

let data = [
  { id: 1, content: 'asdasdasdasdasdasas' },
  { id: 2, content: '11111111111asdasdasdasd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' }
]
let data2 = [
  { id: 1, content: '99999999999999999999999999' },
  { id: 2, content: '88888888888888888888888' },
  { id: 3, content: '777777777777777777777777' }
]
class NotificationsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4cb4fc'
    },
    title: 'Notifications'
  };
  render() {
    return (

      <TabView
        dataOne={data}
        dataTwo={data2}
        tabOne={Notification}
        Component = {[Notification]}
        tabName = {['Confirmation','Information']}
        tabOneText = 'Confirmation'
        tabTwoText = 'Information'
      />


    );
  }
}

export default NotificationsScreen;