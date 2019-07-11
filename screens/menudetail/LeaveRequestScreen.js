import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Icon, Picker, Form, Item, Label, Input } from "native-base";

import DatePicker from 'react-native-datepicker';
class LeaveRequestScreen extends Component {
    constructor(props) {
        super(props)
        //set value in state for initial date
        this.state = {
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            selected: ''
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
      
        
        return (
            <View style={styles.container}>
                <View style = {{backgroundColor : '#ccc', padding : 10}}>
                    <View style = {{padding : 20,backgroundColor : 'white'}}>
                        <Text>Hours Avaiable</Text>
                    </View>
                </View>
                <View style={styles.paddingTop20}>
                    <Text style={styles.textDate}>Leave Type *</Text>

                    <Item picker style={{ borderStyle: 'dashed' }}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, borderStyle: 'dashed' }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Item>

                </View>
                <View style={styles.dateRow}>

                    <DatePicker
                        style={styles.dataPickerRow}
                        date={this.state.startDate} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="Start Date *"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={styleInputDate}
                        onDateChange={(date) => { this.setState({ startDate: date }) }}
                        iconSource={require('../../assets/icon/car.png')}
                    />
                    <DatePicker
                        style={styles.dataPickerRow}
                        date={this.state.startTime} //initial date from state
                        mode="time" //The enum of date, datetime and time
                        placeholder="End Date *"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={styleInputDate}
                        onDateChange={(date) => { this.setState({ startTime: date }) }}
                        iconSource={require('../../assets/icon/clock.png')}
                    />

                </View>
                <View style={styles.dateRow}>
                    <DatePicker
                        style={styles.dataPickerRow}
                        date={this.state.endDate} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="End Date *"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minDate={this.state.startDate}
                        customStyles={styleInputDate}
                        onDateChange={(date) => { this.setState({ endDate: date }) }}
                        iconSource={require('../../assets/icon/car.png')}
                    />
                    <DatePicker
                        style={styles.dataPickerRow}
                        date={this.state.endTime} //initial date from state
                        mode="time" //The enum of date, datetime and time
                        placeholder="End Time *"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minDate={this.state.startTime}
                        customStyles={styleInputDate}
                        onDateChange={(date) => { this.setState({ endTime: date }) }}
                        iconSource={require('../../assets/icon/clock.png')}
                    />
                </View>
                <View>
                    <Item stackedLabel>
                        <Label style={{ fontSize: 12, color: 'grey' }}>Leave Hours</Label>
                        <Input disabled value='24.0' />
                    </Item>

                    <Item stackedLabel>
                        <Label style={{ fontSize: 12, color: 'grey' }}>Approver</Label>
                        <Input disabled value='Dinh Hang T9' />
                    </Item>

                </View>
                <Button
                    style={styles.button}
                    onPress={this.onLogin}
                    title="Submit"
                    color="#48d9d9"
                    borderRadius={20}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        width: '100%'
    },
    dateRow: {
        flexDirection: 'row'
    },
    dateRow1: {
        flexDirection: 'row',
        flex: 1,
        width: '100%'
    },
    dataPickerRow: {
        width: '50%',
        paddingHorizontal: 8,
        paddingTop: 20

    },
    textDate: {
        position: 'absolute',
        left: 0,
        top: 10,
        fontSize: 12,
        color: 'grey'
    },
    paddingTop20: {
        paddingTop: 20
    }
})
const styleInputDate = {
    dateIcon: {
        position: 'absolute',
        right: 0,
        top: 4,
        width: 32,
        marginLeft: -10
    },
    dateInput: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#48d9d9'
    },
    dateText: {
        fontSize: 16
    },
    dateIcon: {
        width: 16,
        height: 16,
        marginLeft: -20

    }

}
export default LeaveRequestScreen;