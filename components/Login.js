import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, CheckBox, Icon } from 'native-base';
import logo from '../assets/background_login.png'
import loginValidate from '../validate/login.validate'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFocused: false,
            checked: false,
            username: null,
            password: null,
            errorUsername: null,
            errorPassword: null
        }
    }
    handleFocus = event => {
        this.setState({ isFocused: true });

    }
    onLogin = () => {
        let userLogin = {
            username: this.state.username,
            password: this.state.password
        }
        let error = loginValidate(userLogin);
        if (Object.keys(error).length > 0) {
            this.setState({
                errorUsername: error.username,
                errorPassword: error.password
            });
        } else {
            this.props.onPress(userLogin)
        }
    }
    render() {
        let { onPress } = this.props
        const { isFocused, checked, errorUsername, errorPassword } = this.state;
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={logo} style={styles.img} />

                <View style={styles.container}>
                    <Form>
                        <Item floatingLabel error={errorUsername ? true : false}>
                            <Label>Username</Label>
                            <Input
                                onChangeText={(username) => this.setState({ username })}
                            />
                   
                        </Item>
                        <Item floatingLabel error={errorPassword ? true : false}>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={true}
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

                    </View>
                    <TouchableOpacity>
                        <Button
                            style = {styles.button}
                            onPress={this.onLogin}
                            title="Login"
                            color="#48d9d9"
                            borderRadius = {20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.forgotpass}>
                    <Text style={styles.text}>Forgot password ?</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom : 30,
        width: '80%',
        position: 'absolute',
        top: '80%',
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor : 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderWidth: 0.5
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
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
        position: 'absolute',
        bottom : '-65%',
        left : '15%'

    },
    button : {
        borderRadius : 20
    }
})
export default Login;