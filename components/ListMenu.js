import React, { Component } from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity ,Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Badge } from 'native-base';
var { height, width } = Dimensions.get('screen');
export default class ListMenu extends Component {
    onPress = () => {
        this.props.onPress(this.props.menuItem.item.router)
    }
    render() {
        console.log(height);
        
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
        padding: height/15,
        paddingHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
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
        left: 20,
        top : 10

    },
    textMenu: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#323551',
        position: 'absolute',
        right: 10,
        bottom : 10,
    }
})
