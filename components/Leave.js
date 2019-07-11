import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button, TouchableHighlight, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Badge, Left, Right, Thumbnail, Icon } from 'native-base';
import Modal from 'react-native-modalbox';
class Leave extends Component {
    onPress = () =>{
        this.props.onPress(this.props.data)
    }

    render() {

        return (
            <TouchableOpacity activeOpacity={0.3} onPress = {this.onPress}>
                <View style={styles.container}>
                    <View style={styles.wraptime}>
                        <View style={styles.timeRow}>
                            <View style={styles.startday}>
                                <Text style={styles.textDay} >Jul 06, 2019</Text>
                                <Text>04 : 50 PM</Text>
                            </View>
                            <View>
                                <Text> ── </Text>
                            </View>
                            <View style={styles.endday}>
                                <Text style={styles.textDay} >Jul 09, 2019</Text>
                                <Text>05 : 50 PM</Text>
                            </View>
                        </View>
                        <View style={styles.statusRow}>
                            <Badge warning>
                                <Text>Pending</Text>
                            </Badge>
                        </View>
                    </View>
                    <View style={styles.reasonRow}>
                        <Icon name="md-sad" style={styles.iconRow} />
                        <Text style={styles.reasonText}>Sick Leave (8.0) </Text>
                    </View>

                </View>

               
            </TouchableOpacity>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        padding: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderRadius: 10,
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
        paddingHorizontal: 16
    },
    endday: {
        paddingHorizontal: 16
    },
    timeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    reasonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 8,
        paddingHorizontal: 16,
        paddingTop: 10
    },
    reasonText: {
        paddingHorizontal: 8,
        fontSize: 12
    },
    iconRow: {
        fontSize: 12
    },
    textDay: {
        color: '#48d9d9'
    },
    
})

export default Leave;