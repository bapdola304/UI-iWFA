import React, { Component } from 'react';
import Login from '../components/Login'
import {  View } from 'react-native'
class LoginScreen extends Component {


    onLogin = (userLogin) => {
        
        if(userLogin.username == 'admin' && userLogin.password == '123123')
            this.props.navigation.navigate('Home')
        else
            alert('error')
    }
    render() {
        return (
            <View>
                <Login onPress = {(userLogin) => this.onLogin(userLogin)}/>
            </View>
        );
    }
}

export default LoginScreen;