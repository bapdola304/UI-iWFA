import React, { Component } from 'react';
import Login from '../components/Login'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-datepicker'

class LeaveRequest extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "06-07-2019", time : "13:20" }
    }

    render() {
        return (
            <View>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    cancelBtnTestID = "Cancel"
                    customStyles={
                        stylesDate
                        // ... You can check the source to find the other keys.
                    }
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
                <DatePicker
                    style={{ width: 200}}
                    date={this.state.time}
                    mode="time"
                    androidMode = "default"
                    customStyles={
                        stylesDate
                        // ... You can check the source to find the other keys.
                    }
                    onDateChange={(time) => { this.setState({ time: time }) }}
                />
            </View>
        )
    }
}
const stylesDate = {
    dateIcon: {
        position: 'absolute',
        right: 0,
        top: 4,
        marginLeft: 0
    },
    dateInput: {
        borderWidth : 0,
        borderBottomWidth : 2,
        borderColor : '#48d9d9'
    },
    dateText : {
     fontSize : 18,
     color : '#000',
     paddingLeft : 0
     
    }
} 
export default LeaveRequest;