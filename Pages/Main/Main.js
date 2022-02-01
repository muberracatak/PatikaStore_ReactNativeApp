import React, {Component } from "react";
import { View, Dimensions} from "react-native";

const window = Dimensions.get('window');


export default class Main extends Component {

    constructor(props) {
    super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View style={{width:window.width,height:window.height,alignItems:'center',backgroundColor:'#fcfcfc'}}>
        </View>
        )
    }
}
