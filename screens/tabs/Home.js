import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-basket" style={{ color: tintColor }} />
        }
    }
    componentWillMount () {
        
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is BasketTab
                </Text>
            </Content>
        </Container>);
    }
}