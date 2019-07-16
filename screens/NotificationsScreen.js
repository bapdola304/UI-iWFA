import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Notification from '../components/Notification'
import TabView from '../components/TabView'

let data = [
  { id: 1, content: 'asdasdasdasdasdasas', isSelected : false , type : 'confirm'},
  { id: 2, content: '11111111111asdasdasdasd', isSelected : false ,type : 'confirm' },
  { id: 3, content: '334343242342sfdssfsdfsdfsdfsd' , isSelected : false, type : 'confirm' },

]
let data2 = [
  { id: 1, content: '3243423423423', isSelected : false , type : 'infor'},
  { id: 2, content: '546777777777777', isSelected : false ,type : 'infor' },
  { id: 3, content: '000000978787878' , isSelected : false, type : 'infor' },
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
        data = {{dataOne : data, dataTwo  : data2}}
        dataOne={data}
        dataTwo={data2}
        tabOne={Notification}
        tabOneText = 'Confirmation'
        tabTwoText = 'Information'
      />


    );
  }
}

export default NotificationsScreen;