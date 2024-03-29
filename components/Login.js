import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, CheckBox, Icon } from 'native-base';
import logo from '../assets/background_login.png'
import loginValidate from '../validate/login.validate'
import Reinput from 'reinput'



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
                    <Reinput
                        label='Account'
                        height={200}
                        fontSize={18}
                        maxHeight={500}
                        underlineActiveColor='#48d9d9'
                        labelActiveColor='#48d9d9'
                        onChangeText={
                            (username) => {
                                let error = loginValidate(username,'Username');
                                this.setState({ username })
                                if (Object.keys(error).length > 0) {                               
                                    this.setState({
                                        errorUsername: error.Username
                                    });
                                    
                                }else{
                                    this.setState({
                                        errorUsername: null
                                    });
                                }
                            }
                        }
                        onBlur = {(username) => {
                            let error = loginValidate(this.state.username,'Username');
                            console.log(error);
                            
                            if (Object.keys(error).length > 0) {                               
                                this.setState({
                                    errorUsername: error.Username
                                });
                                
                            }
                        }}
                        error = {errorUsername ? errorUsername : false}                   

                    />
                    <Reinput
                        label='Password'
                        height={200}
                        fontSize={18}
                        maxHeight={500}
                        underlineActiveColor='#48d9d9'
                        labelActiveColor='#48d9d9'
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        onChangeText={
                            (password) => {
                                let error = loginValidate(password,'Password');
                                this.setState({ password })
                                if (Object.keys(error).length > 0) {                               
                                    this.setState({
                                        errorPassword: error.Password
                                    });
                                    
                                }else{
                                    this.setState({
                                        errorPassword: null
                                    });
                                }
                            }
                        }
                        onBlur = {(username) => {
                            let error = loginValidate(this.state.password,'password');
                            console.log(error);
                            
                            if (Object.keys(error).length > 0) {                               
                                this.setState({
                                    errorPassword: error.password
                                });
                                
                            }
                        }}
                        error = {errorPassword ? errorPassword : false} 
                    />
                   

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
                            style={styles.button}
                            onPress={this.onLogin}
                            title="Login"
                            color="#48d9d9"
                            borderRadius={20}
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
        paddingBottom: 30,
        width: '80%',
        position: 'absolute',
        top: '50%',
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderWidth: 0.5
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 15
    },
    img: {
        width: '100%',
        height : '80%'
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
        bottom: '-30%',
        left: '15%'

    },
    button: {
        borderRadius: 20
    },
    logo: {
        position: 'absolute',
        top: '45%'
    }
})
export default Login;