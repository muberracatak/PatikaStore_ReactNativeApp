import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';

const window = Dimensions.get('window');


export default class Splash extends Component {
    constructor(props) {
    super(props);
    this.state = {
    };
}

    render() {
        return (
            <View style={{backgroundColor:'#ffbc00',alignItems:'center',justifyContent:'center',width:window.width,height:window.height}}>
        </View>)
    }
}
