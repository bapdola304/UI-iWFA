import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    StyleSheet,

} from "react-native";
import { Badge, CheckBox } from 'native-base';
import { Button, IconButton } from 'react-native-paper';

import Notification from '../components/Notification'
const { width, height } = Dimensions.get("window");

export default class TabView extends Component {
    state = {

        translateX: new Animated.Value(0),
        data: { dataOne: [], dataTwo: [] },
        notificationType: 'confirm',
        isShow: false,
        isSelectAll: false
    };

    handleSlide = (type, notificationType) => {
        let {
            translateX,
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();


        this.setState({ notificationType, data: this.props.data });
    };
    componentWillMount() {
        this.setState({
            data: this.props.data
        });
    }
    handleSelectNotification = (notification) => {
        let notifications = this.state.data;
        let { dataOne, dataTwo } = notifications;
        let updateSelected = (items = []) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id == notification.id) {
                    items[i].isSelected = !notification.isSelected;
                    break;
                }
            }
            return items;
        }
        switch (notification.type) {
            case 'confirm':
                confirmations = updateSelected(dataOne);
                break;
            case 'infor':
                informations = updateSelected(dataTwo);
                break;
        }
        this.setState({ notifications: { dataOne, dataTwo } });
    }
    handleRemoveNotifications(notifications) {
        // let itemChecked = [];
        // _.map(notifications, items => {
        //     if (items.isSelected)
        //         itemChecked.push(items.id);
        // });
        // this.props.notificationActions.deleteNotifications(itemChecked);
    }
    handleSelectAll(checked) {
        console.log(checked);

        let notifications = this.state.data;
        let { dataOne, dataTwo } = notifications;
        let updateSelected = (items = []) => {
            for (let i = 0; i < items.length; i++) {
                items[i].isSelected = !checked;
            }
            return items;
        }
        switch (this.state.notificationType) {
            case 'confirm':
                confirmations = updateSelected(dataOne);
                break;
            case 'infor':
                informations = updateSelected(dataTwo);
                break;
        }
        this.setState({ isSelectAll: !checked, notifications: { dataOne, dataTwo } });
    }

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active
        } = this.state;
        console.log(this.state.isShow);
        let notifications = [];
        switch (this.state.notificationType) {
            case 'confirm':
                notifications = this.state.data.dataOne;
                break;
            case 'infor':
                notifications = this.state.data.dataTwo;
                break;
        }
        let { onPress } = this.props;
        return (
         
            <View style={{ backgroundColor : "#f7f7f7", height : '100%' }}>
                <View
                >
                    <View style={styles.wrapTab}>
                        <Animated.View style={[styles.animationTab, { transform: [{ translateX }] }]} />
                        <TouchableOpacity style={styles.touchTab}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne, 'confirm')
                                )
                            }
                        >
                            <Text style={{ color: active === 0 ? "#fff" : "#48d9d9" }}>
                                {this.props.tabOneText}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchTab}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo, 'infor')
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#48d9d9"
                                }}
                            >
                                {this.props.tabTwoText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ flexDirection : 'row', justifyContent : 'space-between', paddingHorizontal : 16}}>
                        <Button contentStyle = {{height : 30}} style = {{height : 30}} uppercase = {false} icon = 'done-all' color = '#48d9d9'  mode="contained" onPress={() => this.handleSelectAll(this.state.isSelectAll)}>Select All</Button>
                        <Button contentStyle = {{height : 30}} style = {{height : 30}} uppercase = {false} icon = 'delete' color = 'red' mode="contained" onPress={() => this.setState({ isShow: !this.state.isShow })}>
                            Delete
                        </Button >
                        
                    </View>
                    <ScrollView>
                        <View style={{ paddingHorizontal: 16 }}>
                            {notifications.map((item, index) => {

                                return (
                                    <View style={styles.container} key={index}>
                                        <View style={styles.wraptime}>
                                            <View style={styles.timeRow}>
                                                <View style={this.state.isShow ? [styles.startday, styles.active] : styles.startday}>
                                                    <CheckBox
                                                        checked={item.isSelected}
                                                        color="#48d9d9"
                                                        onPress={() => this.handleSelectNotification(item)}
                                                    />
                                                </View>

                                                <View style={styles.endday}>
                                                    <TouchableOpacity activeOpacity={0.3} onPress = {() => onPress(item)}>
                                                        <Text style={styles.textDay} >{item.content}</Text>
                                                        <IconButton icon = 'access-time' size={8}/>
                                                       <Text style={styles.timeNotifi}>8 mins ago</Text>
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
                                )
                            })
                            }
                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapTab: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 10,
        height: 36,
        position: "relative",
        width: '90%',
        marginLeft: "auto",
        marginRight: "auto",
    },
    animationTab: {
        position: "absolute",
        width: "50%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#007aff",
        borderRadius: 4,
    },
    touchTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#007aff",
        borderRadius: 4,
    },
    container: {
        marginTop: 5,
        padding: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor : '#fff'

    },
    wraptime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    startday: {
        display: 'none'
    },
    endday: {
        width: '80%'
    },
    timeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textDay: {
        fontSize : 16

    },
    active: {
        display: 'flex',
        marginRight : 30
    },
    timeNotifi : {
        fontSize : 12,
        color : 'grey'
    }

})