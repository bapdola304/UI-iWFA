import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button, TouchableHighlight, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Badge, Left, Right, Thumbnail, Icon } from 'native-base';
import Modal from 'react-native-modalbox';
import Swipeout from 'react-native-swipeout';

export default class Notification extends Component {
    onPress = () =>{
        Alert.alert('Alert', 
        'Are you sure want to delete?',
        [
            {text : 'No', onPress : () => console.log('cancel'), style : 'cancel'},
            {text : 'Yes', onPress : () => console.log(this.props.dataNotifi.item.content)}
        ]
        )
    }
    render() {
        let id = 2;
        const swipeSetting = {
            id : 2,
            autoClose : true,
            right : [
                {
                    onPress : this.onPress,
                    text : 'Delete', type : 'delete'
                }
            ]
        }
        return (
            <Swipeout {...swipeSetting}>
            <TouchableOpacity activeOpacity={0.3}>
                <View style={styles.container}>
                    <View style={styles.wraptime}>
                        <View style={styles.timeRow}>
                            <View style={styles.startday}>
                                <Image source = {{uri : 'https://avatars2.githubusercontent.com/u/1203949?s=180&v=4'}} style = {{width : 50, height : 50}}/>
                            </View>

                            <View style={styles.endday}>
                                <Text style={styles.textDay} >{this.props.dataNotifi.item.content}</Text>
                                <Text>8 mins ago</Text>
                            </View>
                        </View>
                        <View style={styles.statusRow}>
                            <Badge warning>
                                <Text>new</Text>
                            </Badge>
                        </View>
                    </View>
                </View>

               
            </TouchableOpacity>
            </Swipeout>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop : 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        backgroundColor: '#f7f7f7',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        elevation: 1

    },
    wraptime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    startday: {
        paddingHorizontal: 8
    },
    endday: {
        paddingHorizontal: 8,
        width : '80%'
    },
    timeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textDay: {
        color: '#48d9d9',
    
    },
    
})