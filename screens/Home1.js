import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { FlatList, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import ListMenu from '../components/ListMenu'
import dataListMenu from './menuconfig/menuconfig'
import logo from '../assets/menuicon/alarm-clock.png'
import back from '../assets/background_login.png'
import br from '../assets/br11.jpg'
var { height, width } = Dimensions.get('screen');
export default class Home1 extends Component {
    static navigationOptions = {
        header: null
    };
    onRiderect = (router) => {
        this.props.navigation.navigate(router)
    }
    render() {
        return (<View style={styles.container}>
            {/* <View style={styles.board}>
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
            </View> */}
            <View style={styles.fixed}>
                <Image source={br} style={{ height: height/4, width : '100%' }} />
            </View>


            <ScrollView style={[styles.fixedList]}>
                <View style={{ paddingHorizontal: 8, marginTop : 30}}>
                    <FlatList
                        numColumns={2}
                        data={dataListMenu}
                        renderItem={(item) =>
                            <View style={styles.warp}>
                                <ListMenu menuItem={item} onPress={(router) => this.onRiderect(router)} />
                            </View>
                        }

                    />
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ClockTime')}>
                        <View style={styles.button}>
                            <Image source={logo} style={{ width: 50, height: 50 }} />
                            <Text style={styles.textTime}>Clock Time</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        height: '100%',
        position: 'relative'
    },
    warp: {
        flex: 1,
        paddingHorizontal: 8,
        marginLeft: "5%"
    },
    imgMenu: {
        width: 64,
        height: 64
    },
    textMenu: {
        marginTop: 10,
        fontSize: 15,
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
        backgroundColor: '#f7f7f7'

    },
    header: {
        width: '150%',
        height: '30%',
        backgroundColor: 'rgb(32,196,211)',
        borderBottomLeftRadius: 400,
        borderBottomRightRadius: 400,
        alignItems: 'center',
        zIndex: -1,
    },
    button: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        shadowColor: '#000',
        backgroundColor: '#48d9d9',
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
    },
    viewButton: {
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIcon: {
        width: '100%',
        height: '15%',
        marginTop: '5%',
        flexDirection: 'row',
    },
    textTime: {
        fontWeight: '500',
        color: '#323551'
    },
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
    fixedList: {
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor : '#f7f7f7', 
        borderTopLeftRadius : 40, 
        borderTopRightRadius : 40
    }
}) 