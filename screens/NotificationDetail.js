import React, { Component } from 'react';
import Login from '../components/Login'
import {  View, Text } from 'react-native'
class NotificationDetail extends Component {

    static navigationOptions = {
        headerStyle: {
          height : 0
        },
        header : null
      };

    render() {       
        return (
            <View>
                <Text>Detail Notifications</Text>
            </View>
        );
    }
}
export default NotificationDetail;