import React, { Component } from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Badge } from 'native-base';
export default class ListMenu extends Component {
    onPress = () => {
        this.props.onPress(this.props.menuItem.item.router)
    }
    render() {
        let { menuItem } = this.props;

        return (
            <View>
                <TouchableOpacity activeOpacity={0.3} onPress={this.onPress}>
                    <View style={styles.container}>
                        <Image style={styles.imgMenu} source={menuItem.item.img} />
                        <Text style={styles.textMenu}>{menuItem.item.name}</Text>
                        { menuItem.item.router == 'Notification' ? <Badge><Text>2</Text></Badge> : <Text></Text>}
                    </View>
               
                    
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: '#ffffff'



    },
    container1: {
        backgroundColor: '#d4d5d8',
    },
    red: {
        backgroundColor: 'red'
    },
    imgMenu: {
        width: 54,
        height: 54,
        position: 'absolute',
        left: -20

    },
    textMenu: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: '20%',
        color: '#323551',
        width: '120%'
    }
})
