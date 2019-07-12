import React, { Component } from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class ListMenu extends Component {
    onPress = () =>{
        this.props.onPress(this.props.menuItem.item.router)
    }
    render() {
        let { menuItem } = this.props;
        console.log(this.props.navigation);

        return (
            <View>
                <TouchableOpacity activeOpacity ={0.3} onPress={this.onPress}>
                    <View style={styles.container}>
                        <Image style={styles.imgMenu} source={menuItem.item.img} />
                        <Text style={styles.textMenu}>{menuItem.item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        padding: 20,
        width : '80%',
        marginLeft : '13%',
        flexDirection : 'column',
         justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        shadowColor: '#000',
        borderBottomWidth : 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,



    },
    container1: {
        backgroundColor: '#d4d5d8',
    },
    red: {
        backgroundColor: 'red'
    },
    imgMenu: {
        width: 50,
        height: 50,
        position : 'absolute',
        left : -20

    },
    textMenu: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500',
        marginLeft : '15%',
        color : '#48d9d9'
    }
})
