import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { FlatList, View, StyleSheet, Image, ScrollView } from 'react-native'
import ListMenu from '../../components/ListMenu'
import dataListMenu from '../menuconfig/menuconfig'

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        },
        header : null
    }
    componentWillMount() {

    }
    render() {
    
        return <View style={styles.container}>
            <ScrollView>
            <FlatList
                numColumns={2}
                data={dataListMenu}
                renderItem={(item) =>
                    <View style={styles.warp}>
                        <ListMenu menuItem={item} />
                    </View>
                }

            />
           
            <View style = {{ flex : 1, paddingHorizontal : 8, marginBottom : 50}}>
                <View style = {styles.clocktime}>
                    <Image style = {styles.imgMenu} source = {require('../../assets/imgmenu/alarm-clock.png')}/>
                    <Text style = {styles.textMenu}>Clock Time</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop : 10,
        paddingHorizontal : 8,
        backgroundColor : '#dddddf',
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
        
    }
})