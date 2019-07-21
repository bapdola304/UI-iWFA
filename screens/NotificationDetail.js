import React, { Component } from 'react';
import Login from '../components/Login'
import {Button} from 'react-native-paper'
import {  View, Text, StyleSheet } from 'react-native'
class NotificationDetail extends Component {

    static navigationOptions = {
        headerStyle: {
         
        },
       title : 'Detail'
      };

    render() {       
        return (
            <View style={ChangePasswordStyle.viewContainer}>
              
                <View style={ChangePasswordStyle.viewBody}>
                    <Text>
                        123
                    </Text>
                    <Text>456</Text>
                </View>
                <View style={ChangePasswordStyle.viewContainerButton}>
                    <View style={ChangePasswordStyle.viewButton}>
                        <Button icon="close" mode="contained" style={ChangePasswordStyle.cancelButton}>
                            141414
                        </Button>
                        <Button icon="done" mode="contained" style={ChangePasswordStyle.saveButton}>
                            41414
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

// STYLE CHANGE PASSWORD
const ChangePasswordStyle = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: '100%',
    },
    viewBody: {
        height: '80%',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '10%'
    },
    viewContainerButton: {
        height: '10%',
        justifyContent: 'flex-end',
    },
    viewInput: {
        marginTop: 30,
    },
    viewButton: {
        flexDirection: 'row'
    },
    cancelButton: {
        width: '50%',
        borderRadius: 0,
        backgroundColor: '#8D96A1',
        height: 40
    },
    saveButton: {
        width: '50%',
        borderRadius: 0,
        backgroundColor: '#81DBFB',
        height: 40
    }
});

export default NotificationDetail;