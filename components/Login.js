import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, CheckBox } from 'native-base';
import logo from '../assets/iwfa.png'
import loginValidate from '../validate/login.validate'
const BLUE = "#48d9d9";
const LIGHT_GRAY = "#D3D3D3";
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
            checked: false,
            username: null,
            password: null,
            errorUsername : null,
            errorPassword : null
        }
    }
    handleFocus = event => {
        this.setState({ isFocused: true });

    }
    onLogin = () => {
        let userLogin = {
            username : this.state.username,
            password : this.state.password
        }
        let error = loginValidate(userLogin);
        if(Object.keys(error).length > 0){
            this.setState({
                errorUsername : error.username,
                errorPassword : error.password
            });
        }else{
            this.props.onPress(userLogin)
        }
    }
    render() {
        console.log(this.props);
        let {  onPress } = this.props 
        const { isFocused, checked, errorUsername, errorPassword } = this.state;
        
        return (
            <View>
                <Image source={logo} style={styles.img} />

                <View style={styles.container}>
                    <Form>
                        <Item floatingLabel error = {errorUsername ? true : false}>
                            <Label>Username</Label>
                            <Input
                                underlineColorAndroid={
                                    isFocused ? BLUE : LIGHT_GRAY
                                }
                                onFocus={this.handleFocus}
                                onChangeText={(username) => this.setState({ username })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                underlineColorAndroid={
                                    isFocused ? BLUE : LIGHT_GRAY
                                }
                                onFocus={this.handleFocus}
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry = {true}
                            />
                        </Item>
                    </Form>
                    <View style={styles.wrap}>
                        <View style={styles.wrapcheckbox}>
                            <CheckBox
                                checked={checked}
                                onPress={() => this.setState({ checked: !checked })}
                                color="#48d9d9"
                            />
                            <Text style={styles.text}>Keep me signed in</Text>
                        </View>
                        <View style={styles.forgotpass}>
                            <Text style={styles.text}>Forgot password</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Button
                            onPress={this.onLogin}
                            title="Login"
                            color="#48d9d9"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 40,
        paddingRight: 30
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    img: {
        width: '100%'
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 30

    },
    wrapcheckbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    forgotpass: {
        marginRight: 0,
        alignItems: 'center',
        color: '#48d9d9',
    }
})
export default Login;