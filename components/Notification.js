import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button, TouchableHighlight, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Badge, Left, Right, Thumbnail, Icon, CheckBox } from 'native-base';
import Modal from 'react-native-modalbox';
import Swipeout from 'react-native-swipeout';

export default class Notification extends Component {
    state = {
        checked : false,
        isShow : false
    }
    onPress = () =>{
        Alert.alert('Alert',
        'Are you sure want to delete?',
        [
            {text : 'No', onPress : () => console.log('cancel'), style : 'cancel'},
            {text : 'Yes', onPress : () => console.log(this.props.dataNotifi.item.content)}
        ]
        )
    }
    componentWillReceiveProps(props) {
        this.setState({ isShow : props.isShow});
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
        console.log(this.props.isShow);
        return (
        
            
            <Swipeout {...swipeSetting}>
            
                <View style={styles.container}>
                    <View style={styles.wraptime}>
                        <View style={styles.timeRow}>
                            <View style={this.state.isShow ? [styles.startday, styles.active] : styles.startday}>
                            <CheckBox
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                                color="#48d9d9"
                            />
                            </View>
                            
                            <View style={styles.endday}>
                            <TouchableOpacity activeOpacity={0.3}>
                                <Text style={styles.textDay} >{this.props.dataNotifi.item.content}</Text>
                                <Text>8 mins ago</Text>
                                </TouchableOpacity>
                            </View>
                           
                        </View>
                        <View style={styles.statusRow}>
                            <Badge warning>
                                <Text>new</Text>
                            </Badge>
                        </View>
                    </View>
                </View>

               
            
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
        elevation: 1,
        paddingHorizontal : 8

    },
    wraptime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    startday: {
        display : 'none'
    },
    endday: {
        paddingLeft : 50,
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
    active : {
        display : 'flex'
    }
    
})