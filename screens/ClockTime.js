import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Image, ScrollView, TouchableOpacity, Text, Button, Dimensions } from 'react-native'
import logo from '../assets/LoginBg.png'
import carendarIcon from '../assets/icon/timesheet.png'
var {height, width} = Dimensions.get('screen');
class ClockTime extends Component {
    static navigationOptions = {
       header : null
      };
    getDate = () => {
        var today = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let day = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        return `${weekday[today.getDay()]}, ${day}`;
    }
    getTime() {
        var today = new Date();
        var h = today.getHours()
        let m = today.getMinutes();
        if (m < 10) {
            m = '0' + m
        }
        if (h < 10) {
            h = '0' + h
        }
        return h + ':' + m
    }
    render() {

        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.img}>
                    <Image source={logo} style = {{height : height/2}}/>
                </View>

                <View style={styles.wrapDate}>
                    <Text style={styles.time}>{this.getTime()}</Text>
                    <Text style={styles.day}>{this.getDate()}</Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.wrapSheet}>
                        <Image source={carendarIcon} style={styles.carendarIcon} />
                        <Text style={styles.time2}>80:30 - 11:45</Text>
                    </View>
                    <View style={styles.wrapSheet}>
                        <Image source={carendarIcon} style={styles.carendarIcon} />
                        <Text style={styles.time2}>13:30 - 17:45</Text>
                    </View>


                </View>
                <View style={styles.lockIn}>
                    <Button
                        style={styles.button}
                        onPress={this.onLogin}
                        title="CLOCK IN"
                        color="#48d9d9"
                        borderRadius={20}
                    />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop : 30,
        padding : 20,
        width: '80%',
        position: 'absolute',
        top: '60%',
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: 'grey',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderWidth: 0.5,

    },
    wrapSheet: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 15
    },
    img: {
        width: '100%'
    },
    logo: {
        position: 'absolute',
        top: '45%'
    },
    carendarIcon: {
        width: 42,
        height: 42,
        marginRight: '5%'
    },
    wrapDate: {
        position: 'absolute',
        top: '35%',
    },
    time: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    day: {
        fontSize: 20,
        fontWeight: '100',
        color: 'white'
    },
    time2: {
        fontSize: 20,
        fontWeight: '100',
        color: '#48d9d9'
    },
    lockIn : {
        top : '50%',
        width : '80%'
    }
})
export default ClockTime;