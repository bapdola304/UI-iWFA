import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { FlatList, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import ListMenu from '../components/ListMenu'
import dataListMenu from './menuconfig/menuconfig'
import logo from '../assets/icon/clocktime.png'

export default class Home extends Component {
    static navigationOptions = {
        headerStyle: {
          height : 0
        },
        header : null
      };
    componentWillMount() {

    }
    onRiderect = (router) =>{
        this.props.navigation.navigate(router)
    }
    render() {
    
        return (<View style={styles.container}>

           
            <View style={styles.header}>
                <TouchableOpacity >
                <View style={styles.headerIcon}>
                </View>
                <View style={styles.viewButton}>
                        <View style={styles.button}>
                            <Image source = {logo} style = {{  width: 50, height: 50}}/>
                            <Text style = {styles.textTime}>Clock Time</Text>
                        </View>
                  
                </View>
                  </TouchableOpacity>
            </View>

         

            <ScrollView>
            <FlatList
                data={dataListMenu}
                renderItem={(item) =>
                    <View style={styles.warp}>
                        <ListMenu menuItem={item} onPress = {(router) => this.onRiderect(router)}/>
                    </View>
                }

            />
            </ScrollView>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#f7f7f7',
        height : '100%'


    },
    warp: {
        flex: 1,
        marginHorizontal : 8
    },
    imgMenu : {
        width : 64,
        height : 64
    },
    textMenu : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : '500'
    },
    clocktime : {
        flexDirection : 'column',
        backgroundColor : '#48d9d9',  
        alignItems : 'center',
        padding : 20,
        borderRadius : 20,
        shadowColor: '#000',
        borderRadius: 20,
        borderColor : 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderWidth: 0.5
        
    },
    
    header:{
        width:'100%',
        height:'20%',
        backgroundColor:'rgb(32,196,211)',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius:200,
        alignItems:'center',
        marginBottom : '10%'
    },
    button: {
        width:110,
        height:110,
        backgroundColor: 'rgb(255,255,255)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:55,
        zIndex:4,
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        top : '40%'
    },
    viewButton:{
        elevation:4,
        zIndex : 99
    },
    headerIcon: {
        width:'100%',
        height:'15%',
        marginTop:'5%',
        flexDirection:'row',
    },
    textTime : {
        fontWeight: '500',
        color : '#48d9d9'
    }
})