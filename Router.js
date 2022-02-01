import React, { Component } from 'react';
import { Dimensions} from 'react-native';
import AsyncBus from './Business/AsyncBus'
import Main from './Navigation'
import Intro from './Intro'
import Splash from './Splash'
import App_m from './src/App_m'


const window = Dimensions.get('window');


export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntro:"0", //intro var mı
      isLogin:"0", //login oldu mu
      isFirstOpen : true //ilk açılma durumu

    };
}
  //İşte bu sayfa yönlendirme sayfası

  render() {
        
    return(<App_m />)

    }
}