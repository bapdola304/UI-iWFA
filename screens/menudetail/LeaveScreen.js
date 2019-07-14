import React, { Component } from 'react';
import Leave from '../../components/Leave'
import { View, StyleSheet, Button } from 'react-native'
import Modal from 'react-native-modalbox';
import { Badge,Icon, Text } from 'native-base';

import { hide } from 'expo/build/launch/SplashScreen';
class LeaveScreen extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor : '#4cb4fc'
        },
        title : 'My Leaves'
      };
    state = {
        dataModal: null
    }
    onShowLeave = (a) => {
        this.setState({
            dataModal: a
        });
        this.refs.modal4.open();
    }

    render() {
        return (
            <View style={styles.container}>
                <Leave onPress={(a) => this.onShowLeave(a)} data={1} />
                <Leave onPress={(a) => this.onShowLeave(a)} data={2} />

                <View style={styles.btnAddLeave}>
                    <Button
                        onPress = {() =>  this.props.navigation.navigate('LeaveRequest')}
                        rounded
                        title="+"
                        color="#48d9d9"
                    />
                </View>
                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
                    <View style={styles.containerModal}>
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
                        <View style={styles.reasonRow}>
                            <Icon name="md-person" style={styles.iconRow} />
                            <Text style={styles.reasonText}>Truong Dinh Hang </Text>
                        </View>

                    </View>

                </Modal>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        height: '100%',
        paddingTop : 10

    },
    containerModal : {
        padding : 15
    },
    btnAddLeave: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        right: 16,
        bottom: 0,
        zIndex: 2
    },
    modal: {
      
        zIndex: 9999
    },

    modal4: {
        height: 140
    },
    text: {
        color: "black",
        fontSize: 22
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
    }
})
export default LeaveScreen;