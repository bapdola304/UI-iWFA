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
    StyleSheet
} from "react-native";
import { Badge, CheckBox } from 'native-base';
import Notification from '../components/Notification'
const { width } = Dimensions.get("window");

export default class TabView extends Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        data: { dataOne: [], dataTwo: [] },
        notificationType: 'confirm',
        isShow: false
    };

    handleSlide = (type, notificationType) => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
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
    handleSelectAll(checked = false) {
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
        this.setState({ isSelectAll: checked, notifications: { dataOne, dataTwo } });
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
        return (
            <View style={{ flex: 1 }}>
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
                    <Text onPress={() => this.setState({ isShow: !this.state.isShow })}>Delete</Text>
                    <Text onPress={this.handleSelectAll}>Delete All</Text>
                    <ScrollView>
                        <View style = {{paddingHorizontal : 16}}>
                            {notifications.map(item => {

                                return (
                                    <View style={styles.container}>
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
                                                    <TouchableOpacity activeOpacity={0.3}>
                                                        <Text style={styles.textDay} >{item.content}</Text>
                                                        <Text>8 mins ago</Text>
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
        marginRight: "auto"
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
        paddingTop: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        backgroundColor: '#f7f7f7',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        elevation: 1,
        paddingHorizontal: 16

    },
    wraptime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    startday: {
        display: 'none'
    },
    endday: {
        paddingLeft: 50,
        width: '80%'
    },
    timeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textDay: {
        color: '#48d9d9',

    },
    active: {
        display: 'flex'
    }

})