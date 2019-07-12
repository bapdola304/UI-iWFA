import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { FlatList, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import ListMenu from '../components/ListMenu'
import dataListMenu from './menuconfig/menuconfig'
import logo from '../assets/icon/clocktime.png'

export default class Home extends Component {
    onRiderect = (router) => {
        this.props.navigation.navigate(router)
    }
    render() {

        return (<View style={styles.container}>

            <View style={styles.board}>
                <View style={styles.header}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('ClockTime')}>
                       
                        <View style={styles.viewButton}>
                            <View style={styles.button}>
                                <Image source={logo} style={{ width: 50, height: 50 }} />
                                <Text style={styles.textTime}>Clock Time</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView style={{ paddingTop: '10%', position : 'absolute', top : '30%', width : '100%', backgroundColor : '#f7f7f7' }}>
                <FlatList
                    data={dataListMenu}
                    renderItem={(item) =>
                        <View style={styles.warp}>
                            <ListMenu menuItem={item} onPress={(router) => this.onRiderect(router)} />
                        </View>
                    }

                />
            </ScrollView>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        height: '100%'


    },
    warp: {
        flex: 1,
        marginHorizontal: 8
    },
    imgMenu: {
        width: 64,
        height: 64
    },
    textMenu: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    clocktime: {
        flexDirection: 'column',
        backgroundColor: '#48d9d9',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        borderRadius: 20,
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderWidth: 0.5

    },
    board: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor : '#f7f7f7'
   
    },
    header: {
        width: '150%',
        height: '30%',
        backgroundColor: 'rgb(32,196,211)',
        borderBottomLeftRadius: 400,
        borderBottomRightRadius: 400,
        alignItems: 'center',
        zIndex : -1,
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        top: '50%',
        zIndex : 999999999999999,
    },
    viewButton: {
        elevation: 4,
        zIndex: 99
    },
    headerIcon: {
        width: '100%',
        height: '15%',
        marginTop: '5%',
        flexDirection: 'row',
    },
    textTime: {
        fontWeight: '500',
        color: '#48d9d9'
    }
})